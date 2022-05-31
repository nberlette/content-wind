<script lang="ts">
  import { computed, defineComponent, h, resolveComponent, useSlots, useUnwrap } from '#imports'

  /**
   * Object mapping the default list types and their iconify icon identifiers.
   * Each property name is used as a list 'type',  such as `danger` or `success`. These types help to 
   * specify the tone of the inner content, allowing us to apply appropriate styles, icons, and other
   * affordances to maximize user experience.  
   * Each property's `value` is the desired `iconify` icon id we will render (`string`).  
   * @type {Record<string, string>}
   */
  const iconTypeMap = {
    primary: 'heroicons-outline:check',
    info: 'heroicons-outline:information-circle',
    success: 'heroicons-outline:check-circle',
    warning: 'heroicons-outline:exclamation',
    danger: 'heroicons-outline:exclamation-circle',
  }

  export default defineComponent({
    props: {
      /**
       * Used to override the default `type` icon. See the link below for all available icons.
       * @see {@link https://github.com/nuxt/content/tree/dev/packages/theme-docs/src/components/global/icons}
       */
      icon: {
        type: String as typeof iconTypeMap[keyof typeof iconTypeMap],
        default: null,
        // validator: (value: string) => Object.values(iconTypeMap)
        //   .find(icon => icon.toLowerCase() === value.toLowerCase()),
      },

      /**
       * Type of list to render (controls the color and icon)
       * @default 'primary'
       * @example ::list{type="info"}
       * - item 1
       * - item 2
       * ::
       */
      type: {
        type: String as keyof typeof iconTypeMap,
        default: Object.keys(iconTypeMap)[0],
        validator: (value: string) => (~Object.keys(iconTypeMap).indexOf(value)),
      },

    },
    setup(props) {
      const slots = useSlots()
      const { flatUnwrap, unwrap } = useUnwrap()
      const iconName = computed(() => props.icon || iconTypeMap[props.type])

      /**
       * Usage of `render()` function is mandatory to access `default` slot (`$slots.default`).
       * -> Otherwise Vue warns that slot "default" was invoked outside of the render function
       */
      return () => {
        const items = flatUnwrap(
          (slots.default && slots.default()) ?? [], 
          ['ul', 'ol', 'dl']).map(li => unwrap(li, ['li'])
        )

        /* <ul> */
        return h('ul',
          items.map((item) =>
            /* <li class="mb-3 flex items-center"> */
            h('li', { class: 'mb-3 flex items-center' }, [
              /* <span :class="'list-'+type" class="mt-px mr-3 flex-shrink-0"> */
              h('span', { class: `list-${props.type} mt-px mr-3 flex-shrink-0` },
                /* <icon class="h-6 w-6" :name="iconName">  */
                h(resolveComponent('icon'), { name: iconName.value, class: 'h-6 w-6' })
                /* </icon> */
              ), 
              /* </span> */
              /* <span> */
              h('span', 
                /* <Markdown :use="() => item"> */
                h(resolveComponent('Markdown'), { use: () => item }) 
                /* </Markdown> */
              ),
              /* </span> */
            ]), 
            /* </li> */
          ),
        ) /* </ul> */
      } /* return () => { // ...  */
    },
  })
</script>

<style global lang="postcss">
  /* Primary */
  .list-primary,
  .list.primary {
    @apply text-primary;
  }
  /* Info */
  .list-info,
  .list.info {
    @apply text-blue-500 dark:text-blue-400;
  }
  /* Success */
  .list-success,
  .list.success {
    @apply text-green-500 dark:text-green-400;
  }
  /* Warning */
  .list-warning,
  .list.warning {
    @apply text-yellow-500 dark:text-yellow-400;
  }
  /* Danger */
  .list-danger,
  .list.danger {
    @apply text-red-500 dark:text-red-400;
  }
</style>
