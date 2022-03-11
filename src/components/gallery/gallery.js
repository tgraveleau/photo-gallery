export default {
  name: 'gallery',
  components: {},
  props: [
    'person'
  ],
  data() {
    return {
      photos: [],
      activePhotoIndex: 0
    }
  },
  mounted() {
    // this.photos.push(`image/person/${this.person.name}/main-tattoo.jpg`)
    // this.photos.push(`image/wallpaper.jpg`)
    this.photos.push(`image/person/${this.person.name}/montre_gousset2.jpg`)
    this.photos.push(`image/person/${this.person.name}/dragon.jpg`)
    this.photos.push(`image/person/${this.person.name}/final2.jpg`)
    this.photos.push(`image/person/${this.person.name}/cobra.jpg`)
  },
  methods: {
    close() {
      this.$emit('close')
    },
    // previous () {
    //   if (this.activePhotoIndex > 0) {
    //     this.activePhotoIndex--
    //   } else {
    //     this.activePhotoIndex = this.photos.length -1
    //   }
    // },
    // next () {
    //   if (this.activePhotoIndex < (this.photos.length -1)) {
    //     this.activePhotoIndex++
    //   } else {
    //     this.activePhotoIndex = 0
    //   }
    // }
  },
  // computed: {
  //   activePhotoUrl() {
  //     if (this.photos.length === 0) {
  //       return ''
  //     }
  //     return this.photos[this.activePhotoIndex]
  //   },
  //   activePhotoName() {
  //     if (this.photos.length === 0) {
  //       return ''
  //     }
  //     const urlSplitted = this.photos[this.activePhotoIndex].split('/')
  //     return urlSplitted[urlSplitted.length -1]
  //   }
  // },
  filters: {
    filename(url) {
      if (url.length === 0) {
        return ''
      }
      const urlSplitted = url.split('/')
      return urlSplitted[urlSplitted.length - 1]
    }
  }
}
