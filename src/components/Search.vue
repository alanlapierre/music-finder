<template lang="pug">
  main
    transition(name="move")
      pm-notification(v-show="showNotification")
        p(slot="body") No se encontraron resultados
    transition(name="move")
      pm-loader(v-show="isLoading")
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
            pm-track(
              v-blur="t.preview_url"
              :class="{ 'is-active': t.id === selectedTrack }",
              :track="t",
              @select="setSelectedTrack"
            )
</template>

<script>
import trackService from '@/services/track'

import PmTrack from '@/components/Track.vue'

import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',

  components: { PmTrack, PmLoader, PmNotification },

  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,
      showNotification: false,

      selectedTrack: ''
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {
    remove () {
      this.tracks = []
      this.searchQuery = null
    },
    search () {
      if (!this.searchQuery) { return }

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
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