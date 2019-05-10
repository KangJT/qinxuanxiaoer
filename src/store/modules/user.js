import api from '../../api'

const state = {

  nickname: '',
  integral: '',
  addDay: '签到'

}

// 同步改变
const mutations = {
  updateState (state, payload) {
    for (let key in payload) {
      state[key] = payload[key]
    }
  }
}

// 异步请求
const actions = {
  getUserInfo ({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      let data = await api.api.user.user(payload)
      console.log(data, 'stateuser')
      commit('updateState', data)
      resolve(data)
    })
  }
}

export default {
  // 命名空间
  namespaced: true,
  state,
  actions,
  mutations

}
