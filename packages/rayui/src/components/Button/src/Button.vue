<template>
  <button 
    class="r-button"

  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
export default {
  name: "RButton",
}
</script>