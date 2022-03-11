import SocialNetworks from '../../socialNetworks/index'

export default {
  name: 'sidenav',
  components: {
    SocialNetworks
  },
  computed: {
    routes () {
      return this.$router.options.routes.filter(route => route.path !== '/')
    }
  }
}
