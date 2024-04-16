import ExampleComp from './example'
import { App } from 'vue'

export * from './example'

export default {
  install: (app: App) => {
    app.use(ExampleComp)
  }
}
