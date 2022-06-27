<template>
  <ol class="relative mb-16 space-y-2">
    <li class="relative grid-cols-5 gap-16 xl:grid">
      <div class="col-span-2 mb-6 xl:mb-0">
        <h4 class="mb-2 font-semibold leading-6 text-slate-900 dark:text-slate-200" v-if="$slots.title">
          <Markdown :use="$slots.title" unwrap="p" />
        </h4>
        <div v-if="$slots.description">
          <Markdown :use="$slots.description" unwrap="p" />
        </div>
      </div>
      <div class="relative z-10 col-span-3">
        <Markdown :use="($slots.content ?? $slots.default)" unwrap="p" v-if="($slots.content ?? $slots.default ?? null)" />
        <div v-else>
        <Alert type="danger">
          <div slot="default">
            <p>You need to specify either <code>$slots.content</code> or <code>$slots.default</code></p>
          </div>
        </Alert>
        </div>
      </div>
    </li>
  </ol>
</template>

<style scoped lang="postcss">
:deep(.prose-code) {
  @apply my-0 mt-0 !important;
}
</style>
