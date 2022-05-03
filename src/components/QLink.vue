<script setup lang="ts">
const props = defineProps({
    primary: { type: Boolean, required: false },
    secondary: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
})

const emit = defineEmits(["click"]);
</script>

<template>
    <div 
        class="lnk"
        :class="{
            'lnk-basic': !props.primary && !props.secondary,
            'lnk-primary': props.primary && !props.secondary,
            'lnk-secondary': !props.primary && props.secondary,
        }"
        :disabled="disabled" @click="emit('click')"
    >
        <slot />
    </div>
</template>

<style scoped>
</style>