import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/HP/OneDrive/Documents/Top_universe/Event-app-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}