<template>
    <div class="app__view">

        <Nav/>

        <Start/>

        <Subscribe/>
    </div>

    <WalletConnectModal/>
    <WalletConnectQRModal/>
</template>

<script setup lang="ts">
    import Nav from '../components/LandingPage/Nav.vue'
    import Start from '../components/LandingPage/Start.vue'
    import Subscribe from '../components/LandingPage/Subscribe.vue'

    import WalletConnectModal from '../components/LandingPage/WalletConnectModal.vue'
    import WalletConnectQRModal from '../components/LandingPage/WalletConnectQRModal.vue'
</script>