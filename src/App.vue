<template lang="pug">
  #app
    app-header
    #container  
      app-notification(:show="showNotification", :isError="notificationIsError")
        p(slot="body") {{ notificationText }}
      app-loader(v-show="showLoader")
      router-view
    app-footer
</template>

<script>
import AppFooter from '@/components/layout/Footer.vue'
import AppHeader from '@/components/layout/Header.vue'
import AppLoader from '@/components/shared/Loader.vue'
import AppNotification from '@/components/shared/Notification.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: { AppFooter, AppHeader, AppLoader, AppNotification },
  computed: {
    ...mapState(['showNotification', 'notificationIsError', 'notificationText', 'showLoader'])
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
