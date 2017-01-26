var visearch = require('./client.js')

visearch
  .uploadsearch({
    im_url: '',
    page: 1,
    limit: 30,
    score_max: 1,
    score_min: 0,
    score: true,
    fq: {
      brand: 'Pixabay'
    }
  })
  .then(function (res) {
    console.log(res)
  })
  .catch(function (err) {
    console.log('error =>', err)
  })



