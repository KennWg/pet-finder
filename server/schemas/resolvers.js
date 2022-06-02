const { User, Report } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { report } = require('process');

const resolvers = {
    Query: {
        // get all reports of the logged in user
        me: async (parent, args, context) => {
            // console.log(context.user)
            if (context.user) {
                const userData = Report.find({ createdBy: context.user._id })
                    .populate('createdBy')
                    .populate('comments.user')
                    .sort({ createdAt: -1 });

                    return userData
            }            
        },
        // get all user
        allUsers: async () => {
            return User.find()
                .select('-__v')
                .populate('reports')
                .populate('reports.createdBy')
                .populate('reports.comments.user');
        },
        // get all reports
        allReports: async () => {
            return Report.find()
                .select('-__v')
                .populate('createdBy')
                .populate('comments.user');
        },
        // get all reports by user ID
        reportsByUserId: async (parent, { _id }, context) => {
            return Report.find({ createdBy: _id })
                .populate('createdBy')
                .populate('comments.user')
                .sort({ createdAt: -1 });
        },
        // get a single report
        report: async (parent, { _id }) => {
            return Report.findOne({ _id }).populate('createdBy').populate('comments.user');
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
        addComment: async (parent, { report, commentBody }, context) => {
            if (context.user) {
                const returnReport = await Report.findByIdAndUpdate(
                    { _id: report },
                    { $push: { comments: { commentBody, user: context.user._id } } },
                    { new: true }
                );
                return returnReport;
            }
            throw new AuthenticationError('You need to be logged in!');
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
        deleteReport: async (aprent, { _id }) => {
            return Report.findByIdAndDelete({ _id });
        }
    }
};

module.exports = resolvers;