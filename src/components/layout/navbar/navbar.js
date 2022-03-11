import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'navbar',
  computed: {
    ...mapGetters({
      menuIsOpen: 'sidenav/isOpen'
    }),
    routes () {
      return this.$router.options.routes.filter(route => route.path !== '/')
    }
  },
  methods: {
    ...mapMutations({
      toggleMenu: 'sidenav/toggle'
    })
  }
}
