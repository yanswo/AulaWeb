/*
  Warnings:

  - You are about to drop the column `nome` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `usuarios` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "usuarios_slug_key";

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "nome",
DROP COLUMN "slug",
ALTER COLUMN "login" SET DATA TYPE TEXT;
