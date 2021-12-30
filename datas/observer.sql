-- -------------------------------------------------------------
-- TablePlus 4.5.0(396)
--
-- https://tableplus.com/
--
-- Database: postgres
-- Generation Time: 2021-12-30 12:01:49.0560
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS observer_id_seq;

-- Table Definition
CREATE TABLE "public"."observer" (
    "id" int4 NOT NULL DEFAULT nextval('observer_id_seq'::regclass),
    "nick" varchar,
    "email" varchar,
    "photoUrl" varchar,
    "description" varchar NOT NULL,
    "lastName" varchar,
    "firstName" varchar,
    "phoneNumber" varchar,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."observer" ("id", "nick", "email", "photoUrl", "description", "lastName", "firstName", "phoneNumber") VALUES
(13, 'jvarden0', 'jvarden0@geocities.com', 'http://dummyimage.com/141x100.png/dddddd/000000', 'Duis bibendum.', 'Varden', 'Jaquenetta', '421-780-9106'),
(14, 'jlloydwilliams1', 'jlloydwilliams1@ft.com', 'http://dummyimage.com/147x100.png/ff4444/ffffff', 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.', 'Lloyd-Williams', 'Jeanelle', '520-720-8140'),
(15, 'bthorndycraft2', 'bthorndycraft2@infoseek.co.jp', 'http://dummyimage.com/108x100.png/ff4444/ffffff', 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.', 'Thorndycraft', 'Bron', '438-744-9463'),
(16, 'aizaacj', 'aizaacj@arstechnica.com', 'http://dummyimage.com/144x100.png/cc0000/ffffff', 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'Izaac', 'Anstice', '604-774-2840'),
(17, 'latlay6', 'latlay6@tinypic.com', 'http://dummyimage.com/152x100.png/5fa2dd/ffffff', 'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.', 'Atlay', 'Lela', '972-585-5916'),
(18, 'cruffell4', 'cruffell4@google.co.jp', 'http://dummyimage.com/230x100.png/ff4444/ffffff', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.', 'Ruffell', 'Carleen', '748-671-3708'),
(19, 'rcollefordc', 'rcollefordc@drupal.org', 'http://dummyimage.com/134x100.png/5fa2dd/ffffff', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 'Colleford', 'Rube', '827-991-9472'),
(20, 'jspellaceyt', 'jspellaceyt@jalbum.net', 'http://dummyimage.com/127x100.png/dddddd/000000', 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.', 'Spellacey', 'Jacynth', '154-141-1987'),
(21, 'cnalderv', 'cnalderv@people.com.cn', 'http://dummyimage.com/171x100.png/dddddd/000000', 'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.', 'Nalder', 'Clywd', '447-174-3631'),
(22, 'dbabst25', 'dbabst25@prnewswire.com', 'http://dummyimage.com/213x100.png/5fa2dd/ffffff', 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Babst', 'Dorothy', '854-937-4359'),
(23, 'nnolan2b', 'nnolan2b@boston.com', 'http://dummyimage.com/131x100.png/cc0000/ffffff', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'Nolan', 'Netti', '122-445-6907'),
(24, 'fmingaye2q', 'fmingaye2q@smh.com.au', 'http://dummyimage.com/113x100.png/dddddd/000000', 'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'Mingaye', 'Fleurette', '608-517-4724'),
(25, 'dclawson2r', 'dclawson2r@biblegateway.com', 'http://dummyimage.com/248x100.png/ff4444/ffffff', 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.', 'Clawson', 'Dru', '707-494-1703'),
(26, 'lselly27', 'lselly27@wikimedia.org', 'http://dummyimage.com/178x100.png/ff4444/ffffff', 'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.', 'Selly', 'Lovell', '707-964-4541');
