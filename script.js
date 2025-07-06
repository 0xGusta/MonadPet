const CONTRACT_ADDRESS = "0x6e80993DAF4212084f1E8b64dCfDb99e95eA42aa";
const PUBLIC_RPC_URL = "https://testnet-rpc.monad.xyz";
const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_petTypeName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_supply",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_baseURI",
				"type": "string"
			}
		],
		"name": "addPetType",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_toTokenId",
				"type": "uint256"
			}
		],
		"name": "BatchMetadataUpdate",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "feedPet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "MetadataUpdate",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_petTypeName",
				"type": "string"
			}
		],
		"name": "mintPet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "newFun",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "newHealth",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "newHunger",
				"type": "uint8"
			}
		],
		"name": "PetFed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "petType",
				"type": "string"
			}
		],
		"name": "PetMinted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "newFun",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "newHealth",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "newHunger",
				"type": "uint8"
			}
		],
		"name": "PetPlayed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "PetReturnedFromHospital",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "returnTime",
				"type": "uint64"
			}
		],
		"name": "PetSentToHospital",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "playWithPet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "sendPetToHospital",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_petTypeName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
			}
		],
		"name": "updatePetTypeBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "FUN_DECAY_PERIOD",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLastTokenId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getPetStats",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "petTypeName",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "fun",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "health",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "hunger",
						"type": "uint8"
					},
					{
						"internalType": "bool",
						"name": "isHospitalized",
						"type": "bool"
					},
					{
						"internalType": "uint64",
						"name": "hospitalReturnTime",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "lastInteraction",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "lastPlay",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "lastFeed",
						"type": "uint64"
					}
				],
				"internalType": "struct MonadPet.CurrentPetStats",
				"name": "stats",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "hasMintedPetType",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "HEALTH_DECAY_PERIOD",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "HOSPITAL_STAY_DURATION",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "HUNGER_DECAY_PERIOD",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pets",
		"outputs": [
			{
				"internalType": "string",
				"name": "petTypeName",
				"type": "string"
			},
			{
				"internalType": "uint64",
				"name": "lastInteractionTime",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "lastPlayTime",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "lastFeedTime",
				"type": "uint64"
			},
			{
				"internalType": "uint8",
				"name": "fun",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "health",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "hunger",
				"type": "uint8"
			},
			{
				"internalType": "uint64",
				"name": "hospitalExitTime",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "petTypes",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "supply",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "_value",
						"type": "uint256"
					}
				],
				"internalType": "struct Counters.Counter",
				"name": "mintedCount",
				"type": "tuple"
			},
			{
				"internalType": "string",
				"name": "baseURI",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let provider, signer, contract, readOnlyContract;
let currentAccount = null;
let isWalletConnected = false;
let availableProviders = [];
let activeTimers = [];
let statRefreshInterval = null;

let gameSettings = { hospitalDurationMinutes: 10 };
let currentGamePetId = null;
let throwCount = 0;
const REQUIRED_THROWS = 3;
let isBallInPlay = false;
let gameAnimationId; 
let ball = { x: 0, y: 0, vx: 0, vy: 0, radius: 15 };
let pet = { x: 0, y: 0, width: 60, height: 60 };
const gravity = 0.4;
const friction = 0.98;
const bounceFactor = -0.7;

const ALLOWED_WALLETS_RDNS = new Set(['io.metamask','app.phantom','app.backpack','io.rabby','com.okex.wallet']);
const connectWalletBtn = document.getElementById('connectWalletBtn');
const petsContainer = document.getElementById('petsContainer');
const noPetsMessage = document.getElementById('noPetsMessage');
const mintContainer = document.getElementById('mintContainer');
const walletModal = document.getElementById('walletModal');
const closeWalletModalBtn = document.getElementById('closeWalletModalBtn');
const walletList = document.getElementById('walletList');
const minigameModal = document.getElementById('minigameModal');
const closeMinigameBtn = document.getElementById('closeMinigameBtn');
const throwCounterEl = document.getElementById('throwCounter');
const gameArea = document.getElementById('gameArea');
const gamePetEl = document.getElementById('gamePet');
const gameBallEl = document.getElementById('gameBall');
const throwBallBtn = document.getElementById('throwBallBtn');

const PET_TYPES = [
    { name: "Molandak", image: "images/molandak.png" },
    { name: "Moyaki", image: "images/moyaki.png" },
    { name: "Chog", image: "images/chog.png" },
];

function showNotification(message, type = 'info', duration = 4000) {
    const container = document.getElementById('notification-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, duration);
}

async function fetchGameSettings() {
    try {
        const durationSeconds = await readOnlyContract.HOSPITAL_STAY_DURATION();
        gameSettings.hospitalDurationMinutes = durationSeconds.toNumber() / 60;
    } catch (e) {
        console.error("Could not fetch game settings from contract, using default values.", e);
    }
}

window.addEventListener('eip6963:announceProvider', (event) => {
    const providerDetail = event.detail;
    if (ALLOWED_WALLETS_RDNS.has(providerDetail.info.rdns)) {
        if (!availableProviders.some(p => p.info.rdns === providerDetail.info.rdns)) {
            availableProviders.push(providerDetail);
        }
        renderWalletList();
    }
});

async function attemptAutoReconnect() {
    const lastRdns = localStorage.getItem('lastConnectedWalletRdns');
    if (lastRdns && !isWalletConnected) {
        const preferredProviderDetail = availableProviders.find(p => p.info.rdns === lastRdns);
        if (preferredProviderDetail) {
            await autoConnectWallet(preferredProviderDetail.provider);
        }
    }
}

async function autoConnectWallet(provider) {
    try {
        const accounts = await provider.request({ method: 'eth_accounts' });
        if (accounts && accounts.length > 0) {
            await connectWallet(provider, true);
        } else {
            localStorage.removeItem('lastConnectedWalletRdns');
        }
    } catch (error) {
        console.error("Error during auto-reconnection attempt:", error);
        localStorage.removeItem('lastConnectedWalletRdns');
    }
}

function requestProviders() { window.dispatchEvent(new Event('eip6963:requestProvider')); }

function renderWalletList() {
    if (!walletList) return;
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if(isMobile) {
        walletList.innerHTML = `<p style="text-align: center; font-size: 1.1rem;">Available on desktop only</p>`;
        return;
    }

    if (availableProviders.length === 0) {
        walletList.innerHTML = '<p>No supported wallet found.</p>';
        return;
    }
    walletList.innerHTML = '';
    availableProviders.sort((a,b) => a.info.name.localeCompare(b.info.name));
    availableProviders.forEach(providerDetail => {
        const walletOption = document.createElement('div');
        walletOption.className = 'wallet-option';
        walletOption.innerHTML = `<img src="${providerDetail.info.icon}" class="wallet-icon"><span>${providerDetail.info.name}</span>`;
        walletOption.addEventListener('click', () => {
            connectWallet(providerDetail.provider);
            closeWalletModal();
        });
        walletList.appendChild(walletOption);
    });
}

function openWalletModal() { if(walletModal) { requestProviders(); walletModal.classList.add('active'); } }
function closeWalletModal() { if(walletModal) walletModal.classList.remove('active'); }

async function init() {
    if(!connectWalletBtn) return;
    connectWalletBtn.addEventListener('click', () => {
        if (isWalletConnected) disconnectWallet();
        else openWalletModal();
    });
    if(closeWalletModalBtn) closeWalletModalBtn.addEventListener('click', closeWalletModal);
    if(walletModal) walletModal.addEventListener('click', (e) => { if (e.target === walletModal) closeWalletModal(); });
    if(closeMinigameBtn) closeMinigameBtn.addEventListener('click', closeMinigame);
    if(throwBallBtn) throwBallBtn.addEventListener('click', throwBall);

    try {
        const readOnlyProvider = new ethers.providers.JsonRpcProvider(PUBLIC_RPC_URL);
        readOnlyContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, readOnlyProvider);
        await fetchGameSettings();
        await displayPublicMintInfo();
    } catch (error) {
        console.error("Could not create read-only provider.", error);
        renderMintCards();
    }
    updateConnectButtonUI();
    showUserPets([]);
    requestProviders();
    setTimeout(attemptAutoReconnect, 500);
}

function updateConnectButtonUI() {
     if (isWalletConnected && currentAccount) {
        connectWalletBtn.innerHTML = `<i class="fas fa-sign-out-alt"></i><span>${currentAccount.substring(0, 6)}...${currentAccount.substring(currentAccount.length - 4)}</span>`;
        connectWalletBtn.classList.add('connected');
    } else {
        connectWalletBtn.innerHTML = `<i class="fas fa-wallet"></i><span>Connect Wallet</span>`;
        connectWalletBtn.classList.remove('connected');
    }
}

function disconnectWallet() {
    currentAccount = null; isWalletConnected = false;
    localStorage.removeItem('lastConnectedWalletRdns');
    if (statRefreshInterval) clearInterval(statRefreshInterval);
    showUserPets([]);
    updateMintButtonsForUser();
    updateConnectButtonUI();
    showNotification("Wallet disconnected", "info");
}

function renderMintCards() {
    if (!mintContainer) return;
    mintContainer.innerHTML = '';
    PET_TYPES.forEach(petType => {
        const card = document.createElement('div');
        card.className = 'pet-type-card';
        card.innerHTML = `<div class="pet-type-image"><img src="${petType.image}" alt="${petType.name}"></div> <h3 class="pet-type-name">${petType.name}</h3> <p class="pet-type-supply" id="supply-${petType.name}">Loading...</p> <button class="mint-btn" id="mint-btn-${petType.name}" data-type="${petType.name}" disabled>Connect Wallet</button>`;
        mintContainer.appendChild(card);
    });
}

async function displayPublicMintInfo() {
    renderMintCards();
    for (const petType of PET_TYPES) {
        try {
            const typeInfo = await readOnlyContract.petTypes(petType.name);
            const minted = typeInfo.mintedCount.toString();
            const supply = typeInfo.supply.toString();
            const supplyEl = document.getElementById(`supply-${petType.name}`);
            if (supplyEl) supplyEl.textContent = `Minted: ${minted} / ${supply}`;
            const mintBtn = document.getElementById(`mint-btn-${petType.name}`);
            if(mintBtn && Number(minted) >= Number(supply)){
                mintBtn.textContent = "Sold Out";
                mintBtn.disabled = true;
            }
        } catch (error) {
            const supplyEl = document.getElementById(`supply-${petType.name}`);
            if(supplyEl) supplyEl.textContent = "Could not load data";
        }
    }
}

async function connectWallet(selectedProvider, isAutoConnect = false) {
    if (!selectedProvider) {
        if (!isAutoConnect) showNotification('Please select a wallet provider.', 'error');
        return;
    }
    const monadChainId = '0x279f';
    try {
        const method = isAutoConnect ? 'eth_accounts' : 'eth_requestAccounts';
        const accounts = await selectedProvider.request({ method });

        if (!accounts || accounts.length === 0) {
            if (!isAutoConnect) showNotification('No account was authorized.', 'error');
            return;
        }
        const currentChainId = await selectedProvider.request({ method: 'eth_chainId' });
        if (currentChainId !== monadChainId) {
            try {
                await selectedProvider.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: monadChainId }] });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    await selectedProvider.request({
                        method: 'wallet_addEthereumChain',
                        params: [{ chainId: '0x279f', chainName: 'Monad Testnet', rpcUrls: ['https://testnet-rpc.monad.xyz'], nativeCurrency: { name: 'MON', symbol: 'MON', decimals: 18 }, blockExplorerUrls: ['https://testnet.monadexplorer.com'] }],
                    });
                } else { throw switchError; }
            }
        }
        handleAccountsChanged(accounts, selectedProvider);
    } catch (error) {
        if (!isAutoConnect) {
            console.error("Error connecting wallet:", error);
            showNotification("Failed to connect: " + (error.message || "User rejected the request."), 'error');
        }
        disconnectWallet();
    }
}

