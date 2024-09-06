-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "tanggal" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UserID" INTEGER NOT NULL,
    "AkunID" INTEGER NOT NULL,
    "KategoriID" INTEGER NOT NULL
);
INSERT INTO "new_Bill" ("AkunID", "KategoriID", "UserID", "id", "nama", "tanggal") SELECT "AkunID", "KategoriID", "UserID", "id", "nama", "tanggal" FROM "Bill";
DROP TABLE "Bill";
ALTER TABLE "new_Bill" RENAME TO "Bill";
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "harga" REAL NOT NULL,
    "BillID" INTEGER NOT NULL,
    "jumlah_item" INTEGER NOT NULL,
    "jumlah_harga" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_Item" ("BillID", "harga", "id", "jumlah_harga", "jumlah_item", "nama") SELECT "BillID", "harga", "id", "jumlah_harga", "jumlah_item", "nama" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE TABLE "new_Total" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total_harga" REAL NOT NULL,
    "discount" REAL NOT NULL DEFAULT 0,
    "total_harga_final" REAL NOT NULL DEFAULT 0,
    "BillID" INTEGER NOT NULL
);
INSERT INTO "new_Total" ("BillID", "discount", "id", "total_harga", "total_harga_final") SELECT "BillID", "discount", "id", "total_harga", "total_harga_final" FROM "Total";
DROP TABLE "Total";
ALTER TABLE "new_Total" RENAME TO "Total";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
