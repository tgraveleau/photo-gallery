<template>
  <div class="piercings-page">
    <h1 class="page-title">{{$router.options.routes.find(route => route.name === 'piercings').label}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'piercings-page'
  }
</script>

<style lang="scss">
  .about {
    background-color: #ccc;
  }
</style>
