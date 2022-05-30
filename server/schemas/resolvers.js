const { User, Report } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { report } = require('process');

const resolvers = {
    Query: {
        // get all reports
        allReports: async (parent, { name, photo }) => {
            const params = {};
            if (name){
                params.name = name;
            }
            if (photo){
                params.photo = photo;
            }


            return await Report.find(params).populate('report');
        },
        // get a single report
        report: async (parent, { _id }) => {
            return await Report.findById(_id).populate('report');
        },
        // get all reports by user ID
        reportsByUserId: async (parent, {createdBy}) => {
            const params = createdBy ? {createdBy} : {};
            return Comment.find(params).sort({createdAt: -1});
        }
    },

    Mutation: {
        // add a user
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        // login with Auth
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        // add a report
        addReport: async (parent, args, context) => {
            if (context.user) {
                const report = await Report.create({ ...args, user: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { reports: report._id } },
                    { new: true }
                );
                return report;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // add a comment
        addComment: async (parent, args, context) => {
            if(context.report) {
                const comment = await Comment.create({...args, comment: context.report._id});

                await Report.findByIdAndUpdate(
                    {_id: context.report._id},
                    {$push: { report: report._id}},
                    {new: true}
                );

                return comment;                
            }
        },
        // update a report
        updateReport: async (parent, args, context) => {
            if (context.report) {
                return await Report.findByIdAndUpdate(context.report._id, args, {new: true});
            }
            throw new AuthenticationError('Not logged in');
        }

    }
};

module.exports = resolvers;