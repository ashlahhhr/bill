-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Akun" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "saldo" REAL NOT NULL DEFAULT 0,
    "UserID" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Bill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "tanggal" DATETIME NOT NULL,
    "UserID" INTEGER NOT NULL,
    "AkunID" INTEGER NOT NULL,
    "KategoriID" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Kategori" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "harga" REAL NOT NULL,
    "BillID" INTEGER NOT NULL,
    "jumlah_item" INTEGER NOT NULL,
    "jumlah_harga" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Total" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total_harga" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "total_harga_final" REAL NOT NULL,
    "BillID" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
