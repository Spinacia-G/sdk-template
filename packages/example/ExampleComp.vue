<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'ExampleComp'
})

const props = withDefaults(defineProps<{ propName: number }>(), {
  propName: 0
})

const showVal = ref<string>('Res: ')
</script>

<template>
  <button>{{ showVal }}{{ props.propName }}</button>
</template>

<style scoped lang="scss"></style>
