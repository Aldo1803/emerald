let express = require('express')
let app = express()
let FormController = require('../controllers/form')
app.post('/contact', FormController.newForm);
app.get('/forms', FormController.getForms);
app.delete('/delete/:id', FormController.deleteForm);
app.get('/get-form/:id', FormController.getForm);
module.exports = app