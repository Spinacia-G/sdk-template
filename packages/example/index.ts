import type { App, Plugin } from 'vue'
import { testSum } from './math'
import _ExampleComp from './ExampleComp.vue'

type SFCWithInstall<T> = T & Plugin
const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name
    app.component(name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}

export { testSum }

export const ExampleComp = withInstall(_ExampleComp)
export default ExampleComp
