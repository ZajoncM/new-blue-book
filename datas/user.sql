-- -------------------------------------------------------------
-- TablePlus 4.5.0(396)
--
-- https://tableplus.com/
--
-- Database: postgres
-- Generation Time: 2021-12-29 15:03:54.6800
-- -------------------------------------------------------------


INSERT INTO "public"."user" ("email", "firstName", "lastName", "registrationDate", "phoneNumber", "role", "permission", "username", "password", "registrationStatus") VALUES
('admindata@bluebook.com', 'Admin', 'Admin', '1640786349639', 123123123, '1', '3', 'admindata', '$2b$10$/EJLjFMdtB2F6BPpuRYePemQx4LWherHSDOYZIspl.mSZ7zl8pjXm', '0'),
('adminsystem@bluebook.com', 'Admin', 'Admin', '1640786333139', 123123123, '0', '3', 'adminsystem', '$2b$10$/EJLjFMdtB2F6BPpuRYePemQx4LWherHSDOYZIspl.mSZ7zl8pjXm', '1'),
('analyst1@bluebook.com', 'Analyst1', 'Analyst', '1640786380911', 123123123, '2', '3', 'analyst1', '$2b$10$/EJLjFMdtB2F6BPpuRYePemQx4LWherHSDOYZIspl.mSZ7zl8pjXm', '0'),
('analyst2@bluebook.com', 'Analyst2', 'Analyst', '1640786395393', 123123123, '2', '2', 'analyst2', '$2b$10$/EJLjFMdtB2F6BPpuRYePemQx4LWherHSDOYZIspl.mSZ7zl8pjXm', '0'),
('reader@bluebook.com', 'Reader', 'Reader', '1640786431742', 123123123, '3', '1', 'reader', '$2b$10$/EJLjFMdtB2F6BPpuRYePemQx4LWherHSDOYZIspl.mSZ7zl8pjXm', '0');
