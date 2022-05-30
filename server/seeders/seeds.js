const db = require('../config/connection');
const { User, Report } = require('../models');

db.once('open', async () => {

    await Report.deleteMany();

    const reports = await Report.insertMany([
        {
            "createdBy": users[0]._id,
            "name": "Muffin",
            "breed": "Cat",
            "photo": "muffin plays",
            "description": "orange tabby cat",
            "lastSeen": "1 Oscar Avenue",
            "comments": [{
                "user": users[1]._id,
                "report": reports[0]._id,
                "commentBody": "I think I saw him near the signal in the morning."
            },
            {
                "user": users[2]._id,
                "report": reports[0]._id,
                "commentBody": "I found him near the dumpster"
            }]
        },
        {
            "createdBy": users[1]._id,
            "name": "Sylvester",
            "breed": "Cat",
            "photo": "sylvester eats",
            "description": "black and white cat",
            "lastSeen": "1 Mayor Drive",
            "comments": [{
                "user": users[0]._id,
                "report": reports[1]._id,
                "commentBody": "I think I saw him near the park in the afternoon."
            },
            {
                "user": users[2]._id,
                "report": reports[1]._id,
                "commentBody": "I found him near the pond"
            }]

        },
        {
            "createdBy": users[2]._id,
            "name": "Peggy",
            "breed": "Labrador",
            "photo": "Peggy plays",
            "description": "Yellow Lab",
            "lastSeen": "1 Lower Road",
            "comments": [{
                "user": users[0]._id,
                "report": reports[2]._id,
                "commentBody": "I think I saw her with another family."
            },
            {
                "user": users[1]._id,
                "report": reports[2]._id,
                "commentBody": "I found Peggy for you!"
            }]
        },
        {

            "createdBy": users[3]._id,
            "name": "Bailey",
            "breed": "Dog",
            "photo": "Bailey plays",
            "description": "Yellow mixed breed. Looks like a hound",
            "lastSeen": "1 Row Lane",
            "comments": [{
                "user": users[2]._id,
                "report": reports[3]._id,
                "commentBody": "I think I saw him in my frontyard."
            },
            {
                "user": users[1]._id,
                "report": reports[3]._id,
                "commentBody": "I found in an alley."
            }]
        }

    ]);

    console.log('reports seeded');

    await User.deleteMany();

    const users = await User.insertMany([
        {
            "username": "Molly48",
            "email": "Molly48_Waters59@hotmail.com",
            "password": "kGjRfUNWUIRwfS_",
            "address": "1 Apple Drive, Toronto",
            "reports": [reports[0]._id]
        },
        {
            "username": "Katlyn85",
            "email": "Katlyn8550@gmail.com",
            "password": "otK5YtXpcalD1cm",
            "address": "1 Chester Lane, Toronto",
            "reports": [reports[1]._id]
        },
        {
            "username": "Lessie_Kautzer61",
            "email": "Lessie_Kautzer61_Walker81@hotmail.com",
            "password": "AP3EUTRZoxzsiHn",
            "address": "1 Samuel Avenue, Toronto",
            "reports": [reports[2]._id]
        },
        {
            "username": "Elton_Heaney",
            "email": "Elton_Heaney.Kemmer6@yahoo.com",
            "password": "3dVgRgSQmrGLaQE",
            "address": "1 Bag End, Toronto",
            "reports": [reports[3]._id]
        }
    ]);

    console.log('users seeded');

    process.exit();
})
