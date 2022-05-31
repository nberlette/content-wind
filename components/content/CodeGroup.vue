<script lang="ts">
import TabsHeader from './TabsHeader.vue'
import { defineComponent, h } from '#imports'

const isTag = (slot: any, tag: string) => {
  return slot.type && slot.type.tag && slot.type.tag === tag
}

export default defineComponent({
  data() {
    return {
      activeTabIndex: 0,
      /**
       * A simple number that increases on every changes
       */
      counter: 0,
    }
  },
  render() {
    const slots = this.$slots.default()
    const tabs = slots
      .filter(slot => isTag(slot, 'code-block') || isTag(slot, 'code'))
      .map((slot, index) => {
        return {
          label: slot?.props?.filename || slot?.props?.label || `${index}`,
          active: slot?.props?.active || false,
          component: slot,
        }
      })

    return h(
      'div',
      {
        class: {
          'code-group': true,
          'first-tab': this.activeTabIndex === 0,
        },
      },
      [
        h(TabsHeader, {
          ref: 'tabs-header',
          activeTabIndex: this.activeTabIndex,
          tabs,
          'onUpdate:activeTabIndex': ($event) => (this.activeTabIndex = $event),
        }),
        h(
          'div',
          {
            class: 'code-group-content',
            text: this.activeTabIndex,
          },
          // Map slots to content children
          slots.map((slot, index) =>
            h(
              'div',
              {
                // Current slot is displayed, others are hidden
                style: {
                  display: index === this.activeTabIndex ? 'block' : 'none',
                },
                class: {
                  '': !isTag(slot, 'code'),
                },
              },
              // Display direct children if not a ```code``` block
              [
                isTag(slot, 'code')
                  ? slot
                  : h(
                    'div',
                    {
                      class: {
                        'preview-canvas': true,
                      },
                    },
                    [slot.children.default()],
                  ),
              ],
            ),
          ),
        ),
      ],
    )
  },
})
</script>

<style lang="postcss">
li {
  .code-group {
    @apply my-4;
  }
}

.dark {
  .code-group-content {
    .preview-canvas {
      @apply z-0 my-0 overflow-x-auto rounded-bl-lg rounded-br-lg rounded-tl-none rounded-tr-none bg-gray-900 p-4 leading-normal;
    }
  }
}

.code-group {
  @apply surface-border overflow-hidden transition-[border-radius] duration-300 ease-in;
  @apply rounded-md md:!rounded-lg lg:!rounded-xl;
  @apply ring-1 ring-offset-1 ring-offset-gray-50 ring-black/20;
  @apply dark:!(ring-offset-cool-gray-900 ring-white/15);

  :deep(.prose-code) {
    @apply mt-0 mb-0 rounded-none !important;
  }

  :deep(.prose-code-header) {
    @apply hidden;
  }

  :deep(pre) {
    @apply mt-0 rounded-none !important;
  }

  :deep(.filename) {
    @apply hidden;
  }
}

.code-group-content {
  .preview-canvas {
    @apply z-0 my-0 overflow-x-auto rounded-bl-lg rounded-br-lg p-4 leading-normal;
    @apply bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-200 ;

    & > * {
      @apply my-0;
    }
  }
  pre, code {
    @apply !m-0 !p-0 !px-4 text-sm leading-4 sm:!(text-base leading-5) !rounded-tl-none !rounded-tr-none;
  }
}
</style>
