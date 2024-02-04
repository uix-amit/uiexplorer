import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apollo = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api-ap-south-1.hygraph.com/v2/cls6yp1730s7f01uqu4owqgpd/master',
});
