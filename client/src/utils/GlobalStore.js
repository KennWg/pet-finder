import React, { createContext, useContext } from 'react';
import { useStoreReducer } from './reducers';


// Initialize new context for users
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useStoreReducer({
    currentView: "HOME",
    views: ["HOME", "LOGIN", "SIGNUP", "REPORT", "VIEW REPORT", "ALL REPORTS"],
    navBarChoices: [
      { name: "REPORT", description: "" },
      { name: "DASHBOARD", description: "" },
      { name: "HOME", description: "" },
      { name: "LOGOUT", description: "" }
    ],
    navBarChoicesNOT:[
      { name: "HOME", description: "" },
      { name: "LOGIN", description: "" },
      { name: "SIGNUP", description: "" },
    ],
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
  })

  return <Provider value={[state, dispatch]} {...props} />
}

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };