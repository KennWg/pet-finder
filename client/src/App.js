import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



import './App.css';

import { StoreProvider } from "./utils/GlobalStore";
import Navbar from './components/Navbar/';
import Header from './components/Header/Header.js';
import Main from './components/Main/';
import Footer from './components/Footer/Footer.js';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'});

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
          <Navbar />
          <Header />
          <Main />
          <Footer />
        </StoreProvider>

      </ApolloProvider >

    </div>

  );
}

export default App;
