-- CreateTable
CREATE TABLE "cases" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "preview_bg" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "url" TEXT,
    "tasks" TEXT[],
    "popups" TEXT[],
    "interesting" TEXT[],

    CONSTRAINT "cases_pkey" PRIMARY KEY ("id")
);
