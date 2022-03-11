export default {
  name: 'person-portrait',
  components: {},
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showDetails: false
    }
  },
  methods: {
    handleClick () {
      this.showDetails = false
      this.$emit('portraitClick', this.person)
    }
  }
}
