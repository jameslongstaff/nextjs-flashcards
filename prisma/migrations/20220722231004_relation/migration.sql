/*
  Warnings:

  - You are about to drop the `CardTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CardTags";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_CardTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CardTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Card" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CardTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CardTags_AB_unique" ON "_CardTags"("A", "B");

-- CreateIndex
CREATE INDEX "_CardTags_B_index" ON "_CardTags"("B");
