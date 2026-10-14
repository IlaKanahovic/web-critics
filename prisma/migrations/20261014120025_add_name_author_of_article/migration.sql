/*
  Warnings:

  - You are about to drop the column `nameAuthor` on the `articles` table. All the data in the column will be lost.
  - Added the required column `name_author` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "articles" DROP COLUMN "nameAuthor",
ADD COLUMN     "name_author" TEXT NOT NULL;
