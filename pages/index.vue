<template>
  <section class="container">
    <card-menu :menuItems="items" />
  </section>
</template>

<script>
import CardMenu from '@/components/home/CardMenu'

export default {
  name: 'HomePage',
  components: { CardMenu },
  data () {
    return {
      items: [
        { title: 'Tarefas', icon: 'clipboard-text-outline', link: '/board' },
        { title: 'Animais', icon: 'paw', link: '/animals' },
        { title: 'Biometria', icon: 'pulse', link: '/biometry' },
        { title: 'Gestão de Pessoas', icon: 'account-supervisor', link: '/people' },
        { title: 'Atividades Recentes', icon: 'view-list', link: '/activity' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
