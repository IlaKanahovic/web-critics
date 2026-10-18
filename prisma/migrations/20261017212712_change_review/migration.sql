/*
  Warnings:

  - You are about to drop the column `categoty` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the column `nameCompany` on the `reviews` table. All the data in the column will be lost.
  - Added the required column `category` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_company` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reviews" DROP COLUMN "categoty",
DROP COLUMN "nameCompany",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "name_company" TEXT NOT NULL;
