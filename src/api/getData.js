import axios from 'axios'

export default {
  getCityGuess() {
    return axios.get('/api/getGuess')
  }
}
