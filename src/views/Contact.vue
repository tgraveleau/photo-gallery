<template>
    <div class="contact-page">
        <h1 class="page-title">{{$router.options.routes.find(route => route.name === 'contact').label}}</h1>
        <contact/>
    </div>
</template>

<script>
  import Contact from '../components/contact/index'
  export default {
    name: 'contact-page',
    components: {
      Contact
    }
  }
</script>
