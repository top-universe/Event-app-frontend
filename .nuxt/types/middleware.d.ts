import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/HP/OneDrive/Desktop/Event-app-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}