/*
  Warnings:

  - You are about to drop the column `descriprion` on the `catalog_purchases` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `catalog_purchases` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `catalog_purchases` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `catalog_purchases` table. All the data in the column will be lost.
  - You are about to drop the column `descriprion` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `leads` table. All the data in the column will be lost.
  - Changed the type of `budget_from` on the `leads` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `budget_to` on the `leads` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `quantity_applications` on the `leads` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "catalog_purchases" DROP COLUMN "descriprion",
DROP COLUMN "email",
DROP COLUMN "phone",
DROP COLUMN "username",
ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "leads" DROP COLUMN "descriprion",
DROP COLUMN "email",
DROP COLUMN "phone",
DROP COLUMN "username",
ADD COLUMN     "description" TEXT,
DROP COLUMN "budget_from",
ADD COLUMN     "budget_from" INTEGER NOT NULL,
DROP COLUMN "budget_to",
ADD COLUMN     "budget_to" INTEGER NOT NULL,
DROP COLUMN "quantity_applications",
ADD COLUMN     "quantity_applications" INTEGER NOT NULL;
