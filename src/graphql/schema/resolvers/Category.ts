import type { CategoryResolvers } from "./../../types.generated";
import { prisma } from "../../../db";

export const Category: CategoryResolvers = {
  products: async (parent, _args, _ctx) => {
    return prisma.product.findMany({
      where: { categories: { some: { id: parent.id } } },
    });
  },
};
