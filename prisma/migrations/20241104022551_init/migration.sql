/*
  Warnings:

  - Added the required column `author` to the `doencas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doencas" ADD COLUMN     "author" TEXT NOT NULL;
