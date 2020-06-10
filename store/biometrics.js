import https from '@/network/https'
import Swal from 'sweetalert2'

export const state = () => ({
  url: https.baseUrl,
  biometricsData: []
})

export const mutations = {
  setBiometrics: (state, payload) => {
    state.biometricsData = payload
  }
}

export const actions = {
  async getAllBiometry({ state, commit }) {
    try {
      await this.$axios.get(`${state.url}/biometry`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        commit('setBiometrics', res.data)
      })
    } catch (err) {
      throw err
    }
  },
  async createBiometry({ state, commit, dispatch }, payload) {
    try {
      await this.$axios.post(`${state.url}/biometry`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        dispatch('getAllBiometry')
        Swal.fire({
          title: 'Biometria Criada!',
          icon: 'success'
        })
      })
    } catch (err) {
      Swal.fire({
        title: 'Oopss..',
        text: 'Algo deu errado! Tente novamente mais tarde.',
        icon: 'error'
      })
      throw err
    }
  },
  async deleteBiometric ({ state, commit, dispatch }, payload) {
    try {
      await this.$axios.delete(`${state.url}/biometry/${payload}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        dispatch('getAllBiometry')
        Swal.fire({
          title: 'Biometria Deletada!',
          icon: 'success'
        })
      })
    } catch (err) {
      Swal.fire({
        title: 'Oopss..',
        text: 'Algo deu errado! Tente novamente mais tarde.',
        icon: 'error'
      })
      throw err
    }
  },
  async getBiometricReport ({ state, commit, dispatch }, payload) {
    try {
      await this.$axios.get(`${state.url}/biometry/report/${payload}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        console.log(res)
        var file = new Blob([res.data], {type: 'application/pdf'});
        // var fileURL = URL.createObjectURL(file);
        // window.open(fileURL);

        const url = window.URL.createObjectURL(file);
        const element = window.document.createElement('a');
        document.body.appendChild(element);

        element.href = url;
        element.download = 'Relatório Zooly';
        element.click();
        document.body.removeChild(element);
      })
    } catch (err) {
      Swal.fire({
        title: 'Oopss..',
        text: 'Algo deu errado! Tente novamente mais tarde.',
        icon: 'error'
      })
      throw err
    }
  },
  
}