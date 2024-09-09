/*
  Warnings:

  - You are about to drop the `Akun` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Bill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Kategori` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Total` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Akun";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Bill";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Item";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Kategori";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Total";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "akun" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "saldo" REAL NOT NULL DEFAULT 0,
    "UserID" INTEGER NOT NULL,
    CONSTRAINT "akun_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "bill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "tanggal" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "AkunID" INTEGER NOT NULL,
    "KategoriID" INTEGER NOT NULL,
    CONSTRAINT "bill_AkunID_fkey" FOREIGN KEY ("AkunID") REFERENCES "akun" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "bill_KategoriID_fkey" FOREIGN KEY ("KategoriID") REFERENCES "kategori" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "kategori" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "harga" REAL NOT NULL,
    "jumlah_item" INTEGER NOT NULL,
    "jumlah_harga" REAL NOT NULL DEFAULT 0,
    "BillID" INTEGER NOT NULL,
    CONSTRAINT "item_BillID_fkey" FOREIGN KEY ("BillID") REFERENCES "bill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "total" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total_harga" REAL NOT NULL,
    "discount" REAL NOT NULL DEFAULT 0,
    "total_harga_final" REAL NOT NULL DEFAULT 0,
    "BillID" INTEGER NOT NULL,
    CONSTRAINT "total_BillID_fkey" FOREIGN KEY ("BillID") REFERENCES "bill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "total_BillID_key" ON "total"("BillID");
