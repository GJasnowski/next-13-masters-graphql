/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Category } from "./schema/resolvers/Category";
import { Collection } from "./schema/resolvers/Collection";
import { Product } from "./schema/resolvers/Product";
import { ProductVariant } from "./schema/resolvers/ProductVariant";
import { categories as Query_categories } from "./schema/resolvers/Query/categories";
import { collections as Query_collections } from "./schema/resolvers/Query/collections";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
import { productsCount as Query_productsCount } from "./schema/resolvers/Query/productsCount";
export const resolvers: Resolvers = {
  Query: {
    categories: Query_categories,
    collections: Query_collections,
    product: Query_product,
    products: Query_products,
    productsCount: Query_productsCount,
  },

  Category: Category,
  Collection: Collection,
  Product: Product,
  ProductVariant: ProductVariant,
};
