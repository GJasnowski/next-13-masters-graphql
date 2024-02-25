/*
  Warnings:

  - You are about to drop the column `product_id` on the `order_item` table. All the data in the column will be lost.
  - Added the required column `product_variant_id` to the `order_item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order_item" DROP CONSTRAINT "order_item_product_id_fkey";

-- AlterTable
ALTER TABLE "order_item" DROP COLUMN "product_id",
ADD COLUMN     "product_variant_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "product_variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
