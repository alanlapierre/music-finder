<template lang="pug">
  .container(v-if="track && track.id")
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          .field.is-grouped.button-bar
            .control
              a.button.is-primary.is-large
                span.icon(@click="selectTrackToListen")
                  i.fas.fa-play
            .control
              a.button.is-warning.is-large
                span.icon(@click="goBack")
                  i.fas.fa-chevron-left  
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ trackTitle }}
          .panel-block
            .article-media
              .media-content
                .content
                  ul(v-for="(v, k) in track")
                    li
                      strong {{ k | uppercase }}:&nbsp;
                      span {{ v }}

              nav.nav-level
                .level-left
                  a.level-item
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import trackMixin from '@/mixins/track'
import utilMixin from '@/mixins/util'

export default {
  mixins: [trackMixin, utilMixin],
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  methods: {
    ...mapActions(['getTrackById']),
    goBack () {
      this.$router.push({ name: 'search' })
    }
  },
  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.showLoaderAction()

      this.getTrackById({ id })
        .then(() => {
          this.hideLoaderAction()
          this.showNotificationAction(false, 'Canción encontrada')
        })
        .catch(() => {
          this.hideLoaderAction()
          this.showNotificationAction(true, 'Canción no encontrada')
          setTimeout(() => this.$router.push({ name: 'search' }), 3000)
        })
    }
  }
}
</script>

<style lang="scss">
  .column {
    margin: 20px;
  }
  .button-bar {
    margin-top: 20px;
  }

</style>