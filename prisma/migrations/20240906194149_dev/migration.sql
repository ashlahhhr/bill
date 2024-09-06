-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Akun" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "saldo" REAL NOT NULL DEFAULT 0,
    "UserID" INTEGER NOT NULL,
    CONSTRAINT "Akun_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Akun" ("UserID", "id", "nama", "saldo") SELECT "UserID", "id", "nama", "saldo" FROM "Akun";
DROP TABLE "Akun";
ALTER TABLE "new_Akun" RENAME TO "Akun";
CREATE TABLE "new_Bill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "tanggal" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UserID" INTEGER NOT NULL,
    "AkunID" INTEGER NOT NULL,
    "KategoriID" INTEGER NOT NULL,
    CONSTRAINT "Bill_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bill_AkunID_fkey" FOREIGN KEY ("AkunID") REFERENCES "Akun" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bill_KategoriID_fkey" FOREIGN KEY ("KategoriID") REFERENCES "Kategori" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bill" ("AkunID", "KategoriID", "UserID", "id", "nama", "tanggal") SELECT "AkunID", "KategoriID", "UserID", "id", "nama", "tanggal" FROM "Bill";
DROP TABLE "Bill";
ALTER TABLE "new_Bill" RENAME TO "Bill";
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "harga" REAL NOT NULL,
    "jumlah_item" INTEGER NOT NULL,
    "jumlah_harga" REAL NOT NULL DEFAULT 0,
    "BillID" INTEGER NOT NULL,
    CONSTRAINT "Item_BillID_fkey" FOREIGN KEY ("BillID") REFERENCES "Bill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("BillID", "harga", "id", "jumlah_harga", "jumlah_item", "nama") SELECT "BillID", "harga", "id", "jumlah_harga", "jumlah_item", "nama" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE TABLE "new_Total" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total_harga" REAL NOT NULL,
    "discount" REAL NOT NULL DEFAULT 0,
    "total_harga_final" REAL NOT NULL DEFAULT 0,
    "BillID" INTEGER NOT NULL,
    CONSTRAINT "Total_BillID_fkey" FOREIGN KEY ("BillID") REFERENCES "Bill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Total" ("BillID", "discount", "id", "total_harga", "total_harga_final") SELECT "BillID", "discount", "id", "total_harga", "total_harga_final" FROM "Total";
DROP TABLE "Total";
ALTER TABLE "new_Total" RENAME TO "Total";
CREATE UNIQUE INDEX "Total_BillID_key" ON "Total"("BillID");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
