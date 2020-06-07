<template>
  <section class="container">
    <card-menu v-if="items" :menuItems="items" />
  </section>
</template>

<script>
import CardMenu from '@/components/home/CardMenu'
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: { CardMenu },
  data () {
    return {
      items: []
    }
  },
  mounted() {
    const role = this.$store.state.user.user.role
    if (role === 1 || role === 2) {
      this.items = [
        { title: 'Tarefas', icon: 'clipboard-text-outline', link: '/board' },
        { title: 'Animais', icon: 'paw', link: '/animals' },
        { title: 'Biometria', icon: 'pulse', link: '/biometry' },
        { title: 'Gestão de Pessoas', icon: 'account-supervisor', link: '/people' },
        { title: 'Atividades Recentes', icon: 'view-list', link: '/activity' }
      ]
    } else if (role === 3) {
      this.items = [
        { title: 'Tarefas', icon: 'clipboard-text-outline', link: '/board' },
        { title: 'Animais', icon: 'paw', link: '/animals' },
        { title: 'Biometria', icon: 'pulse', link: '/biometry' },
        { title: 'Atividades Recentes', icon: 'view-list', link: '/activity' }
      ]
    } else {
      this.items = [
        { title: 'Tarefas', icon: 'clipboard-text-outline', link: '/board' },
        { title: 'Animais', icon: 'paw', link: '/animals' },
        { title: 'Atividades Recentes', icon: 'view-list', link: '/activity' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
