import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    fullName: String
    imageUrl: String
    email: String!
    createdAt: Date!
    updatedAt: Date!
  }
`;