function handleAccountsChanged(accounts, connectedProvider) {
    if (accounts.length === 0) return disconnectWallet();
    currentAccount = accounts[0];
    provider = new ethers.providers.Web3Provider(connectedProvider);
    signer = provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    isWalletConnected = true;

    const providerInfo = availableProviders.find(p => p.provider === connectedProvider)?.info;
    if (providerInfo) {
        localStorage.setItem('lastConnectedWalletRdns', providerInfo.rdns);
    }
    
    provider.provider.removeAllListeners(); 
    provider.provider.on('accountsChanged', (newAccounts) => handleAccountsChanged(newAccounts, connectedProvider));
    provider.provider.on('chainChanged', disconnectWallet);
    updateConnectButtonUI();
    loadUserPets();
    updateMintButtonsForUser();
    startAutomaticStatRefresh();
}

function startAutomaticStatRefresh() {
    if (statRefreshInterval) clearInterval(statRefreshInterval);
    if (isWalletConnected) {
        statRefreshInterval = setInterval(() => {
            if (isWalletConnected) {
                loadUserPets();
            }
        }, 5 * 60 * 1000);
    }
}

async function updateMintButtonsForUser() {
    for (const petType of PET_TYPES) {
        const mintBtn = document.getElementById(`mint-btn-${petType.name}`);
        if (!mintBtn || mintBtn.textContent === "Sold Out") continue;
        mintBtn.disabled = !isWalletConnected;
        mintBtn.textContent = isWalletConnected ? "Mint Now" : "Connect Wallet";
        if (isWalletConnected && contract) {
            try {
                if (await contract.hasMintedPetType(currentAccount, petType.name)) {
                    mintBtn.textContent = "Already Minted";
                    mintBtn.disabled = true;
                }
            } catch (error) { console.error(`Error checking mint status for ${petType.name}:`, error); }
        }
    }
     document.querySelectorAll('.mint-btn').forEach(btn => {
        btn.removeEventListener('click', handleMintClick);
        if(!btn.disabled) btn.addEventListener('click', handleMintClick);
    });
}

