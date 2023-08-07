const mongoose = require('mongoose');
function dbConnection(){
    mongoose.connect(process.env.DB_URl).then(() => console.log('Connected!'));
}
module.exports = dbConnection