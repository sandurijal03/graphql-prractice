import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
    paymentMethod: [PaymentMethod]
  }

  type PaymentMethod {
    id: ID!
    last4: String
    expMonth: Int
    expYear: Int
    userId: ID!
  }

  type Query {
    hello: String
    getUsers: [User]
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(id: ID!, name: String!, email: String!, age: Int!): User
    createPaymentMethod(
      id: ID!
      last4: String!
      expMonth: Int
      expYear: Int
      userId: ID
    ): PaymentMethod
  }
`;
