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
              router-link.navbar-item(:to="{ name: 'search' }") {{ $t('header_menu_search') }}
              router-link.navbar-item(to="about") {{ $t('header_menu_about') }}
            .navbar-end
              .field.navbar-item
                .control.has-icons-left
                  .select.is-rounded.is-small
                    select(@change="selectLang()", v-model="lang")
                      option(value='en' selected) {{ $t('header_lang_english') }}
                      option(value='es') {{ $t('header_lang_spanish') }}
                  .icon.is-small.is-left
                    i.fas.fa-flag
    .hero-body
      .container.has-text-centered
        h1.title.is-bold MusicFinder
        h2.subtitle {{ $t('header_subtitle') }}
</template>

<script>
export default {
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
