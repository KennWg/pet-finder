const userSeeds = require('./userSeed.json');
const reportSeeds = require('./reportSeed.json');
const db = require('../config/connection');
const { User, Report } = require('../models');

db.once('open', async () => {
    try {
        await Report.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);

        for (let i = 0; i< reportSeeds.length; i++) {
            const { _id, reportAuthor } = await Report.create(reportSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: reportAuthor },
                {
                    $addToSet: {
                        reports: _id,
                    },
                }
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});