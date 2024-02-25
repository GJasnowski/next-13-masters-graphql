import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";

export const productsCount: NonNullable<
  QueryResolvers["productsCount"]
> = async (_parent, arg, _ctx) => {
  const count = await prisma.product.count({
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
  return count;
};
