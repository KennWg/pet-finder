const { User, Report } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { report } = require('process');

const resolvers = {
    Query: {
        // get all user
        allUsers: async () => {
            return User.find()
                .select('-__v')
                .populate('reports');
        },
        // get all reports
        allReports: async () => {
            return Report.find()
                .select('-__v')
                // .populate('comments');
        },
        // get all reports by user ID
        reportsByUserId: async (parent, { createdBy }) => {
            return Report.find(createdBy).sort({ createdAt: -1 });
        },
        // get a single report
        report: async (parent, { _id }) => {
            return Report.findOne({ _id });
        },
        // get all reports that the user has commented on: To Do
        reportByUserComments: async (parent, { user }) => {
            return Report
                .filter((u) => u.user == u.user)
                .sort({ createdAt: -1 });
        },
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
                const report = await Report.create({ ...args, createdBy: context.user._id });

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
            if (context.report) {
                const comment = await Comment.create({ ...args, comment: context.report._id });

                await Report.findByIdAndUpdate(
                    { _id: context.report._id },
                    { $push: { report: report._id } },
                    { new: true }
                );

                return comment;
            }
        },
        // update a report
        updateReport: async (parent, args, context) => {
            if (context.user) {
                const update = await Report.findByIdAndUpdate(
                    args._id,
                    args,
                    { new: true });

                    return update;
            }
            throw new AuthenticationError('Not logged in');
        },

        // delete a report
        deleteReport: async (aprent, {_id}) => {
            return Report.findByIdAndDelete({_id});
        }
    }
};

module.exports = resolvers;