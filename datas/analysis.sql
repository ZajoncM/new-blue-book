-- -------------------------------------------------------------
-- TablePlus 4.5.0(396)
--
-- https://tableplus.com/
--
-- Database: postgres
-- Generation Time: 2021-12-30 12:22:15.7670
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

DROP TYPE IF EXISTS "public"."analysis_classification_enum";
CREATE TYPE "public"."analysis_classification_enum" AS ENUM ('2', '1', '0');
DROP TYPE IF EXISTS "public"."analysis_interpretation_enum";
CREATE TYPE "public"."analysis_interpretation_enum" AS ENUM ('5', '4', '3', '2', '1', '0');

-- Table Definition
CREATE TABLE "public"."analysis" (
    "description" varchar NOT NULL,
    "conclusions" varchar NOT NULL,
    "classification" "public"."analysis_classification_enum" NOT NULL DEFAULT '2'::analysis_classification_enum,
    "interpretation" "public"."analysis_interpretation_enum" NOT NULL DEFAULT '5'::analysis_interpretation_enum,
    "analystEmail" varchar NOT NULL,
    "observationId" int4 NOT NULL,
    CONSTRAINT "FK_db8f5ea11f88ce4a7f178e863db" FOREIGN KEY ("observationId") REFERENCES "public"."observation"("id"),
    CONSTRAINT "FK_d2b938801e7d015caeee7032fb5" FOREIGN KEY ("analystEmail") REFERENCES "public"."user"("email"),
    PRIMARY KEY ("analystEmail","observationId")
);

INSERT INTO "public"."analysis" ("description", "conclusions", "classification", "interpretation", "analystEmail", "observationId") VALUES
('Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', '1', '4', 'analyst1@bluebook.com', 11),
('Suspendisse ornare consequat lectus.', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.', '2', '1', 'analyst1@bluebook.com', 13),
('In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'Duis consequat dui nec nisi volutpat eleifend.', '2', '4', 'analyst1@bluebook.com', 14),
('Nam nulla.', 'Cras in purus eu magna vulputate luctus.', '2', '5', 'analyst1@bluebook.com', 15),
('Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'Morbi quis tortor id nulla ultrices aliquet.', '1', '2', 'analyst2@bluebook.com', 13),
('Pellentesque eget nunc.', 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.', '2', '4', 'analyst2@bluebook.com', 14),
('Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.', '1', '3', 'analyst2@bluebook.com', 15);
