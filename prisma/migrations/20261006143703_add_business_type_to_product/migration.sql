/*
  Warnings:

  - Added the required column `business_type` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "business_type" TEXT NOT NULL;
