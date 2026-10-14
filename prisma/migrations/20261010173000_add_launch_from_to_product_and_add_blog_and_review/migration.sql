/*
  Warnings:

  - Added the required column `launch_from` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cases" ADD COLUMN     "preview_project" TEXT[];

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "launch_from" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "articles" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "preview_bg" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "nameAuthor" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "reading_time" TEXT NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameCompany" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "estimation" TEXT NOT NULL,
    "categoty" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);
