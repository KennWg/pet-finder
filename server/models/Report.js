const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema(
    {
        report: {
            type: Schema.Types.ObjectId,
            ref: 'Report',
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        commentBody: {
            type: String,
            required: [true, 'Please include your comment']
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)

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
            default: Date.now
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        comments: [CommentSchema]
    }
);

const Report = mongoose.model ('Report', ReportSchema);

module.exports = Report;