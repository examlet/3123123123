<script setup lang="ts">
const props = defineProps({
    placeholder: { type: String, required: false },
    type: { type: String, required: false },
})
</script>

<template>
    <input
        :placeholder="props.placeholder"
        :type="props.type || 'text'"
        autocomplete="false"
        border="1 [#26bcf1]"
        class="bg-white text-left rounded-sm outline-none active:outline-none px-4 py-2"
    />
</template>
