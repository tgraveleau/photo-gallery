import Contact from '../contact/index'

export default {
  name: 'presentation',
  components: {
    Contact
  },
  data () {
    return {
      tattoos: [
        {
          src: '/image/tattoos/rose_ventre_piercing_nombril.jpg'
        },
        {
          src: '/image/tattoos/acdc_full_dos.jpg'
        },
        {
          src: '/image/tattoos/texte_avant_bras.jpg'
        },
        {
          src: '/image/tattoos/aigle_design.jpg'
        },
        {
          src: '/image/tattoos/couleur_full_dos.jpg'
        }
      ]
    }
  },
  computed: {
    routeRealisations () {
      return this.$router.options.routes.find(route => route.name === 'tatouages')
    }
  }
}
