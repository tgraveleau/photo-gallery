import Vue from 'vue'
import App from './App.vue'
import router from './router'
import element from 'element-ui'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css'
import SocialMedia from './socialMedias'
const facebookUrl = SocialMedia.find(sm => sm.id === 'facebook').url

Vue.config.productionTip = false
Vue.use(element)
Vue.directive('infocus', {
  isLiteral: true,
  inserted: (el, binding) => {
    let f = () => {
      let rect = el.getBoundingClientRect()
      let inView = (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      )
      if (inView) {
        el.classList.add(binding.value)
        el.classList.remove('hidden')
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
    f()
  }
})
Vue.mixin({
  data() {
    return {
      facebookUrl: facebookUrl
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
