<template>
    <div class="landing-start">
        <div class="landing-start__cover">
            <div class="landing-start__text">
                <h1>Dynamic <span>Ownable NFT</span> Protocol</h1>
                <h2>Make more <span>from your</span> NFTs!</h2>
                <h3>Use power of neural network algorithms to create new unique combinations of digital art.</h3>
                <div class="landing-start__connect">
                    <span class="btn" @click="openWalletConnect">Connect Wallet</span>
                    <svg viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M101 9C101.552 9 102 8.55228 102 8C102 7.44772 101.552 7 101 7V9ZM0.292892 7.29289C-0.0976334 7.68342 -0.0976334 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM101 7L1 7V9L101 9V7Z"/></svg>
                </div>
            </div>
            <div class="landing-start__banner">
                <div class="landing-start__img">
                    <span>Click to Bundle New NFT</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {useWalletConnection} from "../../hooks/useWalletConnection";

    const {
        open: openWalletConnect
    } = useWalletConnection()
</script>