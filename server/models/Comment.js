const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const CommentSchema = new Schema(
    {
       // set custom id to avoid confusion with parent comment_id by requiring 'Types'
        commentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        report: {
            type: Schema.Types.ObjectId,
            ref: 'Report',
            // required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            // required: true
        },
        commentBody: {
            type: String,
            required: [true, 'Please include your comment']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

module.exports = CommentSchema;