<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-brand
            a.navbar-burger.burger(aria-label="menu", aria-expanded="false")
              span(aria-hidden="true")
              span(aria-hidden="true")  
              span(aria-hidden="true")
          .navbar-menu
            .navbar-start
              router-link.navbar-item(:to="{ name: 'search' }") {{ $t('search') }}
              router-link.navbar-item(to="about") {{ $t('about') }}
            .navbar-end
              .field.navbar-item
                .control.has-icons-left
                  .select.is-rounded.is-small
                    select(@change="selectLang()", v-model="lang")
                      option(value='en' selected) En
                      option(value='es') Es
                  .icon.is-small.is-left
                    i.fas.fa-flag
    .hero-body
      .container.has-text-centered
        h1.title.is-bold MusicFinder
        h2.subtitle Buscador de Canciones Avanzado
        app-player
</template>

<script>
import AppPlayer from '@/components/Player.vue'

export default {
  components: { AppPlayer },
  data () {
    return {
      lang: 'en'
    }
  },
  methods: {
    selectLang () {
      this.$i18n.locale = this.lang
    }
  }
}
</script>
