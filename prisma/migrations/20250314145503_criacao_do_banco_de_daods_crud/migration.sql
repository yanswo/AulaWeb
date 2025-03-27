-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "login" VARCHAR(100) NOT NULL,
    "senha" VARCHAR(8) NOT NULL,
    "slug" TEXT,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_login_key" ON "usuarios"("login");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_slug_key" ON "usuarios"("slug");
