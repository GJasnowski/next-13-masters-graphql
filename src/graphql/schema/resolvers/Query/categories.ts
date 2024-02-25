import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";

export const categories: NonNullable<QueryResolvers["categories"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  const categories = await prisma.category.findMany({
    where: {
      ...(arg.slug ? { slug: arg.slug } : {}),
    },
  });
  return categories;
};
