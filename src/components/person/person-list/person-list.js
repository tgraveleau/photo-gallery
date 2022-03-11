import PersonPortrait from '../person-portrait/index'
import Gallery from '../../gallery/index'

export default {
  name: 'person-list',
  components: {
    PersonPortrait,
    Gallery
  },
  props: [],
  data () {
    return {
      persons: [],
      activePerson: null
    }
  },
  computed: {
  },
  mounted () {
    for (let i=0; i <4; i++) {
      this.persons.push({name:'Joey'})
    }
  },
  methods: {
    showGallery (person) {
      this.activePerson = person
    }

  }
}
