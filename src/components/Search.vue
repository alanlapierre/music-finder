<template lang="pug">
  main
    section.section(v-show="!showLoader")
      .container
        .field.has-addons
          .control.has-icons-left.is-expanded
            input.input.is-large(
              type="text",
              placeholder="Buscar canciones",
              v-model="searchQuery",
              @keyup.enter="search"
            )
            span.icon.is-left
              i.fas.fa-search
          .control
            a.button.is-info.is-large(@click="search") Buscar
          .control
            a.button.is-danger.is-large(@click="remove") &times;
      .container
        p
          small(v-show="this.trackList && this.trackList.length > 0") {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in trackList")
            app-track(
              v-blur="t.preview_url"
              :class="{ 'is-active': t.id === track.id }",
              :track="t"
            )
</template>

<script>
import trackService from '@/services/track'
import AppTrack from '@/components/Track.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: { AppTrack },

  data () {
    return {
      showLoader: false
    }
  },
  computed: {
    ...mapState(['track', 'trackList', 'searchQuery']),
    searchQuery: {
      get () {
        return this.$store.state.searchQuery
      },
      set (value) {
        this.$store.commit('setSearchQuery', value)
      }
    },
    searchMessage () {
      return `Encontrados: ${this.trackList.length}`
    }
  },
  methods: {
    remove () {
      this.$store.commit('setTrackList', [])
      this.$store.commit('setSearchQuery', '')
      this.$store.commit('setShowNotification', {showNotification: false})
      this.showLoader = false
      this.$store.commit('setShowLoader', { showLoader: this.showLoader })
    },
    search () {
      if (!this.searchQuery) { return }

      this.$store.commit('setShowNotification', {showNotification: false})
      this.showLoader = true
      this.$store.commit('setShowLoader', {showLoader: this.showLoader})

      trackService.search(this.searchQuery)
        .then(res => {
          this.showLoader = false
          this.$store.commit('setShowLoader', {showLoader: this.showLoader})

          let showNotification = true
          let notificationIsError = false
          let notificationText = 'Se encontraron resultados'

          if (res.tracks.total === 0) {
            notificationText = 'No se encontraron resultados'
            notificationIsError = true
          }
          this.$store.commit('setShowNotification', {showNotification, notificationIsError, notificationText})
          this.$store.commit('setTrackList', res.tracks.items)
        })
    }
  }
}
</script>

<style lang="scss">
  .results {
    margin-top: 50px;
  }
  
  .is-active {
    border: 3px #23d160 solid;
  }
</style>