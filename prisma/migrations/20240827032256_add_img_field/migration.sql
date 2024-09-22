/*
  Warnings:

  - Added the required column `img` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `img` VARCHAR(191) NOT NULL;
