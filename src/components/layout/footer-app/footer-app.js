import SocialNetworks from '../../socialNetworks/index'

export default {
  name: 'footer-app',
  components: {
    SocialNetworks
  },
  data() {
    return {
      horaires: [
        {jour: 'Lundi', ouverture: '14h à 19h'},
        {jour: 'Mardi', ouverture: '10h à 12h - 14h à 19h'},
        {jour: 'Mercredi', ouverture: '10h à 12h - 14h à 19h'},
        {jour: 'Jeudi', ouverture: '10h à 12h - 14h à 19h'},
        {jour: 'Vendredi', ouverture: '10h à 12h - 14h à 19h'},
        {jour: 'Samedi', ouverture: '10h à 19h'},
        {jour: 'Dimanche', ouverture: 'Fermé'},
      ]
    }
  }
}
