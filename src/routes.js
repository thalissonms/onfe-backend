const express = require('express')
const productsController = require('./controllers/productsController')
const productsUpdate = require('./controllers/productsUpdate')
const productsGet = require('./controllers/productsGet') 
const productsDelete = require('./controllers/productsDelete')
const productsBackup = require('./controllers/productsBackup')
const productImgSearch = require('./controllers/productImgSearch')
const routes =  express.Router()

routes.post('/itens', productsController.store)
routes.get('/itens/get/all', productsGet.index)
routes.get('/itens/get/:itemId', productsGet.getItem)
routes.put('/itens/update/:itemId', productsUpdate.update)
routes.delete('/itens/delete/:itemId', productsDelete.delete)
routes.get('/img/:p', productImgSearch.store)

routes.post('/itens/backup', productsBackup.store)

module.exports = routes