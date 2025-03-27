-- CreateTable
CREATE TABLE "Permissao" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(20) NOT NULL,

    CONSTRAINT "Permissao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Permissao_nome_key" ON "Permissao"("nome");
