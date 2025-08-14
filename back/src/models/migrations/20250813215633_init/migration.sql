-- CreateEnum
CREATE TYPE "public"."DeliveryOptions" AS ENUM ('Standard', 'Express', 'Overnight');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "gender" TEXT,
    "cellphone" TEXT,
    "birthDate" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Announce" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "image" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "idCategory" INTEGER NOT NULL,

    CONSTRAINT "Announce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Cart" (
    "id" SERIAL NOT NULL,
    "totalValor" DECIMAL(65,30) NOT NULL,
    "productQuantity" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "announceId" INTEGER,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Rates" (
    "id" SERIAL NOT NULL,
    "rate" DECIMAL(65,30) NOT NULL,
    "idUser" INTEGER NOT NULL,
    "announceId" INTEGER NOT NULL,

    CONSTRAINT "Rates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Favorites" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "announceId" INTEGER,

    CONSTRAINT "Favorites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "sexModel" TEXT,
    "sizeId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Size" (
    "id" SERIAL NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Orders" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3),
    "cartId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "personalInfoId" INTEGER NOT NULL,
    "addressId" INTEGER NOT NULL,
    "deliveryMethodId" INTEGER NOT NULL,
    "paymentId" INTEGER NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PersonalInfo" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cellphone" TEXT NOT NULL,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Address" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "complement" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DeliveryMethod" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "estimatedTime" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "ordersId" INTEGER NOT NULL,

    CONSTRAINT "DeliveryMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Payment" (
    "id" SERIAL NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "personName" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "public"."Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Favorites_userId_announceId_key" ON "public"."Favorites"("userId", "announceId");

-- CreateIndex
CREATE UNIQUE INDEX "Size_size_key" ON "public"."Size"("size");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_personalInfoId_key" ON "public"."Orders"("personalInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_addressId_key" ON "public"."Orders"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_deliveryMethodId_key" ON "public"."Orders"("deliveryMethodId");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_paymentId_key" ON "public"."Orders"("paymentId");

-- AddForeignKey
ALTER TABLE "public"."Announce" ADD CONSTRAINT "Announce_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Announce" ADD CONSTRAINT "Announce_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "public"."Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Cart" ADD CONSTRAINT "Cart_announceId_fkey" FOREIGN KEY ("announceId") REFERENCES "public"."Announce"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rates" ADD CONSTRAINT "Rates_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rates" ADD CONSTRAINT "Rates_announceId_fkey" FOREIGN KEY ("announceId") REFERENCES "public"."Announce"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favorites" ADD CONSTRAINT "Favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favorites" ADD CONSTRAINT "Favorites_announceId_fkey" FOREIGN KEY ("announceId") REFERENCES "public"."Announce"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "public"."Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Orders" ADD CONSTRAINT "Orders_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "public"."Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Orders" ADD CONSTRAINT "Orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Orders" ADD CONSTRAINT "Orders_personalInfoId_fkey" FOREIGN KEY ("personalInfoId") REFERENCES "public"."PersonalInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Orders" ADD CONSTRAINT "Orders_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Orders" ADD CONSTRAINT "Orders_deliveryMethodId_fkey" FOREIGN KEY ("deliveryMethodId") REFERENCES "public"."DeliveryMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Orders" ADD CONSTRAINT "Orders_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "public"."Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
