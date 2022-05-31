<template>
  <div class="flex justify-between max-w-4xl px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <div class="text-gray-700 dark:text-gray-200">
      <ContentNavigation v-slot="{ navigation }">
        <NuxtLink
          v-for="link of navigation"
          :key="link._path"
          :to="link._path"
          active-class="font-bold"
          class="mr-4"
        >
          {{ link.navTitle || link.title }}
        </NuxtLink>
      </ContentNavigation>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="space-x-5 text-gray-500 transition-colors duration-300 ease-in">
      <a href="https://twitter.com/nberlette" title="Twitter" class="hover:text-gray-700 dark:hover:text-gray-300 ease-colors"><Icon name="fa-brands:twitter" /></a>
      <a href="https://github.com/nberlette/content-wind" title="GitHub" class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 ease-in"><Icon name="fa-brands:github" /></a>
      <ColorModeSwitch class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 ease-in" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
  
</style>