import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";

export const createProduct = async (input: Prisma.ProductCreateInput) => {
  const product = await prisma.product.create({ data: input });
  return product;
};

export const updateProduct = async (input: Prisma.ProductUpdateInput & { id: string }) => {
  const product = await prisma.product.update({ where: { id: input.id }, data: input });
  return product;
};

export const deleteProduct = async (id: string) => {
  await prisma.product.delete({ where: { id } });
  return id;
};

export const getProducts = async (query = "", offset = 0, limit = 20) => {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        {
          barcode: {
            contains: query,
          },
        },
        {
          name: {
            contains: query,
          },
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: offset,
    take: limit,
  });
  return products;
};

export const getProductById = async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
};

export const getProductByBarCode = async (barcode: string) => {
  const product = await prisma.product.findUnique({ where: { barcode } });
  return product;
};
