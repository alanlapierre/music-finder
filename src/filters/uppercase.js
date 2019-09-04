const uppercase = {}

uppercase.install = function (Vue) {
  Vue.filter('uppercase', (val) => {
    return val.toUpperCase()
  })
}

export default uppercase
