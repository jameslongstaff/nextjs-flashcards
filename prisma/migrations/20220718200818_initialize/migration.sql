-- CreateTable
CREATE TABLE "Pack" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "packId" TEXT NOT NULL,
    CONSTRAINT "Card_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
