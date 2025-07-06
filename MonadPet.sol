// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract MonadPet is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter private _tokenIdCounter;

    struct PetType {
        string name;
        uint256 supply;
        Counters.Counter mintedCount;
        string baseURI;
    }

    mapping(string => PetType) public petTypes;
    mapping(address => mapping(string => bool)) public hasMintedPetType;

    struct Pet {
        string petTypeName;
        uint64 lastInteractionTime;
        uint64 lastPlayTime;
        uint64 lastFeedTime;
        uint8 fun;
        uint8 health;
        uint8 hunger;
        uint64 hospitalExitTime;
    }

    struct CurrentPetStats {
        string petTypeName;
        uint8 fun;
        uint8 health;
        uint8 hunger;
        bool isHospitalized;
        uint64 hospitalReturnTime;
        uint64 lastInteraction;
        uint64 lastPlay;
        uint64 lastFeed;
    }

    mapping(uint256 => Pet) public pets;

    event PetMinted(uint256 indexed tokenId, address indexed owner, string petType);
    event PetFed(uint256 indexed tokenId, uint8 newFun, uint8 newHealth, uint8 newHunger);
    event PetPlayed(uint256 indexed tokenId, uint8 newFun, uint8 newHealth, uint8 newHunger);
    event PetSentToHospital(uint256 indexed tokenId, uint64 returnTime);
    event PetReturnedFromHospital(uint256 indexed tokenId, address indexed owner);

    uint64 public constant HEALTH_DECAY_PERIOD = 2 days;
    uint64 public constant FUN_DECAY_PERIOD = 2 hours;
    uint64 public constant HUNGER_DECAY_PERIOD = 3 hours;
    uint64 public constant HOSPITAL_STAY_DURATION = 1 hours;

    constructor() ERC721("MonadPet", "MPET") Ownable(msg.sender) {
        petTypes["Molandak"] = PetType("Molandak", 100, Counters.Counter(0), "https://ipfs.io/ipfs/bafkreifrfkoeo4nu6b7bpvquif5cerqfg4wltsc26vwz7oase6cvz43r7i");
        petTypes["Moyaki"] = PetType("Moyaki", 100, Counters.Counter(0), "https://ipfs.io/ipfs/bafkreiejrxokfwoc5nzmcgagkj2chrhraager57ssydn6ani2d7ufwzyd4");
        petTypes["Chog"] = PetType("Chog", 100, Counters.Counter(0), "https://ipfs.io/ipfs/bafkreidhbrvwdxuqmjuxznzpipvsxvxxz3np3jqn4slfcgwtjmc6psicje");
    }

    function addPetType(string calldata _petTypeName, uint256 _supply, string calldata _baseURI) public onlyOwner {
        require(petTypes[_petTypeName].supply == 0, "Pet type already exists");
        petTypes[_petTypeName] = PetType(_petTypeName, _supply, Counters.Counter(0), _baseURI);
    }

    function updatePetTypeBaseURI(string calldata _petTypeName, string calldata _newBaseURI) public onlyOwner {
        require(petTypes[_petTypeName].supply > 0, "Pet type does not exist");
        petTypes[_petTypeName].baseURI = _newBaseURI;
    }

    function mintPet(string calldata _petTypeName) public {
        require(petTypes[_petTypeName].supply > 0, "Pet type does not exist");
        require(petTypes[_petTypeName].mintedCount.current() < petTypes[_petTypeName].supply, "Supply for this pet type exhausted");
        require(!hasMintedPetType[msg.sender][_petTypeName], "You have already minted this pet type");

        _tokenIdCounter.increment();
        uint256 newTokenId = _tokenIdCounter.current();
        petTypes[_petTypeName].mintedCount.increment();
        hasMintedPetType[msg.sender][_petTypeName] = true;

        _safeMint(msg.sender, newTokenId);
        pets[newTokenId] = Pet({
            petTypeName: _petTypeName,
            lastInteractionTime: uint64(block.timestamp),
            lastPlayTime: uint64(block.timestamp),
            lastFeedTime: uint64(block.timestamp),
            fun: 20,
            health: 20,
            hunger: 20,
            hospitalExitTime: 0
        });
        emit PetMinted(newTokenId, msg.sender, _petTypeName);
    }
    
    function _checkAndFinalizeHospital(uint256 tokenId) internal {
        Pet storage pet = pets[tokenId];
        if (pet.hospitalExitTime > 0 && block.timestamp >= pet.hospitalExitTime) {
            pet.health = 100;
            pet.fun = 100;
            pet.hunger = 100;
            pet.hospitalExitTime = 0;
            pet.lastFeedTime = uint64(block.timestamp);
            pet.lastPlayTime = uint64(block.timestamp);
            pet.lastInteractionTime = uint64(block.timestamp);
            emit PetReturnedFromHospital(tokenId, ownerOf(tokenId));
        }
    }

    function _updatePetState(uint256 tokenId) internal {
        _checkAndFinalizeHospital(tokenId); 
        
        Pet storage pet = pets[tokenId];
        if (pet.hospitalExitTime > 0) { 
            return;
        }

        uint64 currentTime = uint64(block.timestamp);

        uint64 timeSinceFeed = currentTime - pet.lastFeedTime;
        if (timeSinceFeed > 0) {

            uint8 healthDecay = uint8((timeSinceFeed * 100) / HEALTH_DECAY_PERIOD);
            if (healthDecay > 0) {
                 pet.health = pet.health > healthDecay ? pet.health - healthDecay : 0;
            }

            uint8 hungerDecay = uint8((timeSinceFeed * 100) / HUNGER_DECAY_PERIOD);
             if (hungerDecay > 0) {
                pet.hunger = pet.hunger > hungerDecay ? pet.hunger - hungerDecay : 0;
            }

            if(healthDecay > 0 || hungerDecay > 0) {
                pet.lastFeedTime = currentTime;
            }
        }

        uint64 timeSincePlay = currentTime - pet.lastPlayTime;
        if(timeSincePlay > 0) {
            uint8 funDecay = uint8((timeSincePlay * 100) / FUN_DECAY_PERIOD);
            if (funDecay > 0) {
                pet.fun = pet.fun > funDecay ? pet.fun - funDecay : 0;
                pet.lastPlayTime = currentTime;
            }
        }
    }

    function getPetStats(uint256 tokenId) public view returns (CurrentPetStats memory stats) {
        ownerOf(tokenId);
        Pet storage pet = pets[tokenId];
        uint64 currentTime = uint64(block.timestamp);

        stats.petTypeName = pet.petTypeName;
        stats.hospitalReturnTime = pet.hospitalExitTime;
        stats.lastInteraction = pet.lastInteractionTime;
        stats.lastPlay = pet.lastPlayTime;
        stats.lastFeed = pet.lastFeedTime;

        if (pet.hospitalExitTime > currentTime) {
            stats.isHospitalized = true;
            stats.health = pet.health;
            stats.fun = pet.fun;
            stats.hunger = pet.hunger;
        } 
        else if (pet.hospitalExitTime > 0 && pet.hospitalExitTime <= currentTime) {
            stats.isHospitalized = false;
            
            uint64 timeSinceDischarge = currentTime - pet.hospitalExitTime;

            uint8 healthDecay = uint8((timeSinceDischarge * 100) / HEALTH_DECAY_PERIOD);
            stats.health = 100 > healthDecay ? 100 - healthDecay : 0;

            uint8 funDecay = uint8((timeSinceDischarge * 100) / FUN_DECAY_PERIOD);
            stats.fun = 100 > funDecay ? 100 - funDecay : 0;

            uint8 hungerDecay = uint8((timeSinceDischarge * 100) / HUNGER_DECAY_PERIOD);
            stats.hunger = 100 > hungerDecay ? 100 - hungerDecay : 0;
        } 
        else {
            stats.isHospitalized = false;
            
            uint64 timeSinceLastHealthUpdate = currentTime - pet.lastFeedTime;
            uint8 healthDecay = uint8((timeSinceLastHealthUpdate * 100) / HEALTH_DECAY_PERIOD);
            stats.health = pet.health > healthDecay ? pet.health - healthDecay : 0;

            uint64 timeSinceLastFunUpdate = currentTime - pet.lastPlayTime;
            uint8 funDecay = uint8((timeSinceLastFunUpdate * 100) / FUN_DECAY_PERIOD);
            stats.fun = pet.fun > funDecay ? pet.fun - funDecay : 0;

            uint64 timeSinceLastHungerUpdate = currentTime - pet.lastFeedTime;
            uint8 hungerDecay = uint8((timeSinceLastHungerUpdate * 100) / HUNGER_DECAY_PERIOD);
            stats.hunger = pet.hunger > hungerDecay ? pet.hunger - hungerDecay : 0;
        }

        return stats;
    }

    function getLastTokenId() public view returns (uint256) {
        return _tokenIdCounter.current();
    }

    function feedPet(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        _updatePetState(tokenId);

        Pet storage pet = pets[tokenId];
        require(pet.hospitalExitTime == 0, "Pet is in the hospital");

        pet.lastInteractionTime = uint64(block.timestamp);
        pet.lastFeedTime = uint64(block.timestamp);
        pet.hunger = pet.hunger + 30 > 100 ? 100 : pet.hunger + 30;
        pet.health = pet.health + 10 > 100 ? 100 : pet.health + 10;
        
        emit PetFed(tokenId, pet.fun, pet.health, pet.hunger);
    }

    function playWithPet(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        _updatePetState(tokenId);

        Pet storage pet = pets[tokenId];
        require(pet.hospitalExitTime == 0, "Pet is in the hospital");

        pet.lastInteractionTime = uint64(block.timestamp);
        pet.lastPlayTime = uint64(block.timestamp);
        pet.fun = pet.fun + 40 > 100 ? 100 : pet.fun + 40;
        pet.hunger = pet.hunger > 20 ? pet.hunger - 20 : 0;
        pet.health = pet.health + 5 > 100 ? 100 : pet.health + 5;
        
        emit PetPlayed(tokenId, pet.fun, pet.health, pet.hunger);
    }

    function sendPetToHospital(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        _updatePetState(tokenId);

        Pet storage pet = pets[tokenId];
        require(pet.hospitalExitTime == 0, "Pet is already in the hospital");
        require(pet.health < 100 || pet.fun < 100 || pet.hunger < 100, "Pet is at full stats");
        
        pet.hospitalExitTime = uint64(block.timestamp) + HOSPITAL_STAY_DURATION;

        emit PetSentToHospital(tokenId, pet.hospitalExitTime);
    }
    
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        ownerOf(tokenId);

        Pet storage pet = pets[tokenId];
        string memory finalImageUri = petTypes[pet.petTypeName].baseURI;

        string memory json = string(
            abi.encodePacked(
                '{"name": "', pet.petTypeName, ' #', tokenId.toString(), '",',
                '"description": "A MonadPet companion!",',
                '"image": "', finalImageUri, '",',
                '"attributes": [',
                    '{"trait_type": "Type", "value": "', pet.petTypeName, '"},',
                    '{"trait_type": "Health", "value": "', uint256(pet.health).toString(), '"},',
                    '{"trait_type": "Fun", "value": "', uint256(pet.fun).toString(), '"},',
                    '{"trait_type": "Hunger", "value": "', uint256(pet.hunger).toString(), '"}'
                ,']}'
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", Base64.encode(bytes(json))));
    }
}