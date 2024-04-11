import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/services/product.service";

export const productMutations = {
  createProduct: (_: unknown, { input }: any) => createProduct(input),
  updateProduct: (_: unknown, { input }: any) => updateProduct(input),
  deleteProduct: (_: unknown, { id }: { id: string }) => deleteProduct(id),
};
