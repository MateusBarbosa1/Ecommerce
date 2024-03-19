/*
  Warnings:

  - You are about to drop the column `name` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Produtos` table. All the data in the column will be lost.
  - Added the required column `image` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxa` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produtos" DROP COLUMN "name",
DROP COLUMN "price",
DROP COLUMN "type",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "taxa" TEXT NOT NULL,
ADD COLUMN     "tipo" TEXT NOT NULL;
