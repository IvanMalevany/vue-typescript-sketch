import {useStoreLanding} from '../store/Landing'
import {storeToRefs} from "pinia";

export function useWalletConnectionQR(){
    const store = useStoreLanding();
    const {
        isWalletConnectQROpen,
        assets
    } = storeToRefs(store);

    const close = () => store.changeWalletConnectQRState(false);
    const open = () => store.changeWalletConnectQRState(true);

    return {
        isWalletConnectQROpen,
        assets,
        close,
        open
    }
}
