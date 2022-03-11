<template>
    <div class="tatouages-page">
        <h1 class="page-title">{{$router.options.routes.find(route => route.name === 'tatouages').label}}</h1>
    </div>
</template>

<script>
  export default {
    name: 'tatouages-page'
  }
</script>

<style scoped>

</style>