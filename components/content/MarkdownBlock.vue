<script setup lang="ts">
  defineProps({
    lang: {
      type: String as typeof import('shiki').Lang,
      required: false,
    }
  })
</script>

<template>
  <div class="relative">
    <pre :class="lang ? `language-${lang}` : ''"><Markdown :use="$slots.default" unwrap="p" /></pre>
  </div>
</template>

<style global lang="postcss">
  pre, code {
    @apply font-mono;
  }
  :not(.code-block, .code-group) > pre {
    @apply bg-gray-900 text-gray-50 px-6 py-4 mx-[-20px] my-4 sm:(mx-0 px-4);
    @apply leading-6 tracking-tight [tab-width:2];
    @apply rounded-md;
  }
  :is(.code-block, .code-group) {
    @apply mt-2 mb-4 !pb-0;

    & :is(.code-group-content) pre {
      @apply !my-0 !mb-0;
    }
  }
  
  code:where(:not(pre > code)) {
    @apply !text-sm bg-gray-100 text-warm-gray-900 border border-b-2 border-gray-200 dark:!text-white dark:!bg-neutral-400/30 dark:!border-neutral-600/50;
    @apply rounded px-1.5 pt-[3px] pb-0.5 mx-px;
  }
  .full-bleed img, img.full-bleed {
    @apply block w-full rounded-md overflow-clip mx-0 my-4 sm:(mx-0 my-4);
    @apply ring-2 ring-offset-1 ring-offset-white dark:(ring-offset-warm-gray-900 ring-white/15) ring-stone-400/10;
  }
</style>