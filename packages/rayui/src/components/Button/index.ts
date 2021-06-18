import RButton from './src/Button.vue'
import type {App} from 'vue'

RButton.install = function(app: App) {
  app.component(RButton.name, RButton)
}