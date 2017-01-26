var visearch = require('./client.js')

var images = ['image-1', 'image-2']

visearch
  .remove(images)
  .then(function (res) {
    console.log(res)
  })
  .catch(function (err) {
    console.log('error =>', err)
  })

