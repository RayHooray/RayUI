declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, unknown>
  export default component
}
// 组件的 options 选项
interface ComponentOptions {
  size?: string 
  zIndex?: number
}
