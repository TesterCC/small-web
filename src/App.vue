<script setup></script>
<template>
  <div class="hello">hello {{ num }}</div>
  <button @click="click_event">click</button>
</template>
<script setup>
import { ref } from "vue";

let num = ref(0);

function click_event() {
  num.value++;
}
</script>

<style scoped></style>
