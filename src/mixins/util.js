const utilMixin = {
  computed: {
    showLoader: {
      get () {
        return this.$store.state.showLoader
      },
      set (value) { }
    },
    showNotification: {
      get () {
        return this.$store.state.showNotification
      },
      set (value) { }
    },
    showPlayer: {
      get () {
        return this.$store.state.showPlayer
      },
      set (value) { }
    }
  },
  methods: {
    showNotificationAction (isError, text) {
      this.hideLoaderAction()
      this.$store.commit('setShowNotification', {showNotification: true,
        notificationIsError: isError,
        notificationText: text})
    },
    hideNotificationAction () {
      this.$store.commit('setShowNotification', {showNotification: false})
    },
    showLoaderAction () {
      this.hideNotificationAction()
      this.$store.commit('setShowLoader', true)
    },
    hideLoaderAction () {
      this.$store.commit('setShowLoader', false)
    },
    showPlayerAction () {
      this.$store.commit('setShowPlayer', true)
    },
    hidePlayerAction () {
      this.$store.commit('setShowPlayer', false)
    }
  }
}

export default utilMixin
