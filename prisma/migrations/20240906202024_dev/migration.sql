/*
  Warnings:

  - You are about to drop the column `UserID` on the `Bill` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "tanggal" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "AkunID" INTEGER NOT NULL,
    "KategoriID" INTEGER NOT NULL,
    CONSTRAINT "Bill_AkunID_fkey" FOREIGN KEY ("AkunID") REFERENCES "Akun" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bill_KategoriID_fkey" FOREIGN KEY ("KategoriID") REFERENCES "Kategori" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bill" ("AkunID", "KategoriID", "id", "nama", "tanggal") SELECT "AkunID", "KategoriID", "id", "nama", "tanggal" FROM "Bill";
DROP TABLE "Bill";
ALTER TABLE "new_Bill" RENAME TO "Bill";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
