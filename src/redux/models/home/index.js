import { action, thunk } from 'easy-peasy'
import Axios from 'axios'

const Home = {
  initialState: {
    loading: true,
    error: false,
    errorMessage: null,
    data: null,
  },

  fetchAction: action((state, payload) => {
    state.initialState.data = payload
    state.initialState.loading = false
  }),

  error: action((state, payload) => {
    state.initialState.loading = true
    state.initialState.error = true
    state.initialState.errorMessage = payload
  }),

  getHome: thunk(async (actions, payload) => {
    try {
      const config = {
        method: 'get',
        url: 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp',
      }
      let response = await Axios(config)
      actions.fetchAction(response.data)
    } catch (error) {
      actions.error(error || error.errorMessage)
    }
  }),
}

export default Home
