<template lang="pug">
  main
    section.section(v-show="!showLoader")
      .container
        .field.has-addons
          .control.has-icons-left.is-expanded
            input.input.is-large(
              type="text",
              :placeholder="$t('search_search_input')",
              v-model="searchQuery",
              @keyup.enter="search"
            )
            span.icon.is-left
              i.fas.fa-search
          .control
            a.button.is-info.is-large(@click="search") {{ $t('search_search_btn') }}
          .control
            a.button.is-danger.is-large(@click="remove") &times;
      .container
        .columns
            .column
              .flexcontainer
                p
                  small(v-show="trackList && trackList.length > 0") {{ searchMessage }}
                .listmode-selector
                  label.checkbox
                    input(type="checkbox" v-model="listMode") 
                  span &nbsp; Modo lista
      .container.results
        .columns.is-multiline
          .column(:class="[listMode ? 'is-full' : 'is-one-quarter']", v-for="t in trackList")
            app-track(
              v-blur="t.preview_url"
              :class="{ 'selected-track': t.id === track.id }",
              :track="t",
              :display="listMode ? 'list' : 'card'"
            )
</template>

<script>
import trackService from '@/services/track'
import AppTrack from '@/components/Track.vue'
import { mapState } from 'vuex'
import utilMixin from '@/mixins/util'
import trackMixin from '@/mixins/track'

export default {
  name: 'app',
  components: { AppTrack },
  mixins: [utilMixin, trackMixin],
  data () {
    return {
      listMode: false
    }
  },
  computed: {
    ...mapState(['track', 'trackList']),
    searchMessage () {
      return `Encontrados: ${this.trackList.length}`
    }
  },
  methods: {
    remove () {
      this.cleanTrackListDetail()
      this.hideNotificationAction()
      this.hideLoaderAction()
    },
    search () {
      if (!this.searchQuery) { return }
      this.showLoaderAction()

      trackService.search(this.searchQuery)
        .then(res => {
          let notificationIsError = false
          let notificationText = 'Se encontraron resultados'

          if (res.tracks.total === 0) {
            notificationText = 'No se encontraron resultados'
            notificationIsError = true
          }
          this.showNotificationAction(notificationIsError, notificationText)
          // Seteamos la lista de temas.
          this.setTrackListDetail(res.tracks.items, null)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .results {
    margin-top: 50px;
  }
  
  .selected-track {
    border: 3px #23d160 solid;
  }

  .flexcontainer {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .listmode-selector {
    font-size: 20px;
  }
  
  .listmode-selector input {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  } 
</style>