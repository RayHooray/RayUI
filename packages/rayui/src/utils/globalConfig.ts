import { getCurrentInstance } from 'vue'
import type { App} from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useGlobalOptions(): any {
  const instance = getCurrentInstance()
  if (!instance) {
    console.warn('useGlobalOptions must be call in setup function')
    return
  }

  return instance.appContext.config.globalProperties.$ELEMENT || {}
}

export function setupGlobalOptions(opts: ComponentOptions) {
  return (app: App): void => {
    app.config.globalProperties.$ELEMENT = {
      size: opts.size || '',
      zIndex: opts.zIndex || 2000
    }
  }
}