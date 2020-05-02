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
        { title: 'Rotinas', icon: 'clipboard-text-outline', link: '/people-manager' },
        { title: 'Animais', icon: 'clipboard-text-outline', link: '/people-manager' },
        { title: 'Biometria', icon: 'clipboard-text-outline', link: '/people-manager' },
        { title: 'Gestão de Pessoas', icon: 'account-supervisor', link: '/people-manager' },
        { title: 'Atividades Recentes', icon: 'view-list', link: '/last-activity' },
        { title: 'Quadro de Tarefas', icon: 'clipboard-text-outline', link: '/people-manager' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
