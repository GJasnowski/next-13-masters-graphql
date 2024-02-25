import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";

export const collections: NonNullable<QueryResolvers["collections"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  const whereStatement: { slug?: string } = {};
  if (arg.slug) {
    whereStatement.slug = arg.slug;
  }

  const collections = await prisma.collection.findMany({
    where: whereStatement,
  });
  return collections;
};