async function handleMintClick(event) { await mintPet(event.target.dataset.type, event); }

async function loadUserPets() {
    if (!contract || !currentAccount || !petsContainer) return showUserPets([]);
    const userPets = [];
    try {
        const balance = await contract.balanceOf(currentAccount);
        if (balance.toNumber() === 0) return showUserPets([]);
        const latestTokenId = await contract.getLastTokenId();
        for (let i = 1; i <= latestTokenId; i++) {
            try {
                if ((await contract.ownerOf(i)).toLowerCase() === currentAccount.toLowerCase()) {
                    const petStats = await contract.getPetStats(i);
                    const tokenUri = await contract.tokenURI(i);
                    const decodedUri = JSON.parse(atob(tokenUri.split(',')[1]));
                    userPets.push({
                        id: i, name: decodedUri.name, type: petStats.petTypeName,
                        health: petStats.health, fun: petStats.fun, hunger: petStats.hunger,
                        image: decodedUri.image, isHospitalized: petStats.isHospitalized,
                        hospitalReturnTime: petStats.hospitalReturnTime
                    });
                }
            } catch (e) {}
        }
        await showUserPets(userPets);
    } catch (error) {
        console.error("Error loading user pets:", error);
        showUserPets([]);
    }
}

async function showUserPets(pets) {
    if(!petsContainer || !noPetsMessage) return;
    activeTimers.forEach(timer => clearInterval(timer));
    activeTimers = [];
    if (pets.length === 0) {
        petsContainer.innerHTML = '';
        noPetsMessage.style.display = 'block';
        return;
    }
    noPetsMessage.style.display = 'none';
    const hospitalTooltip = `Recovers all stats to 100%&#x0a;It will take: ${gameSettings.hospitalDurationMinutes} minutes`;
    petsContainer.innerHTML = pets.map(pet => {
        const statsOrHospital = pet.isHospitalized
            ? `<div class="hospital-status"><i class="fas fa-bed-pulse"></i><h4>Hospitalized 🤕</h4><p>Time remaining: <span id="timer-${pet.id}">--:--</span></p></div>`
            : `<div class="stats"><div class="stat-bar-container"><div class="stat-header"><span>Health</span><span>${pet.health}%</span></div><div class="bar"><div class="fill health-fill" style="width: ${pet.health}%;"></div></div></div><div class="stat-bar-container"><div class="stat-header"><span>Fun</span><span>${pet.fun}%</span></div><div class="bar"><div class="fill fun-fill" style="width: ${pet.fun}%;"></div></div></div><div class="stat-bar-container"><div class="stat-header"><span>Hunger</span><span>${pet.hunger}%</span></div><div class="bar"><div class="fill hunger-fill" style="width: ${pet.hunger}%;"></div></div></div></div>`;
        return `<div class="pet-card"><div class="pet-image"><img src="${pet.image}" alt="${pet.name}"></div><div class="pet-info" title="Decay periods: Hunger: 3 Hours | Health: 2 Days | Fun: 2 Hours"><h3 class="pet-name">${pet.name}</h3><span class="pet-type">${pet.type}</span>${statsOrHospital}<div class="actions"><button class="btn btn-feed" data-id="${pet.id}" ${pet.isHospitalized ? 'disabled' : ''} data-tooltip="Health: +10%&#x0a;Hunger: +30%"><i class="fas fa-utensils"></i> Feed</button><button class="btn btn-play" data-pet-id="${pet.id}" data-pet-image="${pet.image}" ${pet.isHospitalized ? 'disabled' : ''} data-tooltip="Fun: +40%&#x0a;Health: +5%&#x0a;Hunger: -20%"><i class="fas fa-gamepad"></i> Play</button><button class="btn btn-hospital" data-id="${pet.id}" ${pet.isHospitalized ? 'disabled' : ''} data-tooltip="${hospitalTooltip}"><i class="fas fa-hospital"></i> Hospital</button></div></div></div>`}).join('');
    
    for(const pet of pets) {
        if (pet.isHospitalized) {
            await startHospitalTimer(pet.id, pet.hospitalReturnTime.toNumber());
        }
    }
    document.querySelectorAll('.actions .btn').forEach(btn => btn.addEventListener('click', handleActionClick));
}

