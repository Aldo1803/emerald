const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb+srv://PapaNikolz:Ahtziri0805@cluster0.6wuav.mongodb.net/ContactForms?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
        app.listen(port, () => {
            console.log('App listening on port 3000!');
        });
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
