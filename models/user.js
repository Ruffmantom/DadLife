const mongoose = require('mongoose');
const crypto = require('crypto');
const { v1: uuidv1 } = require('uuid');
const { ObjectId } = mongoose.Schema;
const userSchema = new mongoose.Schema(
    {
        fName: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        lName: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        company: {
            type: ObjectId,
            ref: "Company",
            required:false,
            trim: true
        },
        phone: {
            type: String,
            trim: true,
            required: false
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        hashed_password: {
            type: String,
            required: true
        },
        salt: String,
        role: {
            type: Number,
            default: 0
        },
        verified: {
            type: Boolean,
            default: false
        },
        vCode: {
            type: String,
            trim:true,
            // required:true
        },
        address: [
            {
                addressName:{
                    type:String,
                    trim:true, 
                },
                streetOne:{
                    type:String,
                    trim:true
                },
                streetTwo: {
                    type:String, 
                    trim:true  
                },
                city:{
                    type:String,
                    trim:true
                },
                state:{
                    type:String,
                    trim:true
                },
                aCode: {
                    type:String,
                    trim:true
                }
            }
        ],
        history: {
            type: Array,
            default: []
        }
    },
    { timestamps: true }
);

// virtual field
userSchema
    .virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function () {
        return this._password;
    });

userSchema.methods = {
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function (password) {
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    }
};

module.exports = mongoose.model('User', userSchema);
