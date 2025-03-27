/*
  Warnings:

  - Added the required column `usuarioId` to the `permissoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "permissoes" ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "permissoes" ADD CONSTRAINT "permissoes_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
