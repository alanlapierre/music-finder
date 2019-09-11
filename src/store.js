import Vue from 'vue'
import Vuex from 'vuex'

import trackService from '@/services/track'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {},
    trackList: [],
    searchQuery: '',
    showNotification: false,
    notificationIsError: false,
    notificationText: '',
    showLoader: false
  },

  getters: {
    trackTitle (state) {
      if (!state.track.name) { return '' }
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  },

  mutations: {
    setTrack (state, track) {
      state.track = track
    },
    setTrackList (state, trackList) {
      state.trackList = trackList
    },
    setSearchQuery (state, searchQuery) {
      state.searchQuery = searchQuery
    },
    setShowNotification (state, payload) {
      if (payload) {
        state.showNotification = payload.showNotification
        state.notificationIsError = payload.notificationIsError
        state.notificationText = payload.notificationText
      }
    },
    setShowLoader (state, payload) {
      if (payload) {
        state.showLoader = payload.showLoader
      }
    }
  },

  actions: {
    getTrackById (context, payload) {
      return trackService.getById(payload.id)
        .then(res => {
          context.commit('setTrack', res)
          return res
        })
    }
  }
})

export default store
