import gql from "graphql-tag";

export const productTypeDefs = gql`
  type Product {
    id: ID!
    name: String!
    imageUrl: String
    barcode: String!
    remaining: Int!
    price: Float!
  }

  input ProductCreateInput {
    name: String!
    imageUrl: String
    barcode: String!
    remaining: Int!
    price: Float!
  }

  input ProductUpdateInput {
    id: ID!
    name: String
    imageUrl: String
    barcode: String
    price: Float
  }

  type Query {
    getProducts(query: String, offset: Int, limit: Int): [Product!]!
    getProductById(id: ID!): Product
    getProductByBarCode(barcode: String!): Product
  }
  type Mutation {
    createProduct(input: ProductCreateInput!): Product!
    updateProduct(input: ProductCreateInput!): Product!
    deleteProduct(id: ID!): ID!
  }
`;
