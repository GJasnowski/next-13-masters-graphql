import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";

const defaultTake = 10;
const defaultSkip = 0;

export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  const product = await prisma.product.findMany({
    take: arg.take ?? defaultTake,
    skip: arg.skip ?? defaultSkip,
    where: {
      ...(arg.categorySlug
        ? { categories: { some: { slug: arg.categorySlug } } }
        : {}),
      ...(arg.needle
        ? {
            OR: [
              { name: { contains: arg.needle, mode: "insensitive" } },
              { description: { contains: arg.needle, mode: "insensitive" } },
              {
                categories: {
                  some: { name: { contains: arg.needle, mode: "insensitive" } },
                },
              },
              {
                collections: {
                  some: { name: { contains: arg.needle, mode: "insensitive" } },
                },
              },
            ],
          }
        : {}),
    },
  });
  return product;
};
