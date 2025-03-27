/*
  Warnings:

  - You are about to drop the `Permissao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Permissao";

-- CreateTable
CREATE TABLE "permissoes" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(20) NOT NULL,

    CONSTRAINT "permissoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "permissoes_nome_key" ON "permissoes"("nome");
