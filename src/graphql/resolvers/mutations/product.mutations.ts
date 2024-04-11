import { createProduct, updateProduct, deleteProduct } from "@/services/product.service";

export const productMutations = {
  createProduct: (_: unknown, args: any) => createProduct(args),
  updateProduct: (_: unknown, args: any) => updateProduct(args),
  deleteProduct: (_: unknown, { id }: { id: string }) => deleteProduct(id),
};
