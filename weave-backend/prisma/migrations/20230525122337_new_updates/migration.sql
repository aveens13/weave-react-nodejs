-- AlterTable
ALTER TABLE "File" ADD COLUMN     "fileTag" TEXT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "projectSupervisor" TEXT,
ADD COLUMN     "upcomingmeeting" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "deadline" SET DEFAULT NOW() + interval '7 day';

-- CreateTable
CREATE TABLE "_ProjectToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToUser_AB_unique" ON "_ProjectToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToUser_B_index" ON "_ProjectToUser"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToUser" ADD CONSTRAINT "_ProjectToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("projectId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToUser" ADD CONSTRAINT "_ProjectToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
