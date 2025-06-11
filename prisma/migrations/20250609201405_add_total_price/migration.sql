-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "totalPrice" DECIMAL(12,2) NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Income" ADD COLUMN     "totalPrice" DECIMAL(12,2) NOT NULL DEFAULT 0;
