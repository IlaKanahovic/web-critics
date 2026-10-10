/*
  Warnings:

  - Added the required column `name_product` to the `catalog_purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "catalog_purchases" ADD COLUMN     "name_product" TEXT NOT NULL;
