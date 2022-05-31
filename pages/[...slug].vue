<template>
  <div class="max-w-4xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 sm:rounded">
    <!-- Fetch and display the Markdown document from current path -->
    <ContentDoc class="prose prose-gray dark:prose-invert max-w-none">
      <!-- Slot if document is not found -->
      <template #not-found>
        <h1 class="text-2xl">
          Page not found
        </h1>
      </template>
    </ContentDoc>
  </div>
</template>

<style global lang="postcss">
  .prose + :is(h1, h2, h3), .prose > :is(h1, h2, h3):not(:first-child) {
    @apply mt-6;
  }
  .prose h1 {
    @apply text-3xl font-extrabold tracking-tight;
  }
  .prose h2 {
    @apply text-2xl font-semibold tracking-tight;
  }
  .prose h3 {
    @apply text-xl font-bold tracking-tight;
  }
  .prose h2 a,
  .prose h3 a {
    @apply no-underline ease-all border-b border-dashed border-neutral-500/50 dark:border-neutral-300/50;
    &:hover {
      @apply border-neutral-600 dark:border-neutral-300;
    }
  }
  :is(.prose, p) > svg {
    @apply inline-block align-bottom;
  }
</style>
