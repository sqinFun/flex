import axios from "axios";

export function setProductList({ commit }) {

  axios
    .get('http://jsonplaceholder.typicode.com/photos', {
      params: {
        _limit: 9
      }
    })
    .then((res) => commit('setProductList', res.data))
}