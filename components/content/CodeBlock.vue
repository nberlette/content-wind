<script setup lang="ts">
  defineProps({
    /**
     * Label to display for the tab.
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * Select which tab should be active by passing `active="true"`
     */
    active: {
      type: Boolean,
      default: false,
    },
    /**
     * Preview blocks are bordered with smaller padding.
     */
    preview: {
      type: Boolean,
      default: false,
    },
  })
</script>

<template>
  <div
    class="code-block"
    :class="{
      active,
      'rounded-lg border-2 border-t-0 border-gray-100 p-4 dark:border-gray-800': preview,
    }"
  >
    <slot />
    <CopyButton :content="$slots.default"></CopyButton>
  </div>
</template>

<style scoped>
  .code-block {
    display: none;
  }

  .code-block.active {
    display: block;
  }
</style>
