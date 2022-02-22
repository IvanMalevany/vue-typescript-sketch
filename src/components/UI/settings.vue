<template>
    <div class="profile-settings">
        <div><span class="btn profile-settings__sign" @click="openWalletConnect">Sign In</span></div>
        <div><span class="profile-settings__btn"><svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 15.6441C20.4248 16.0762 19.2507 16.3139 18.021 16.3139C12.8655 16.3139 8.68607 12.1345 8.68607 6.97901C8.68607 5.74932 8.92384 4.57516 9.35591 3.5C5.92343 4.87942 3.5 8.23924 3.5 12.1651C3.5 17.3206 7.67939 21.5 12.8349 21.5C16.7608 21.5 20.1206 19.0766 21.5 15.6441Z" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>
        <div><span class="profile-settings__btn"><svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 12.5C21.5 17.4706 17.4706 21.5 12.5 21.5M21.5 12.5C21.5 7.52944 17.4706 3.5 12.5 3.5M21.5 12.5H3.5M12.5 21.5C7.52944 21.5 3.5 17.4706 3.5 12.5M12.5 21.5C14.1569 21.5 15.5 17.4706 15.5 12.5C15.5 7.52944 14.1569 3.5 12.5 3.5M12.5 21.5C10.8431 21.5 9.5 17.4706 9.5 12.5C9.5 7.52944 10.8431 3.5 12.5 3.5M3.5 12.5C3.5 7.52944 7.52944 3.5 12.5 3.5" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>
    </div>
</template>

<script setup lang="ts">
    import {useStoreLanding} from '../../store/Landing'

    const store = useStoreLanding();
    const openWalletConnect = () => store.changeWalletConnectState(true);
</script>