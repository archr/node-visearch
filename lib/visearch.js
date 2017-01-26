var rp = require('request-promise')
var each = require('lodash.foreach')

function Visearch(options) {
  this.accessKey = options.accessKey
  this.secretKey = options.secretKey
  this.host = options.host || 'http://visearch.visenze.com'
}

Visearch.prototype.insert = Visearch.prototype.update = function (images) {
  var form = {}

  each(images, function (image, i) {
    each(image, function (value, key) {
      form[key + '[' + i + ']'] = value
    })
  })

  return this.request('POST', '/insert', form)
}

Visearch.prototype.insertStatus = function (transactionId) {
  var path = '/insert/status/' + transactionId
  return this.request('GET', path)
}

Visearch.prototype.remove = function (images) {
  var form = {}

  each(images, function (image, i) {
    form['im_name' + '[' + i + ']'] = image
  })

  return this.request('POST', '/remove', form)
}

Visearch.prototype.uploadsearch = function (options) {
  var querystring = this.querystring(options)
  return this.request('GET', '/uploadsearch?' + querystring )
}

Visearch.prototype.querystring = function (options) {
  var parameters = []

  each(options, function (value, key) {
    var item = key + '=' + value

    if (key === 'fq') {
      var fqItems = []
      each(value, function (v, k) {
        fqItems.push('fq=' + k + ':' + v)
      })

      item = fqItems.join('&')
    }

    parameters.push(item)
  })

  return parameters.join('&')
}

Visearch.prototype.request = function (method, path, form) {
  var options = {
    uri: this.host + path,
    method: method,
    auth: {
      user: this.accessKey,
      pass: this.secretKey
    },
    form: form,
    json: true
  }

  return rp(options)
}

module.exports = Visearch
