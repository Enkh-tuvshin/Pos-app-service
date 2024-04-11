import { productMutations } from "./product.mutations";
import { authMutations } from "./auth.mutations";

const Mutation = {
  ...productMutations,
  ...authMutations,
};

export default Mutation;
