<template>
  <div>
    <modal-template v-show="toggle" class="override-modal">
      <template #header>
        <b-icon icon="close" @click.native="toggleInfoModal()" />
        <h3>Nova Tarefa</h3>
      </template>
      <template #body>
        <div class="has-text-centered">
          <p>Você tem certeza de que não poderá comparecer?</p>
        </div>
      </template>
      <template #footer class="columns is-centered">
        
      </template>
    </modal-template>
  </div>
</template>

<script>
import ModalTemplate from '../shared/ModalTemplate'
export default {
  name: 'AddNewTask',
  components: { ModalTemplate },
  props: {
    toggle: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleInfoModal () {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheet/base';
</style>
