import {defineStore} from "pinia";

export const useStoreLanding = defineStore('landing', {
    state: () => {
        return {
            isWalletConnectOpen: false,
            isWalletConnectQROpen: false,
            assets: '/img',
            networks: [
                {id: 1, name: 'Ethereum', key: 'ether', color: '#627EEA', available: true},
                {id: 2, name: 'Polygon', key: 'polygon', color: '#8247E5', available: false},
                {id: 3, name: 'Harmony', key: 'harmony', color: '#00AEE9', available: true},
                {id: 4, name: 'Near', key: 'near', color: '#FFFFFF', available: true},
                {id: 5, name: 'Arbitrum', key: 'arbitrum', color: '#2D374B', available: true},
                {id: 6, name: 'Optimism', key: 'optimizm', color: '#FF0420', available: true},
                {id: 7, name: 'Binance', key: 'binance', color: '#CC9B00', available: true},
                {id: 8, name: 'FreeTon', key: 'ton', color: '#0088CC', available: true},
            ],
            wallets: [
                {id: 1, name: 'MetaMask', key: 'metamask', color: '#FFFFFF', available: true},
                {id: 2, name: '1inch', key: '1inch', color: '#0E131D', available: true},
                {id: 3, name: 'WalletConnect', key: 'wallet_connect', color: '#D9ECFF', available: true},
                {id: 4, name: 'Ledger', key: 'ledger', color: '#DFF1FE', available: true},
                {id: 5, name: 'Coinbase', key: 'coinbase', color: '#C4D4FF', available: true},
            ]
        }
    },
    getters: {

    },
    actions: {
        changeWalletConnectState(value: boolean){
            this.isWalletConnectOpen = value
        },
        changeWalletConnectQRState(value: boolean){
            this.isWalletConnectQROpen = value
        }
    }
})