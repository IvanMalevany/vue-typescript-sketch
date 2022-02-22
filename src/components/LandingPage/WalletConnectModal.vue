<template>
    <Modal class="wallet-connect" :active="isWalletConnectOpen" @close="close">
        <div class="wallet-connect__title">
            Connect Wallet
            <span class="modal__close" @click="close">
                <svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 18L17.5 3M2.5 3L17.5 18" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
        </div>
        <div class="wallet-connect__step">
            <div class="wallet-connect__step-header">
                <div>Step 1</div>
                <div>Choose Network</div>
            </div>
            <div class="wallet-connect__step-body">
                <div
                    class="wallet-connect__option"
                    v-for="option in networkOptions"
                    :class="{'selected': network === option.id, 'na': !option.available}"
                    @click="option.available? network = option.id : null"
                >
                    <div :style="{'--option-background':option.color}">
                        <img
                            alt=""
                            :src="networkAssets+option.key+'.svg'"
                        />
                    </div>
                    <div>{{ option.name }}</div>
                    <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.75" cy="11.75" r="10.25" stroke-width="2"/>
                        <path d="M7.375 12.375L9.875 14.875L16.125 8.625" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="wallet-connect__step">
            <div class="wallet-connect__step-header">
                <div>Step 2</div>
                <div>Choose Wallet</div>
            </div>
            <div class="wallet-connect__step-body">
                <div
                        class="wallet-connect__option"
                        v-for="option in walletOptions"
                        :class="{'selected': wallet === option.id, 'na': !option.available}"
                        @click="option.available? wallet = option.id : null"
                >
                    <div :style="{'--option-background':option.color}">
                        <img
                                alt=""
                                :src="walletAssets+option.key+'.svg'"
                        />
                    </div>
                    <div>{{ option.name }}</div>
                    <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.75" cy="11.75" r="10.25" stroke-width="2"/>
                        <path d="M7.375 12.375L9.875 14.875L16.125 8.625" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="wallet-connect__footer" :class="{'active':submitAvailable}">
            <div>
                By clicking on the "Connect" button you accept the <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>
            </div>
            <div>
                <span
                    class="btn"
                    :class="{'btn_na':!submitAvailable}"
                    @click="submitAvailable? submitHandler() : null"
                >Connect</span>
            </div>
        </div>
    </Modal>
</template>

<script setup lang="ts">
    import {ref, computed} from "vue";
    import Modal from '../UI/Modal.vue'
    import {useWalletConnection} from "../../hooks/useWalletConnection";
    import {useWalletConnectionQR} from "../../hooks/useWalletConnectionQR";

    const network = ref(null)
    const wallet = ref(null)

    const submitAvailable = computed(() => network.value && wallet.value)

    const {
        isWalletConnectOpen,
        networkOptions,
        walletOptions,
        close,
        networkAssets,
        walletAssets
    } = useWalletConnection()

    const {open: openQRCodeModal} = useWalletConnectionQR()

    const submitHandler = () => {
        close()
        openQRCodeModal()
    }

</script>