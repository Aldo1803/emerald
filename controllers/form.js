'use strict'
let Form = require('../models/form');
let moment = require('moment');

function newForm(req,res) {
    let body = req.body;
    let form = new Form()
    form.name = body.name;
    form.email = body.email;
    form.message = body.message;
    form.phone = body.phone
    form.date = moment().format('DD-MM-YYYY')
    form.save((err, formStored)=>{
        if(err) res.send({message: err});
        if(formStored) return res.status(200).send({formStored})
    })
}

function getForms(req, res) {
    Form.find((err, forms)=>{
        if (err) res.send({ message: err });
        if (forms) return res.status(200).send({ forms })
    })
}


function deleteForm(req, res){
let id = req.params.id;
Form.findByIdAndDelete(id, (err, removed)=>{
    if(err) res.send({message:err});
    if(removed) return res.status(200).send({removed});
})

}

function getForm(req,res){
    let id = req.params.id;
    Form.findById(id, (err,form)=>{
        if(err) res.send({message:err});
        if(form) return res.status(200).send({form})
    })
}

module.exports = {newForm, getForms, deleteForm, getForm}