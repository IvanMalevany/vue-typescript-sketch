<template>
    <div class="landing-nav">
        <div class="landing-nav__logo">
            <div class="logo">do<span>NFT</span></div>
        </div>
        <div class="landing-nav__search">
            <div class="search">
                <input type="text" placeholder="Search">
                <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 21.5L15.5 15.5M17.5 10.5C17.5 14.366 14.366 17.5 10.5 17.5C6.63401 17.5 3.5 14.366 3.5 10.5C3.5 6.63401 6.63401 3.5 10.5 3.5C14.366 3.5 17.5 6.63401 17.5 10.5Z" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
        </div>
        <div class="landing-nav__pages">
            <div class="landing-pages">
                <a href="#">About us</a>
                <a href="#">How it works</a>
                <a href="#">Benefits</a>
                <a href="#">Gallery</a>
            </div>
        </div>
        <div class="landing-nav__buttons">
            <Settings/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Settings from '../UI/settings.vue'
</script>