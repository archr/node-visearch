var visearch = require('./client.js')

visearch
  .insertStatus('trans_id')
  .then(function (res) {
    console.log(res)
  })
  .catch(function (err) {
    console.log('error =>', err)
  })


