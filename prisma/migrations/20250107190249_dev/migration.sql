-- AlterTable
ALTER TABLE "User" ALTER COLUMN "dateCreated" SET DEFAULT NOW(),
ALTER COLUMN "image" DROP NOT NULL;
