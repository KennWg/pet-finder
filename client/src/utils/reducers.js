import { useReducer } from 'react';

import {
    UPDATE_VIEW,
    UPDATE_NAVBAR,
    UPDATE_REPORTS,
    UPDATE_USERS,
    COMMENTS
}
    from "./actions";

const initialState = {
    currentView: "home",
    views: ["home", "login", "signup", "create_report", "single_report", "logout_info", "all_reports"],
    users: [
        {
            id: 1,
            username: 'Deepa34',
            email: 'deepa_patel68@startup.ca',
            missingAnimals: [
                {
                    animalName: 'Buddy',
                    species: "Dog",
                    breed: 'poodle',
                    picture: 0,
                    details: "PLACEHOLDER: If you have any of the following details, please include: age, height, weight, hair length, age, colar color, coat type ",
                    location: "Hwy 7 & Warden Ave, Regional Municipality of York, Markham, ON L3R 2A2",
                    dateTimeFound: "1517211810362",
                    reportTimeStamp: "1519211810362",
                    additionalDetails: "Likes to play with cats"
                }
            ],
            sightedAnimals: [],
        },
        {
            id: 2,
            username: 'Jeremy123',
            email: 'shwa22334@sorrydays.com',
            missingAnimals: [],
            sightedAnimals: [
                {
                    animalName: 'Unknown',
                    species: "Dog",
                    breed: "poodle",
                    picture: 0,
                    details: "PLACEHOLDER: If you have any of the following details, please include: age, height, weight, hair length, age, colar color, coat type ",
                    location: "101 YMCA Blvd, Markham, ON L6G 0A1",
                    dateTimeFound: "1509572610542",
                    reportTimeStamp: "1519572610542",
                    additionalDetails: "Tried to catch the dog but was scared of me."
                }
            ],
        },
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
        case UPDATE_VIEW:
            return {
                ...state,
                currentView: action.currentView,
            };

        // if it's none of these actions, do not update state at all and keep things the same!
        default:
            return state;
    }
};

export function useStoreReducer(initialState) {
return useReducer(reducer, initialState);
}