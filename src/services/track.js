import musicFinderService from './music-finder'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  return musicFinderService.get('/search', {
    params: {q, type}
  }).then(res => res.data)
}

export default trackService
