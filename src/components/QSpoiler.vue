<script setup lang="ts">
const isExpanded = ref(false);

interface Props {
    modelValue?: boolean;
    title?: string;
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
    title: "Раскрыть",
});

const emit = defineEmits(["update:modelValue"]);

watch(isExpanded, () => {
    emit("update:modelValue", isExpanded.value);
});

isExpanded.value = props.modelValue;
</script>

<template>
    <button w-full @click="isExpanded = !isExpanded">
        <div w-full flex justify-between items-center>
            <div text="14px lg:24px [#222222]" leading="120%" fw-500>{{ props.title }}</div>
            <div v-if="isExpanded" text="14px lg:24px [#6D7885]" mr-3px>-</div>
            <div v-else text="14px lg:24px [#6D7885]">+</div>
        </div>
    </button>

    <div w-full text="12px lg:16px [#6D7885]" v-show="isExpanded" pl="10px lg:30px" my-10px>
        <slot />
    </div>
</template>