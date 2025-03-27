-- DropForeignKey
ALTER TABLE "permissoes" DROP CONSTRAINT "permissoes_usuarioId_fkey";

-- AlterTable
ALTER TABLE "permissoes" ALTER COLUMN "usuarioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "permissoes" ADD CONSTRAINT "permissoes_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
