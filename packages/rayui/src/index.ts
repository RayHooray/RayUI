import type { App } from 'vue'
import { setupGlobalOptions } from './utils/globalConfig'

const component: any[] = []

const install = (app: App, options: ComponentOptions): void => {
  app.use(setupGlobalOptions(options))
  component.forEach((component: any) => {
    app.use(component)
  })
  applyOptions(app)
}

function applyOptions(app: App) {
  // app.config.globalProperties.$loading = ElLoading.service
  // app.config.globalProperties.$msgbox = Msgbox
  // app.config.globalProperties.$alert = Msgbox.alert
  // app.config.globalProperties.$confirm = Msgbox.confirm
  // app.config.globalProperties.$prompt = Msgbox.prompt
  // app.config.globalProperties.$notify = Notification
  // app.config.globalProperties.$message = Message
}

// 按需提取
export {}

// 中间件对象
const rayui = {
  install
}

export default  rayui