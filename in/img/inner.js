const table = {
  'prima': 'http://r92244o2.beget.tech/img/54209W56w9t7/jpg',
  'mspa': 'http://g964777u.beget.tech/moto/mspa',
  'first': 'https://mail.ru',
  'second': 'https://google.com',
}

window.addEventListener('load', function () {
  let key = window.location.search.split('=')[1]
  redic = table[key]
  window.location.replace(redic)
})
