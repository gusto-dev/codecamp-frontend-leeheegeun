import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://practice.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

