<template>
    <Modal class="wallet-connect" :active="isWalletConnectQROpen" @close="close">
        <div class="wallet-connect__title">
            Connect Wallet
            <span class="modal__close" @click="close">
                <svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.66667 17.1668L2 10.5002M2 10.5002L8.66667 3.8335M2 10.5002L18 10.5002" stroke="#63E6BE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
        </div>
        <div class="wallet-connect__code">
            <img :src="assets+'/qrcode.png'" alt="">
        </div>
        <div class="wallet-connect__info">
            Scan <span>QR code</span> with a <span>WalletConnect</span>-compatible wallet
        </div>
        <div class="wallet-connect__copy">
            <span>
                Copy to clipboard
                <span>
                    <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.50195 11.5716L6.78767 15.8574L17.502 5.14307" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </span>
        </div>
    </Modal>
</template>

<script setup lang="ts">
    import Modal from '../UI/Modal.vue'
    import {useWalletConnectionQR} from "../../hooks/useWalletConnectionQR";

    const {
        isWalletConnectQROpen,
        assets,
        close
    } = useWalletConnectionQR()
</script>