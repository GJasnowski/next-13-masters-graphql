import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 15;
const collectionsCount = 3;
const productsRelatedToCollectionCount = 5;

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
}

for (let i = 0; i < collectionsCount; i++) {
  const name = faker.commerce.productAdjective();

  const createdCollection = await prisma.collection.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      products: {
        connect: await prisma.product.findMany({ take: productsRelatedToCollectionCount }),
      },
    },
  });
  console.log(`Created collection with id: ${createdCollection.id}`);
}
