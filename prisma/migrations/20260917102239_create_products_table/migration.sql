-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT[],
    "single_price" TEXT NOT NULL,
    "mounth_price" TEXT NOT NULL,
    "preview_bg" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "demp_url" TEXT NOT NULL,
    "category_desc" TEXT NOT NULL,
    "estimation" TEXT NOT NULL,
    "positive" TEXT[],
    "included" TEXT[],
    "possible_settings" TEXT[],
    "additionally" TEXT[],
    "description_purpose" TEXT NOT NULL,
    "suitable" TEXT[],
    "not_suitable" TEXT[],
    "how_it_works" TEXT NOT NULL,
    "specifications" TEXT[],
    "requirements" TEXT NOT NULL,
    "values_requirements" TEXT[],

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_title_key" ON "products"("title");
