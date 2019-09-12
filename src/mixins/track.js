const trackMixin = {
  computed: {
    searchQuery: {
      get () {
        return this.$store.state.searchQuery
      },
      set (value) {
        // Seteamos el valor del searchQuery.
        this.setTrackListDetail(null, value)
      }
    }
  },
  methods: {
    selectTrackForDetailPage () {
      if (!this.track.preview_url) { return }
      this.$store.commit('setTrack', this.track)
    },
    selectTrackToListen () {
      if (!this.track.preview_url) { return }
      this.$store.commit('setTrack', this.track)
      this.$store.commit('setShowPlayer', true)
    },
    setTrackListDetail (trackList, searchQuery) {
      if (trackList) {
        this.$store.commit('setTrackList', trackList)
      }
      if (searchQuery) {
        this.$store.commit('setSearchQuery', searchQuery)
      }
    },
    cleanTrackListDetail () {
      this.$store.commit('setTrackList', [])
      this.$store.commit('setSearchQuery', '')
    }
  }
}

export default trackMixin
