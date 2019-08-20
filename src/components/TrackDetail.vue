<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        app-track(:track="track")
</template>

<script>
import trackService from '@/services/track'
import AppTrack from '@/components/Track.vue'

export default {
  components: { AppTrack },

  data () {
    return {
      track: {}
    }
  },

  created () {
    const id = this.$route.params.id

    trackService.getById(id)
      .then(res => {
        this.track = res
      })
  }
}
</script>

<style lang="scss" scoped>
  .column {
    margin: 20px;
  }
</style>