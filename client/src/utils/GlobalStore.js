import React, { createContext, useContext } from 'react';
import { useStoreReducer } from './reducers';


// Initialize new context for users
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useStoreReducer({
    currentView: "home",
    views: ["home", "login", "signup", "create_report", "single_report", "logout_info", "all_reports"],
    navBarChoices: [
      { name: "create_report", description: "Make a missing pet report" },
      { name: "dashboard", description: "See reports with which you have interacted" },
      { name: "home", description: "Return to the home page" },
      { name: "logout_info", description: "Logout" }
    ],
    navBarChoicesNOT:[
      { name: "home", description: "Return to the home page" },
      { name: "login", description: "Login to your account" },
      { name: "signup", description: "Create an account" },
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