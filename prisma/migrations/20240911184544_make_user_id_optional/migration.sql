-- DropForeignKey
ALTER TABLE "GameMarketerApplication" DROP CONSTRAINT "GameMarketerApplication_userId_fkey";

-- AlterTable
ALTER TABLE "GameMarketerApplication" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "GameMarketerApplication" ADD CONSTRAINT "GameMarketerApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
