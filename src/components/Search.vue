<template lang="pug">
  main
    // transition(name="move")
    app-notification(:show="showNotification", :isError="isError")
      p(slot="body") {{ notificationText }}
    // transition(name="move")
    app-loader(v-show="isLoading")
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
import AppLoader from '@/components/shared/Loader.vue'
import AppNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',

  components: { AppTrack, AppLoader, AppNotification },

  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,
      showNotification: false,
      isError: false,

      notificationText: '',
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
      this.showNotification = false
      this.isLoading = false
    },
    search () {
      if (!this.searchQuery) { return }

      this.showNotification = false
      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.isLoading = false
          this.showNotification = true
          if (res.tracks.total === 0) {
            this.notificationText = 'No se encontraron resultados'
            this.isError = true
          } else {
            this.notificationText = 'Se encontraron resultados'
            this.isError = false
          }
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