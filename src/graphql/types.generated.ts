import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Category = {
  __typename?: "Category";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  products?: Maybe<Array<Maybe<Product>>>;
  slug: Scalars["String"]["output"];
};

export type Collection = {
  __typename?: "Collection";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  products?: Maybe<Array<Maybe<Product>>>;
  slug: Scalars["String"]["output"];
};

export type Product = {
  __typename?: "Product";
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  price: Scalars["Int"]["output"];
  slug: Scalars["String"]["output"];
  variants?: Maybe<Array<Maybe<ProductVariant>>>;
};

export type ProductVariant = {
  __typename?: "ProductVariant";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  categories?: Maybe<Array<Maybe<Category>>>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  productsCount: Scalars["Int"]["output"];
};

export type QuerycategoriesArgs = {
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QuerycollectionsArgs = {
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryproductArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryproductsArgs = {
  categorySlug?: InputMaybe<Scalars["String"]["input"]>;
  needle?: InputMaybe<Scalars["String"]["input"]>;
  notId?: InputMaybe<Scalars["ID"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryproductsCountArgs = {
  categorySlug?: InputMaybe<Scalars["String"]["input"]>;
  needle?: InputMaybe<Scalars["String"]["input"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Category: ResolverTypeWrapper<Category>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Collection: ResolverTypeWrapper<Collection>;
  Product: ResolverTypeWrapper<Product>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  ProductVariant: ResolverTypeWrapper<ProductVariant>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Category: Category;
  ID: Scalars["ID"]["output"];
  String: Scalars["String"]["output"];
  Collection: Collection;
  Product: Product;
  Int: Scalars["Int"]["output"];
  ProductVariant: ProductVariant;
  Query: {};
  Boolean: Scalars["Boolean"]["output"];
};

export type CategoryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  products?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
    ParentType,
    ContextType
  >;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  products?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
    ParentType,
    ContextType
  >;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  variants?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ProductVariant"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProductVariant"] = ResolversParentTypes["ProductVariant"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  categories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Category"]>>>,
    ParentType,
    ContextType,
    Partial<QuerycategoriesArgs>
  >;
  collections?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Collection"]>>>,
    ParentType,
    ContextType,
    Partial<QuerycollectionsArgs>
  >;
  product?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<QueryproductArgs, "id">
  >;
  products?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
    ParentType,
    ContextType,
    Partial<QueryproductsArgs>
  >;
  productsCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<QueryproductsCountArgs>
  >;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductVariant?: ProductVariantResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};
