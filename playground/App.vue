<script setup lang="ts">
import { testSum, ExampleComp } from '../lib'
import { ref } from 'vue'

const sum = ref<number>(0)
sum.value = testSum(1, 2)
</script>

<template>
  <div>
    <example-comp :prop-name="sum" />
  </div>
</template>

<style scoped lang="scss"></style>
