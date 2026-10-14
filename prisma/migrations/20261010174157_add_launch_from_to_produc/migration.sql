/*
  Warnings:

  - You are about to drop the column `launch_from` on the `products` table. All the data in the column will be lost.
  - Added the required column `launch_from_mounth` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `launch_from_single` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "launch_from",
ADD COLUMN     "launch_from_mounth" TEXT NOT NULL,
ADD COLUMN     "launch_from_single" TEXT NOT NULL;
