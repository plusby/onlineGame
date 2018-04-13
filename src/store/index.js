import vue from "vue"
import Vuex from "vuex"
import state from "./state"
import getters from "./getter"
import mutations from "./mutations"
import actions from "./action"

vue.use(Vuex)

export default new Vuex.Store({
	mutations,
	  actions,
	  getters,
	  state,
})
