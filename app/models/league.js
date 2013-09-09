var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , crypto = require('crypto')
    , _ = require('underscore')


var LeagueSchema = new Schema({
    name: {type: String},
    commissioner:{type: Schema.ObjectId, ref:'User'}
}) ;

LeagueSchema.statics = {
    load: function (id,cb){
        this.findOne({_id: id}).populate('commissioner').exec(cb);
    }
};

mongoose.model('League', LeagueSchema);