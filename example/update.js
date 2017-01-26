var visearch = require('./client.js')

var images = [
  {
    im_name: 'image-1',
    brand: 'Pixabay'
  },
  {
    im_name: 'image-2',
    brand: 'Pixabay'
  }
]

visearch
  .update(images)
  .then(function (res) {
    console.log(res)
  })
  .catch(function (err) {
    console.log('error =>', err)
  })

