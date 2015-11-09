
// # hate crime

var jsonSelect = require('mongoose-json-select');
var mongoosePaginate = require('mongoose-paginate');

exports = module.exports = function(mongoose, iglooMongoosePlugin) {

  var HateCrime = new mongoose.Schema({
    name: {
      type: String,
      required: true
    }
  });

  // virtuals
  HateCrime.virtual('object').get(function() {
    return 'hate_crime';
  });

  // plugins
  //HateCrime.plugin(jsonSelect, '-_group -salt -hash');
  HateCrime.plugin(mongoosePaginate);

  // keep last
  HateCrime.plugin(iglooMongoosePlugin);

  return mongoose.model('HateCrime', HateCrime);
};

exports['@singleton'] = true;
exports['@require'] = [ 'igloo/mongo', 'igloo/mongoose-plugin' ];
