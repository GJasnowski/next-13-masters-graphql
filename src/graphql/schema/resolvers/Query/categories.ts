import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";

export const categories: NonNullable<QueryResolvers["categories"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  const whereStatement: { slug?: string } = {};
  if (arg.slug) {
    whereStatement.slug = arg.slug;
  }

  const categories = await prisma.category.findMany({
    where: whereStatement,
  });
  return categories;
};
