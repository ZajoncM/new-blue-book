-- -------------------------------------------------------------
-- TablePlus 4.5.0(396)
--
-- https://tableplus.com/
--
-- Database: postgres
-- Generation Time: 2021-12-30 12:02:19.2750
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS observation_id_seq;
DROP TYPE IF EXISTS "public"."observation_permission_enum";
CREATE TYPE "public"."observation_permission_enum" AS ENUM ('3', '2', '1', '0');

-- Table Definition
CREATE TABLE "public"."observation" (
    "id" int4 NOT NULL DEFAULT nextval('observation_id_seq'::regclass),
    "observationDate" varchar NOT NULL,
    "coordinates" varchar NOT NULL,
    "description" varchar NOT NULL,
    "observationMaterialDirectory" varchar NOT NULL,
    "permission" "public"."observation_permission_enum" NOT NULL DEFAULT '0'::observation_permission_enum,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."observation" ("id", "observationDate", "coordinates", "description", "observationMaterialDirectory", "permission") VALUES
(11, '2021-07-05', '09-63', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.', 'aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio', '2'),
(12, '2021-08-10', '73-29', 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 'lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at', '3'),
(13, '2021-05-11', '66-23', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.', 'adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus', '0'),
(14, '2021-12-22', '28-37', 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet', '0'),
(15, '2021-04-18', '73-14', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.', 'in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id', '1');
