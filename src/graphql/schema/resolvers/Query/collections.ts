import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";

export const collections: NonNullable<QueryResolvers["collections"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  const collections = await prisma.collection.findMany({
    where: {
      ...arg.slug ? { slug: arg.slug } : {},
    },
  });
  return collections;
};
