-- CreateTable
CREATE TABLE "GeneralStats" (
    "id" SERIAL NOT NULL,
    "player1" TEXT NOT NULL,
    "player2" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "winner" TEXT NOT NULL,

    CONSTRAINT "GeneralStats_pkey" PRIMARY KEY ("id")
);
