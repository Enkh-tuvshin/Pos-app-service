import gql from "graphql-tag";

export const authTypeDefs = gql`
  type OtpToken {
    otpToken: String
  }

  type AccessToken {
    accessToken: String
  }

  type Query {
    getCurrentUser: User!
  }
  type Mutation {
    requestOtp(email: String!): OtpToken!
    verifyOtp(email: String!, otpToken: String!): AccessToken!
  }
`;
