var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myapp');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('...connected')
});

var Schema = mongoose.Schema;

var ClubSchema = new Schema({
	name: {
    type: String,
    required: true,
    trim: true
  },

  facilities: {
    type: [String],
    required: true,
    trim: true
  },

  address: {
    type: String,
    required: true,
    trim: true
  },

  rating: {
    type: Number,
    required: false,
    trim: true
  }

}); 

var ClubModel = mongoose.model('ClubModel', ClubSchema);
module.exports = ClubModel;