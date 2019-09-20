import Search from '@/components/Search.vue'
import TrackDetail from '@/components/TrackDetail.vue'

const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/track/:id', component: TrackDetail, name: 'track' }
]

export default routes
