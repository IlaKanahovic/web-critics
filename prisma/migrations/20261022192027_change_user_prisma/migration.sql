/*
  Warnings:

  - You are about to drop the column `advertisement` on the `catalog_purchases` table. All the data in the column will be lost.
  - You are about to drop the column `advertisement` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_applications` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - Added the required column `name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "catalog_purchases" DROP COLUMN "advertisement";

-- AlterTable
ALTER TABLE "leads" DROP COLUMN "advertisement",
DROP COLUMN "quantity_applications";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "username",
ADD COLUMN     "advertisingConsent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "advertisingConsentedAt" TIMESTAMP(3),
ADD COLUMN     "consentIp" TEXT,
ADD COLUMN     "consentVersion" TEXT,
ADD COLUMN     "consentedAt" TIMESTAMP(3),
ADD COLUMN     "name" TEXT NOT NULL;
