<template lang="pug">
  main
    section.section(v-show="!isLoading")
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
          small(v-show="this.tracks && this.tracks.length > 0") {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            app-track(
              v-blur="t.preview_url"
              :class="{ 'is-active': t.id === selectedTrack }",
              :track="t",
              @select="setSelectedTrack"
            )
</template>

<script>
import trackService from '@/services/track'
import AppTrack from '@/components/Track.vue'

export default {
  name: 'app',

  components: { AppTrack },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      selectedTrack: ''
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    remove () {
      this.tracks = []
      this.searchQuery = null
      this.$store.commit('setShowNotification', {showNotification: false})
      this.$store.commit('setShowLoader', {show: false})
    },
    search () {
      if (!this.searchQuery) { return }

      this.$store.commit('setShowNotification', {showNotification: false})
      this.$store.commit('setShowLoader', {show: true})

      trackService.search(this.searchQuery)
        .then(res => {
          this.$store.commit('setShowLoader', {show: false})

          let showNotification = true
          let notificationIsError = false
          let notificationText = 'Se encontraron resultados'

          if (res.tracks.total === 0) {
            notificationText = 'No se encontraron resultados'
            notificationIsError = true
          }
          this.$store.commit('setShowNotification', {showNotification, notificationIsError, notificationText})
          this.tracks = res.tracks.items
        })
    },

    setSelectedTrack (id) {
      this.selectedTrack = id
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