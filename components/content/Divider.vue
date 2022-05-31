<template>
  <div class="w-full h-1 bg-transparent px-0 block mx-auto my-6 rounded-lg border-b border-gray-900/20 dark:border-blue-gray-400/20" :style="(`border-bottom-width:${size ?? 2}px;border-bottom-style:${type ?? 'solid'};`)">
    <slot />
  </div>
</template>

<script setup lang="ts">
  type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'single' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
  
  defineProps({
    size: {
      type: String,
      required: false,
      default: '2',
    },
    type: {
      type: String as BorderStyle,
      required: false,
      default: 'solid',
    },
    color: {
      type: String,
      required: false,
      default: 'currentColor',
    },
  })
</script>