async function startHospitalTimer(petId, endTime) {
    const timerElement = document.getElementById(`timer-${petId}`);
    if (!timerElement || !provider) return;
    try {
        const latestBlock = await provider.getBlock('latest');
        const blockTimestamp = latestBlock.timestamp;
        let timeLeft = endTime - blockTimestamp;
        const updateTimer = () => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerElement.textContent = "Ready!";
                showNotification('A pet has recovered!', 'success');
                loadUserPets();
                return;
            }
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            timeLeft--;
        };
        updateTimer(); 
        const timerInterval = setInterval(updateTimer, 1000);
        activeTimers.push(timerInterval);
    } catch(e) {
        console.error("Could not get block time for timer sync", e);
        timerElement.textContent = "Time sync error";
    }
}

function handleActionClick(event) {
    const button = event.currentTarget;
    const petId = button.dataset.id || button.dataset.petId;
    if (button.classList.contains('btn-feed')) feedPet(petId, event);
    if (button.classList.contains('btn-play')) startMinigame(petId, button.dataset.petImage);
    if (button.classList.contains('btn-hospital')) sendPetToHospital(petId, event);
}

async function performTransaction(action, idOrType, successMessage, event) {
    if (!contract || !currentAccount) return showNotification('Please connect your wallet.', 'error');
    const originalButton = event.target.closest('button');
    const originalText = originalButton.innerHTML;
    originalButton.disabled = true;
    originalButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Processing...`;
    try {
        const tx = await action(idOrType);
        showNotification('Transaction sent...', 'info');
        await tx.wait();
        showNotification(successMessage, 'success');
    } catch (error) {
        console.error("Transaction failed:", error);
        const message = error?.data?.message || error.message || "An unknown error occurred.";
        showNotification(`Transaction failed: ${message.substring(0, 100)}`, 'error', 6000);
    } finally {
         if (document.getElementById('minigameModal').classList.contains('active')) closeMinigame();
         await loadUserPets();
         await displayPublicMintInfo();
         await updateMintButtonsForUser();
    }
}

async function mintPet(petType, event) { await performTransaction((type) => contract.mintPet(type), petType, `Minted a new ${petType}!`, event); }
async function feedPet(petId, event) { await performTransaction((id) => contract.feedPet(id), petId, "Your pet has been fed!", event); }
async function playWithPet(petId, event) { await performTransaction((id) => contract.playWithPet(id), petId, "You played with your pet!", event); }
async function sendPetToHospital(petId, event) { await performTransaction((id) => contract.sendPetToHospital(id), petId, "Your pet is now in the hospital.", event); }

function startMinigame(petId, petImageUrl) {
    currentGamePetId = petId;
    throwCount = 0;
    isBallInPlay = false;
    updateThrowCounter();
    gamePetEl.querySelector('img').src = petImageUrl;
    pet.x = gameArea.clientWidth / 2;
    pet.y = gameArea.clientHeight - pet.height;
    gamePetEl.style.left = pet.x + 'px';
    gamePetEl.style.top = pet.y + 'px';
    gameBallEl.style.display = 'none';
    throwBallBtn.disabled = false;
    throwBallBtn.innerHTML = 'Throw Ball'; 
    if (minigameModal) minigameModal.classList.add('active');
}

function closeMinigame() {
    if (minigameModal) minigameModal.classList.remove('active');
    if (gameAnimationId) cancelAnimationFrame(gameAnimationId);
}

function updateThrowCounter() {
    if(throwCounterEl) throwCounterEl.textContent = `Throws: ${throwCount} / ${REQUIRED_THROWS}`;
}

function throwBall() {
    if (isBallInPlay) return;
    isBallInPlay = true;
    throwBallBtn.disabled = true;
    ball.x = gameArea.clientWidth / 2;
    ball.y = gameArea.clientHeight / 2;
    ball.vx = (Math.random() - 0.5) * 20; 
    ball.vy = -15 - (Math.random() * 5); 
    gameBallEl.style.display = 'block';
    gameLoop();
}

function gameLoop() {
    ball.vy += gravity;
    ball.vx *= 0.995; 
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.x + ball.radius*2 > gameArea.clientWidth || ball.x < 0) {
        ball.vx *= bounceFactor;
        ball.x = Math.max(0, Math.min(ball.x, gameArea.clientWidth - ball.radius*2));
    }
    if (ball.y + ball.radius*2 > gameArea.clientHeight || ball.y < 0) {
        ball.vy *= bounceFactor;
        ball.y = Math.max(0, Math.min(ball.y, gameArea.clientHeight - ball.radius*2));
        if (Math.abs(ball.vy) < 1.5) ball.vy = 0;
    }
    if (Math.abs(ball.vy) === 0 && ball.y + ball.radius*2 >= gameArea.clientHeight - 1) {
        ball.vx *= friction;
        if (Math.abs(ball.vx) < 0.1) {
            ball.vx = 0;
        }
    }
    gameBallEl.style.left = ball.x + 'px';
    gameBallEl.style.top = ball.y + 'px';
    const dx = ball.x - pet.x;
    const dy = ball.y - pet.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const speed = 3.5;
    if (distance > speed) {
        pet.x += (dx / distance) * speed;
        pet.y += (dy / distance) * speed;
        gamePetEl.style.left = pet.x + 'px';
        gamePetEl.style.top = pet.y + 'px';
    }
    if (ball.vx === 0 && ball.vy === 0 && ball.y + ball.radius*2 >= gameArea.clientHeight -1) {
        ballHasStopped();
    } else {
        gameAnimationId = requestAnimationFrame(gameLoop);
    }
}

function ballHasStopped() {
    throwCount++;
    updateThrowCounter();
    isBallInPlay = false;
    if (throwCount >= REQUIRED_THROWS) {
        throwBallBtn.disabled = true;
        const mockEvent = { target: throwBallBtn };
        playWithPet(currentGamePetId, mockEvent);
    } else {
        throwBallBtn.disabled = false;
    }
}

window.addEventListener('DOMContentLoaded', init);