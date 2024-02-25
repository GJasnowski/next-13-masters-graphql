import type { CollectionResolvers } from "./../../types.generated";
import { prisma } from "../../../db";

export const Collection: CollectionResolvers = {
  products: async (parent, _args, _ctx) => {
    return prisma.product.findMany({
      where: { collections: { some: { id: parent.id } } },
    });
  },
};
