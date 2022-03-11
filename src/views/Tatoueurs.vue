<template>
    <div class="tatoueurs-page">
        <h1 class="page-title">{{$router.options.routes.find(route => route.name === 'tatoueurs').label}}</h1>
        <!--<div class="equipe-image"></div>-->
        <person-list/>
    </div>
</template>

<script>
  import PersonList from '@/components/person/person-list/index'

  export default {
    name: 'tatoueurs-page',
    components: {
      PersonList
    }
  }
</script>

<style lang="scss">
    .tatoueurs-page {
        h1 {
            margin-bottom: 0;
        }
        .tatoueurs-page {
            background-image: url('/image/shop/devanture.jpg');
            width: 100%;
            height: 15rem;
        }
    }
</style>