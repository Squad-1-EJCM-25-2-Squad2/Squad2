/*
  Warnings:

  - The primary key for the `Size` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `size` on the `Size` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Product" DROP CONSTRAINT "Product_sizeId_fkey";

-- DropIndex
DROP INDEX "public"."Size_size_key";

-- AlterTable
ALTER TABLE "public"."Product" ALTER COLUMN "sizeId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."Size" DROP CONSTRAINT "Size_pkey",
DROP COLUMN "size",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Size_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Size_id_seq";

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "public"."Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
