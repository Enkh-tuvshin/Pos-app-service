import { getProductByBarCode, getProductById, getProducts } from "@/services/product.service";

export const productQueries = {
  getProducts: (_: unknown, { query, offset, limit }: { query?: string; offset?: number; limit?: number }) => getProducts(query, offset, limit),
  getProductById: (_: unknown, { id }: { id: string }) => getProductById(id),
  getProductByBarCode: (_: unknown, { barcode }: { barcode: string }) => getProductByBarCode(barcode),
};
