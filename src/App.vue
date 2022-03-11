<template>
    <div id="app">
        <header>
            <navbar :class="{transparentize: (!menuIsOpen && !hasScrolled)}"/>
            <transition name="show-sidenav">
                <sidenav v-if="menuIsOpen"/>
            </transition>
        </header>
        <main>
            <router-view/>
        </main>
        <footer>
            <footer-app/>
        </footer>
    </div>
</template>

<script>
  import Navbar from '@/components/layout/navbar/index'
  import Sidenav from '@/components/layout/sidenav/index'
  import FooterApp from '@/components/layout/footer-app/index'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'app',
    components: {
      Navbar,
      Sidenav,
      FooterApp
    },
    data() {
      return {
        hasScrolled: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    watch: {
      '$route'() {
        this.closeMenu()
      }
    },
    computed: {
      ...mapGetters({
        menuIsOpen: 'sidenav/isOpen'
      })
    },
    methods: {
      ...mapMutations({
        closeMenu: 'sidenav/close'
      }),
      handleScroll() {
        this.hasScrolled = window.scrollY > 30
      }
    }
  }
</script>

<style src="./app.scss" lang="scss"></style>
