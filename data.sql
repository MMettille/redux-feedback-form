-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample Data
INSERT INTO "feedback" ("feeling", "understanding", "support", "date")
VALUES 
(4, 4, 5, '2021-06-11'),
(4, 4, 5, '2021-06-10'),
(4, 2, 5, '2021-06-9'),
(2, 4, 5, '2021-06-7'),
(1, 3, 5, '2021-06-4'),
(4, 5, 5, '2021-06-2'),
(3, 3, 5, '2021-05-28'),
(3, 2, 5, '2021-05-26'),
(5, 4, 5, '2021-05-25'),
(2, 5, 5, '2021-05-24'),
(5, 5, 5, '2021-05-21');
