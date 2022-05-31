const { Schema, model } = require('mongoose');
const CommentSchema = require('../models/Comment');
const dateFormat = require('../utils/dateFormat');



const ReportSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please include the name of your pet.']
        },
        breed: {
            type: String
        },
        photo: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: [true, 'Please include a short description of your pet.']
        },
        lastSeen: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        comments: [CommentSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Report = model('Report', ReportSchema);

module.exports = Report;