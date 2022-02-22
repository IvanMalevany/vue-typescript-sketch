<template>
    <div
        class="modal"
        :class="{'active':active}"
        @click="close()"
    >
        <div
            class="modal__content"
            :class="$attrs.class"
            @click.stop
        >
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        inheritAttrs: false
    }
</script>
<script setup lang="ts">
    import {defineEmits, defineProps} from "vue";

    defineProps<{ active?: boolean }>()

    const emit = defineEmits<{
        (e: 'close'): void
    }>()

    const close = () => emit('close')
</script>