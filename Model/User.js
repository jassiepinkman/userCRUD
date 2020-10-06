const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : 'First Name is required'
    },
    lastName : {
        type : String,
        required : 'Last Name is required'
    },
    superHeroName : {
        type : String,
        required : 'Super Hero Name is required'
    },
    email : {
        type: String,
        required: 'Email address is required',
    },
    gender : {
        type : String,
        required : 'Gender is required'
    },
    age : {
        type : Number,
        required : 'Age is required'
    }
});

mongoose.model('userData', dataSchema);