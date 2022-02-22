import {useStoreLanding} from '../store/Landing'
import {storeToRefs} from "pinia";

export function useWalletConnection(){
    const store = useStoreLanding();
    const {
        isWalletConnectOpen,
        networks: networkOptions,
        wallets: walletOptions,
        assets
    } = storeToRefs(store);

    const close = () => store.changeWalletConnectState(false);
    const open = () => store.changeWalletConnectState(true);

    const networkAssets = `${assets.value}/connect/network/`
    const walletAssets = `${assets.value}/connect/wallet/`

    return {
        isWalletConnectOpen,
        networkOptions,
        walletOptions,
        networkAssets,
        walletAssets,
        close,
        open
    }
}
