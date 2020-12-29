-- CreateTable
CREATE TABLE "Task" (
"id" SERIAL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);
