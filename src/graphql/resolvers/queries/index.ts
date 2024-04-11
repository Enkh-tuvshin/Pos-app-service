import { productQueries } from "./product.queries";
import { authQueries } from "./auth.queries";

const Query = {
  ...productQueries,
  ...authQueries,
};

export default Query;
