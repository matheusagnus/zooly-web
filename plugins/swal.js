import Vue from 'vue'
import swal from 'sweetalert2'

Vue.use(swal)

export default (context, inject) => {
  context.$swal = Vue.$swal
  inject("swal", swal);
};
