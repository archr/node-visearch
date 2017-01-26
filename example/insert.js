var visearch = require('./client.js')

var images = [
  {
    im_name: 'image-1',
    im_url: 'https://cdn.pixabay.com/photo/2014/01/22/19/38/boot-250012_1280.jpg'
  },
  {
    im_name: 'image-2',
    im_url: 'https://cdn.pixabay.com/photo/2015/03/26/09/52/boots-690502_1280.jpg'
  }
]

visearch
  .insert(images)
  .then(function (res) {
    console.log(res)
  })
  .catch(function (err) {
    console.log('error =>', err)
  })
