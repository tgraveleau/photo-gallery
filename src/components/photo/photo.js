export default {
  name: 'photo',
  components: {},
  props: [],
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
