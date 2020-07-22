import Vuex from 'vuex'
import Vue from 'vue'
import VuexPersist from 'vuex-persist'

import settings from './modules/settings'

const vuexPersist = new VuexPersist({
    key: 'my-app',
    storage: window.localStorage
})
// load Vuex

Vue.use(Vuex)

// Create Store
export default new Vuex.Store({
    modules: {
        settings
    },
    plugins: [vuexPersist.plugin]
})


