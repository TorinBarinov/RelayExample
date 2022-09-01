import {Environment, Network, RecordSource, Store} from 'relay-runtime';

async function fetchGraphQL(request, variables) {
  const response = await fetch('http://localhost:8080/v1beta1/relay', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': 'defaultpassword',
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  if (response.data) {
    throw new Error(response.data.errors);
  }
  const res = await response.json();
  return res;
}
const environment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});

export default environment;
