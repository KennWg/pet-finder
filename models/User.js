const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');  

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match a valid email address format']
        },
        address: {
            type: String,
            required: true,
        }
    }
)


// to create password
UserSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare password with hashed password
UserSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', UserSchema);

module.exports = User;