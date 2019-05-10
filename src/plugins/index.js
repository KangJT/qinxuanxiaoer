
import ScrollView from '@/components/scroll-view'
import {List, ListItem} from '@/components/list'

const baseAll = {
  ScrollView,
  List,
  ListItem
}
export default {
  install (Vue) {
    for (let key in baseAll) {
      Vue.component(key, baseAll[key])
    }
  }
}
