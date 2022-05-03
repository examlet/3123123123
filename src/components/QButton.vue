<script setup lang="ts">
const props = defineProps({ 
    bordered: { type: Boolean, required: false },
    secondary: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
})

const emit = defineEmits(["click"]);
</script>

<template>
    <button
        class="btn"
        :class="{
            'btn-basic': !props.bordered && !props.secondary,
            'btn-bordered': props.bordered && !props.secondary,
            'btn-secondary': !props.bordered && props.secondary,
        }"
        :disabled="disabled" @click="emit('click')"
    >
        <slot />
    </button>
</template>

<style scoped>
</style>