import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";

export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  const whereStatement: { slug?: string } = {};
  if (arg.slug) {
    whereStatement.slug = arg.slug;
  }

  const product = await prisma.product.findMany({
    where: whereStatement,
  });
  return product;
};
