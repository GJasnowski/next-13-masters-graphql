import { PrismaClient, $Enums } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 15;
const productVariantsMinCount = 1;
const productVariantsMaxCount = 5;
const collectionsCount = 3;
const categoriesCount = 3;
const productsRelatedToCollectionCount = 5;
const productsRelatedToCategoryCount = 5;

for (let i = 0; i < productsCount; i++) {
  const name = faker.commerce.productName();

  const createdProduct = await prisma.product.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()) * 100,
      image: faker.image.urlLoremFlickr({ category: name.split(" ").pop() }),
    },
  });
  console.log(`Created product with id: ${createdProduct.id}`);

  const productVariantsCount = Math.floor(
    Math.random() * (productVariantsMaxCount - productVariantsMinCount) + productVariantsMinCount
  );
  for (let i = 0; i < productVariantsCount; i++) {
    await prisma.product_variant.create({
      data: {
        name: faker.color.human(),
        product_id: createdProduct.id,
      }
    })
  }
}

for (let i = 0; i < collectionsCount; i++) {
  const name = faker.commerce.productAdjective();
  const productsCount = await prisma.product.count();
  const skippedProductsCount = Math.floor(Math.random() * (productsCount - productsRelatedToCollectionCount));

  const createdCollection = await prisma.collection.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      products: {
        connect: await prisma.product.findMany({
          take: productsRelatedToCollectionCount,
          skip: skippedProductsCount,
        }),
      },
    },
  });
  console.log(`Created collection with id: ${createdCollection.id}`);
}

for (let i = 0; i < categoriesCount; i++) {
  const name = faker.commerce.productMaterial();
  const productsCount = await prisma.product.count();
  const skippedProductsCount = Math.floor(Math.random() * (productsCount - productsRelatedToCategoryCount));

  const createdCategory = await prisma.category.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      products: {
        connect: await prisma.product.findMany({
          take: productsRelatedToCategoryCount,
          skip: skippedProductsCount,
        }),
      },
    },
  });
  console.log(`Created category with id: ${createdCategory.id}`);
}
