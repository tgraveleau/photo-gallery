<template>
  <div class="home">
    <div class="wallpaper picture"></div>
    <presentation/>
  </div>
</template>

<script>
import Presentation from '../components/presentation/index'
export default {
  name: 'home',
  components: {
      Presentation
  }
}
</script>

<style lang="scss">
  .wallpaper {
    height: 90vh;
    background-image: url('../../public/image/wallpaper.jpg');
  }
</style>