-- -------------------------------------------------------------
-- TablePlus 4.5.0(396)
--
-- https://tableplus.com/
--
-- Database: postgres
-- Generation Time: 2022-01-07 16:01:34.6820
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."analysis";
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
    PRIMARY KEY ("analystEmail","observationId")
);

DROP TABLE IF EXISTS "public"."observation";
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

DROP TABLE IF EXISTS "public"."observation_observers_observer";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."observation_observers_observer" (
    "observationId" int4 NOT NULL,
    "observerId" int4 NOT NULL,
    PRIMARY KEY ("observationId","observerId")
);

DROP TABLE IF EXISTS "public"."observer";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS observer_id_seq;

-- Table Definition
CREATE TABLE "public"."observer" (
    "id" int4 NOT NULL DEFAULT nextval('observer_id_seq'::regclass),
    "lastName" varchar,
    "firstName" varchar,
    "nick" varchar,
    "email" varchar,
    "phoneNumber" varchar,
    "photoUrl" varchar,
    "description" varchar NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."user";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

DROP TYPE IF EXISTS "public"."user_role_enum";
CREATE TYPE "public"."user_role_enum" AS ENUM ('3', '2', '1', '0');
DROP TYPE IF EXISTS "public"."user_permission_enum";
CREATE TYPE "public"."user_permission_enum" AS ENUM ('3', '2', '1', '0');
DROP TYPE IF EXISTS "public"."user_registrationstatus_enum";
CREATE TYPE "public"."user_registrationstatus_enum" AS ENUM ('1', '0');

-- Table Definition
CREATE TABLE "public"."user" (
    "email" varchar NOT NULL,
    "firstName" varchar NOT NULL,
    "lastName" varchar NOT NULL,
    "registrationDate" varchar NOT NULL,
    "phoneNumber" int4 NOT NULL,
    "role" "public"."user_role_enum" NOT NULL DEFAULT '3'::user_role_enum,
    "permission" "public"."user_permission_enum" NOT NULL DEFAULT '0'::user_permission_enum,
    "username" varchar NOT NULL,
    "password" varchar NOT NULL,
    "registrationStatus" "public"."user_registrationstatus_enum" NOT NULL DEFAULT '0'::user_registrationstatus_enum,
    PRIMARY KEY ("email")
);

INSERT INTO "public"."analysis" ("description", "conclusions", "classification", "interpretation", "analystEmail", "observationId") VALUES
('Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', '1', '4', 'analyst1@bluebook.com', 11),
('Suspendisse ornare consequat lectus.', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.', '2', '1', 'analyst1@bluebook.com', 13),
('In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'Duis consequat dui nec nisi volutpat eleifend.', '2', '4', 'analyst1@bluebook.com', 14),
('Nam nulla.', 'Cras in purus eu magna vulputate luctus.', '2', '5', 'analyst1@bluebook.com', 15),
('Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'Morbi quis tortor id nulla ultrices aliquet.', '1', '2', 'analyst2@bluebook.com', 13),
('Pellentesque eget nunc.', 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.', '2', '4', 'analyst2@bluebook.com', 14),
('Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.', '1', '3', 'analyst2@bluebook.com', 15);

INSERT INTO "public"."observation" ("id", "observationDate", "coordinates", "description", "observationMaterialDirectory", "permission") VALUES
(11, '2021-07-05', '09-63', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.', 'aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio', '2'),
(12, '2021-08-10', '73-29', 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 'lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at', '3'),
(13, '2021-05-11', '66-23', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.', 'adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus', '0'),
(14, '2021-12-22', '28-37', 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet', '0'),
(15, '2021-04-18', '73-14', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.', 'in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id', '1');

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

INSERT INTO "public"."observer" ("id", "lastName", "firstName", "nick", "email", "phoneNumber", "photoUrl", "description") VALUES
(13, 'Varden', 'Jaquenetta', 'jvarden0', 'jvarden0@geocities.com', '421-780-9106', 'http://dummyimage.com/141x100.png/dddddd/000000', 'Duis bibendum.'),
(14, 'Lloyd-Williams', 'Jeanelle', 'jlloydwilliams1', 'jlloydwilliams1@ft.com', '520-720-8140', 'http://dummyimage.com/147x100.png/ff4444/ffffff', 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.'),
(15, 'Thorndycraft', 'Bron', 'bthorndycraft2', 'bthorndycraft2@infoseek.co.jp', '438-744-9463', 'http://dummyimage.com/108x100.png/ff4444/ffffff', 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.'),
(16, 'Izaac', 'Anstice', 'aizaacj', 'aizaacj@arstechnica.com', '604-774-2840', 'http://dummyimage.com/144x100.png/cc0000/ffffff', 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.'),
(17, 'Atlay', 'Lela', 'latlay6', 'latlay6@tinypic.com', '972-585-5916', 'http://dummyimage.com/152x100.png/5fa2dd/ffffff', 'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.'),
(18, 'Ruffell', 'Carleen', 'cruffell4', 'cruffell4@google.co.jp', '748-671-3708', 'http://dummyimage.com/230x100.png/ff4444/ffffff', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.'),
(19, 'Colleford', 'Rube', 'rcollefordc', 'rcollefordc@drupal.org', '827-991-9472', 'http://dummyimage.com/134x100.png/5fa2dd/ffffff', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.'),
(20, 'Spellacey', 'Jacynth', 'jspellaceyt', 'jspellaceyt@jalbum.net', '154-141-1987', 'http://dummyimage.com/127x100.png/dddddd/000000', 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.'),
(21, 'Nalder', 'Clywd', 'cnalderv', 'cnalderv@people.com.cn', '447-174-3631', 'http://dummyimage.com/171x100.png/dddddd/000000', 'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.'),
(22, 'Babst', 'Dorothy', 'dbabst25', 'dbabst25@prnewswire.com', '854-937-4359', 'http://dummyimage.com/213x100.png/5fa2dd/ffffff', 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.'),
(23, 'Nolan', 'Netti', 'nnolan2b', 'nnolan2b@boston.com', '122-445-6907', 'http://dummyimage.com/131x100.png/cc0000/ffffff', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.'),
(24, 'Mingaye', 'Fleurette', 'fmingaye2q', 'fmingaye2q@smh.com.au', '608-517-4724', 'http://dummyimage.com/113x100.png/dddddd/000000', 'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.'),
(25, 'Clawson', 'Dru', 'dclawson2r', 'dclawson2r@biblegateway.com', '707-494-1703', 'http://dummyimage.com/248x100.png/ff4444/ffffff', 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.'),
(26, 'Selly', 'Lovell', 'lselly27', 'lselly27@wikimedia.org', '707-964-4541', 'http://dummyimage.com/178x100.png/ff4444/ffffff', 'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.');

INSERT INTO "public"."user" ("email", "firstName", "lastName", "registrationDate", "phoneNumber", "role", "permission", "username", "password", "registrationStatus") VALUES
('admindata@bluebook.com', 'Admin', 'Admin', '1640786349639', 123123123, '1', '3', 'admindata', '$2b$10$/EJLjFMdtB2F6BPpuRYePemQx4LWherHSDOYZIspl.mSZ7zl8pjXm', '1'),
('adminsystem@bluebook.com', 'Admin', 'Admin', '1640786333139', 123123123, '0', '3', 'adminsystem', '$2b$10$/EJLjFMdtB2F6BPpuRYePemQx4LWherHSDOYZIspl.mSZ7zl8pjXm', '1'),
('analyst1@bluebook.com', 'Analyst1', 'Analyst', '1640786380911', 123123123, '2', '3', 'analyst1', '$2b$10$/EJLjFMdtB2F6BPpuRYePemQx4LWherHSDOYZIspl.mSZ7zl8pjXm', '1'),
('analyst2@bluebook.com', 'Analyst2', 'Analyst', '1640786395393', 123123123, '2', '2', 'analyst2', '$2b$10$/EJLjFMdtB2F6BPpuRYePemQx4LWherHSDOYZIspl.mSZ7zl8pjXm', '1'),
('m.zajonc@selleo.com', 'Reader', 'Reader', '1641290842199', 123123123, '3', '1', 'selleo', '$2b$10$/EJLjFMdtB2F6BPpuRYePemQx4LWherHSDOYZIspl.mSZ7zl8pjXm', '1'),
('reader@bluebook.com', 'Reader', 'Reader', '1640786431742', 123123123, '3', '1', 'reader', '$2b$10$/EJLjFMdtB2F6BPpuRYePemQx4LWherHSDOYZIspl.mSZ7zl8pjXm', '1'),
('test@test.pl', 'Test', 'Test', '1641563932354', 123123123, '3', '1', 'test', '$2b$10$Shu4O9LAfiiJR5S5NKwS9O6sFe512/KNv5TrG2ZDt//L/WA8.N5gu', '0');

ALTER TABLE "public"."analysis" ADD FOREIGN KEY ("observationId") REFERENCES "public"."observation"("id");
ALTER TABLE "public"."analysis" ADD FOREIGN KEY ("analystEmail") REFERENCES "public"."user"("email");
ALTER TABLE "public"."observation_observers_observer" ADD FOREIGN KEY ("observationId") REFERENCES "public"."observation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."observation_observers_observer" ADD FOREIGN KEY ("observerId") REFERENCES "public"."observer"("id");
