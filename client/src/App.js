import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project';
import NotFound from './pages/NotFound';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

// NOTES:
// Apollo Client is a state management JS library that enable to manage local and remote data w/ GraphQL
// The next function if for initialize ApolloClient
// https://www.apollographql.com/docs/react/get-started
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

// NOTES:
// Similar to React Context.Provider, ApolloProvider wraps the app, enabling to access the data from anywhare in the component tree
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/project/:id' element={<Project />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
