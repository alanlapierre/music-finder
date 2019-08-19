import trae from 'trae'
import configService from './config'

const musicFinderService = trae.create({
  baseUrl: configService.apiUrl
})

export default musicFinderService
