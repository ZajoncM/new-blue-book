-- -------------------------------------------------------------
-- TablePlus 4.5.0(396)
--
-- https://tableplus.com/
--
-- Database: postgres
-- Generation Time: 2021-12-30 12:02:07.6780
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."observation_observers_observer" (
    "observationId" int4 NOT NULL,
    "observerId" int4 NOT NULL,
    CONSTRAINT "FK_2cc05e54c02e9bfbe8a9d0bb18b" FOREIGN KEY ("observationId") REFERENCES "public"."observation"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "FK_80cfa3eedfe8654caa104c37952" FOREIGN KEY ("observerId") REFERENCES "public"."observer"("id"),
    PRIMARY KEY ("observationId","observerId")
);

INSERT INTO "public"."observation_observers_observer" ("observationId", "observerId") VALUES
(11, 13),
(11, 14),
(11, 15),
(12, 16),
(12, 17),
(12, 18),
(12, 19),
(13, 20),
(13, 21),
(14, 22),
(15, 23),
(15, 24),
(15, 25),
(15, 26);
