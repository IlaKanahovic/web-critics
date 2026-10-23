/*
  Warnings:

  - Added the required column `updated_at` to the `catalog_purchases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `leads` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'WON', 'LOST');

-- AlterTable
ALTER TABLE "catalog_purchases" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "advertisement" SET DEFAULT false;

-- AlterTable
ALTER TABLE "leads" ADD COLUMN     "status" "LeadStatus" NOT NULL DEFAULT 'NEW',
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "advertisement" SET DEFAULT false;

-- CreateIndex
CREATE INDEX "catalog_purchases_owner_id_idx" ON "catalog_purchases"("owner_id");

-- CreateIndex
CREATE INDEX "leads_owner_id_idx" ON "leads"("owner_id");
