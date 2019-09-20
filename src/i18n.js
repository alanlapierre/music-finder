import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    header_menu_search: 'Search',
    header_subtitle: 'Advanced Song Finder',
    header_lang_english: 'English',
    header_lang_spanish: 'Spanish',
    footer_created: 'Created By',
    player_title: 'Player',
    search_search_btn: 'Search',
    search_search_input: 'Search songs'
  },
  es: {
    header_menu_search: 'Búsqueda',
    header_subtitle: 'Buscador de Canciones Avanzado',
    header_lang_english: 'Inglés',
    header_lang_spanish: 'Español',
    footer_created: 'Creado por',
    player_title: 'Reproductor',
    search_search_btn: 'Buscar',
    search_search_input: 'Buscar canciones'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n
