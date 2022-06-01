import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';

import { StoreProvider } from "./utils/GlobalStore";
import Navbar from './components/Navbar/';
import Header from './components/Header/Header.js';
// import Main from './components/Main/';
import Footer from './components/Footer/Footer.js';
import AllReports from './components/Main/AllReports';
import CreateReport from './components/Main/CreateReport';
import Dashboard from './components/Main/Dashboard';
import Home from './components/Main/Home';
import Login from './components/Main/Login';
import LogoutInfo from './components/Main/LogoutInfo';
import SignUp from './components/Main/SignUp';
import SingleReport from './components/Main/SingleReport';

const httpLink = createHttpLink({
  // Remember to change back to:   uri: '/graphql'    for deployment

  uri: 'http://localhost:3001/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="site-container">

      <ApolloProvider client={client}>

        <StoreProvider>

          <Router>

            <Navbar />
            <Header />

            {/* <Main> */}
              <Routes>
              <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/all_reports"
                  element={<AllReports />}
                />
                <Route
                  path="/create_report"
                  element={<CreateReport />}
                />
                <Route
                  path="/dashboard"
                  element={<Dashboard />}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
                <Route
                  path="/logout_info"
                  element={<LogoutInfo />}
                />
                <Route
                  path="/signup"
                  element={<SignUp />}
                />
                <Route
                  path="/single_report"
                  element={<SingleReport />}
                />

              </Routes>
            {/* </Main> */}

            {/* <Footer /> */}

          </Router>

        </StoreProvider>

      </ApolloProvider >

    </div>

  );
}

export default App;
