<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { ref } from '#imports'

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
})

const { copy: copyToClipboard } = useClipboard()

const state = ref('init')

const copy = (e: MouseEvent) => {
  copyToClipboard(props.content)
    .then(() => {
      state.value = 'copied'

      setTimeout(() => {
        state.value = 'init'
      }, 1000)
    })
    .catch(() => {
      console.warn("Couldn't copy to clipboard!")
    })
}
</script>

<template>
  <button class="copy rounded-md bg-gray-900 px-2 py-2 font-mono text-xs font-semibold leading-none text-gray-400 focus:outline-none" @click="copy">
    <Icon v-if="state === 'copied'" name="fa-check" class="h-4 w-4" />
    <Icon v-else name="fa-copy" class="h-4 w-4" />
  </button>
</template>
