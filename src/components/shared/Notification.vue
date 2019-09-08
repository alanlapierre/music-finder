<template lang="pug">
.container(v-if="showNotification") 
    .columns
        .column.is-8.is-offset-2
            .notification(:class="isError? 'is-danger' : 'is-link'")
                slot(name="body")
                button.delete(aria-label="delete", @click="close") 
</template>
<script>
export default {
  props: {
    isError: { type: Boolean, required: true },
    show: { type: Boolean, required: true }
  },
  data () {
    return {
      showNotification: false
    }
  },
  methods: {
    close () {
      this.show = false
    }
  },
  watch: {
    show: function (val) {
      this.showNotification = val
      if (val) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.notification {
    margin: 10px;
    border-radius: 10px;
}
</style>