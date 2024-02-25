import type { ProductResolvers } from "./../../types.generated";
import { prisma } from "../../../db";

export const Product: ProductResolvers = {
  variants: async (parent, _args, ctx) => {
    return prisma.product_variant.findMany({
      where: { product_id: parent.id },
    })
  },
};
