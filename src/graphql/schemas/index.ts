import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { productTypeDefs } from "./product.schema";
import { commonTypeDefs } from "./common.schema";
import { userTypeDefs } from "./user.schema";
import { authTypeDefs } from "./auth.schema";

export const typeDefs = mergeTypeDefs([commonTypeDefs, productTypeDefs, userTypeDefs, authTypeDefs]);
