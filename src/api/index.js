import {get, post} from '@/utils/request'
const api = {
  user: {
    user: () => get('/api/user/login-test')
  },
  article: {
    list: (data) => get('/api/article/list', data),
    detail: (id) => get('/api/article/details', id)
  },
  medicine: {
    list: (data) => get('/api/medicine/list', data),
    detail: (id) => get('/api/medicine/details', id)
  },
  changecard: {
    changeEveryData: () => post('api/attendance/submit'),
    changDataInfo: () => get('api/attendance/info')
  }
}
export default {
  api,
  install (Vue) {
    Vue.prototype.$api = api
  }
}
