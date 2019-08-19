<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong Music Finder
            .nav-right.nav-menu

    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan Vue-nisimas!
        app-player
</template>

<script>
import AppPlayer from '@/components/Player.vue'

export default {
  components: { AppPlayer }
}
</script>