import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// COMPONENTS
import Header from './components/Header';
import Clients from './components/Clients';
import AddClientModal from './components/AddClientModal';

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
        <Header />
        <div className='container'>
          <AddClientModal />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
