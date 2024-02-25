import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";

export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  const product = await prisma.product.findUnique({
    where: {
      id: arg.id,
    },
  });
  return product;
};
