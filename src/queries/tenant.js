import {graphql} from 'react-relay';

export const FETCH_TENANT_QUERY = graphql`
  query tenantQuery {
    tenant_connection {
      edges {
        node {
          pk
        }
      }
    }
  }
`;
