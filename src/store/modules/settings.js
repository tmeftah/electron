const state = {

    logged_in: false,
    label: 'Login',
    text: "<p><em>Betreuer: </em>\t\t<strong>X. Name (-xxxx)</strong></p><p class=\"ql-align-center\"><br></p><p><em>Vertretung vom</em> <strong>xx.xx</strong>. -<strong> xx.xx</strong>. <em>durch</em></p><p class=\"ql-align-center\"><strong>Y. Name (-xxxx)</strong></p>"
}

const getters = {
    logged_in: state => state.logged_in,
    label: state => state.label,
    gettext: state => state.text
}

const actions = {
    CheckPassword({ commit }, password) {
        if (password === "somete") {
            commit('loGin')
        } else
            commit('loGout')
    },
    setText({ commit }, text) {
        commit('saveText', text)
    }
}


const mutations = {
    loGin: (state) => (
        state.logged_in = true,
        state.label = 'Logout'

    ),
    loGout: (state) => (state.logged_in = false, state.label = 'Login'),
    saveText: (state, text) => (state.text = text)
}

export default {
    state,
    getters,
    actions,
    mutations
};

