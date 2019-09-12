<template lang="pug">
  .modal(v-if="track && track.album", :class="{ 'is-active': showPlayer }")
    .modal-background
    .modal-content
      .card.has-text-centered
        header.card-header
          p.card-header-title Reproductor
        section.card-content
          p.is-128x128
            img(:src="track.album.images[0].url")
          p
            strong {{ track.name }} &nbsp;
            small.has-text-info [{{ track.duration_ms | ms-to-mm }}]
          p
            audio(controls, :src="track.preview_url")
    button.modal-close.is-large(@click="close")   
</template>

<script>
import { mapState } from 'vuex'
import utilMixin from '@/mixins/util'

export default {
  mixins: [utilMixin],
  computed: {
    ...mapState(['track'])
  },
  methods: {
    close () {
      this.hidePlayerAction()
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }

  .card-header-title {
    display: block;
  }
</style>