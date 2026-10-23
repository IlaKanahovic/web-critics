/*
  Warnings:

  - Added the required column `offer_accepted_at` to the `catalog_purchases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `catalog_purchases` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `format` on the `catalog_purchases` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PurchaseFormat" AS ENUM ('ONE_TIME', 'SUBSCRIPTION');

-- AlterTable
ALTER TABLE "catalog_purchases" ADD COLUMN     "offer_accepted_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
DROP COLUMN "format",
ADD COLUMN     "format" "PurchaseFormat" NOT NULL;
