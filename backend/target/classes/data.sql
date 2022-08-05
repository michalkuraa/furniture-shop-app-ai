INSERT INTO roles VALUES (1, 'ROLE_USER');
INSERT INTO roles VALUES (2, 'ROLE_ADMIN');

INSERT INTO users (id, email, name, password, surname, username, pesel, birthdate, city, postcode, street, street_number, local_number)
 VALUES (1, 'patrykgawron565@gmail.com', 'Patryk', '$2a$10$.m4qz87I7D42rU5exLMVfunscOYuR71nUqY9aVQbOGq7KiSqHO5M6', 'Gawron', 'patrykg', '97011376552', '1997-01-13', 'Warszawa', '01665', 'Kwiecista', 24, 31);
INSERT INTO users (id, email, name, password, surname, username, pesel, birthdate, city, postcode, street, street_number, local_number)
VALUES (2, 'marekd721@gmail.com', 'Marek', '$2a$10$.m4qz87I7D42rU5exLMVfunscOYuR71nUqY9aVQbOGq7KiSqHO5M6', 'Danieluk', 'admin', '99021576125', '1999-02-15', 'Warszawa', '03215', 'Jana Olbrachta', 11, 15);
INSERT INTO users (id, email, name, password, surname, username, pesel, birthdate, city, postcode, street, street_number, local_number)
VALUES (3, 'przemotracz1@gmail.com', 'Przemysław', '$2a$10$.m4qz87I7D42rU5exLMVfunscOYuR71nUqY9aVQbOGq7KiSqHO5M6', 'Tracz', 'przemo1', '93052974091', '1993-05-29', 'Warszawa', '01213', 'Okopowa', 24, 31);
INSERT INTO users (id, email, name, password, surname, username, pesel, birthdate, city, postcode, street, street_number, local_number)
VALUES (4, 'jarek123@gmail.com', 'Jarosław', '$2a$10$.m4qz87I7D42rU5exLMVfunscOYuR71nUqY9aVQbOGq7KiSqHO5M6', 'Mąka', 'jarek123', '90011172511', '1990-01-12', 'Kraków', '07223', 'Długa', 24, 31);

INSERT INTO users_roles (user_id, roles_id) values (1,1);
INSERT INTO users_roles (user_id, roles_id) values (2,1);
INSERT INTO users_roles (user_id, roles_id) values (2,2);
INSERT INTO users_roles (user_id, roles_id) values (3,1);
INSERT INTO users_roles (user_id, roles_id) values (4,1);

INSERT INTO brands (id, name) values (1, 'IKEA');
INSERT INTO brands (id, name) values (2, 'Huzzaro');
INSERT INTO brands (id, name) values (3, 'VOX');
INSERT INTO brands (id, name) values (4, 'German');
INSERT INTO brands (id, name) values (5, 'Edinos');


INSERT INTO categories (id, name) values (1, 'Fotele');
INSERT INTO categories (id, name) values (2, 'Biurka');
INSERT INTO categories (id, name) values (3, 'Szafy');

INSERT INTO pictures (id, path) values (1, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610473694/fotel_biurowy_1_g1h2x0.jpg');
INSERT INTO pictures (id, path) values (2, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610473693/fotel_biurowy_2_iouway.jpg');
INSERT INTO pictures (id, path) values (3, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610473693/fotel_biurowy_3_hakseu.jpg');
INSERT INTO pictures (id, path) values (4, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610474120/fotel_4_ogwodh.jpg');
INSERT INTO pictures (id, path) values (5, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610474120/fotel_5_v1ahp4.jpg');
INSERT INTO pictures (id, path) values (6, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610473693/biurko_1_oljgrf.jpg');
INSERT INTO pictures (id, path) values (7, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610473694/biurko_2_hxnica.jpg');
INSERT INTO pictures (id, path) values (8, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610473693/biurko_3_kmjhcb.jpg');
INSERT INTO pictures (id, path) values (9, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610474120/stol_4_sbmdyf.png');
INSERT INTO pictures (id, path) values (10, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610474120/stol_5_sk6m37.jpg');
INSERT INTO pictures (id, path) values (11, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610473694/szafa_1_wgqmtd.jpg');
INSERT INTO pictures (id, path) values (12, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610473694/szafa_2_rbejks.jpg');
INSERT INTO pictures (id, path) values (13, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610473693/szafa_3_isicip.jpg');
INSERT INTO pictures (id, path) values (14, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610474120/szafa_4_vf4gog.jpg');
INSERT INTO pictures (id, path) values (15, 'https://res.cloudinary.com/dwk3qnccb/image/upload/v1610474120/szafa_5_dqukcw.jpg');

INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (1, 'Patynne', 'Wysokiej jakości fotel.', 199.99, 30, 1, 1, 1);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (2, 'Reznor', 'Bardzo wygodny i dobrze wykonany fotel.', 299.99, 45, 2, 1, 2);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (3, 'Swamp', 'Fotel z dobrych materiałów.', 149.99, 50, 3, 1, 3);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (4, 'Cloverwing', 'Ergonomiczny fotel.', 399.99, 90, 4, 1, 4);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (5, 'Persephone', 'Fotel idealny do każdych pleców.', 410.00, 63, 5, 1, 5);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (6, 'Gyson', 'Duże biurko.', 899.99, 40, 1, 2, 6);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (7, 'Saffavaz', 'Wszechstronne biurko.', 599.99, 60, 2, 2, 7);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (8, 'Gazzapth', 'Biurko z wieloma szufladami.', 549.99, 55, 3, 2, 8);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (9, 'Grazer', 'Wysokiej jakości biurko.', 999.99, 60, 4, 2, 9);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (10, 'Loddock', 'Biurko, które spełni każde oczekiwania.', 1149.99, 55, 5, 2, 10);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (11, 'Ratride', 'Niesamowicie pojemna szafa.', 699.99, 33, 1, 3, 11);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (12, 'Eachack', 'Duża szafa do biura.', 799.99, 50, 2, 3, 12);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (13, 'Replos', 'Szafa na akcesoria biurowe.', 449.99, 67, 3, 3, 13);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (14, 'Pauxuo', 'Szafa, która pomieści wszystko.', 599.99, 80, 4, 3, 14);
INSERT INTO products (id, name, description, price, quantity, brand_id, category_id, picture_id) values (15, 'Frostnow', 'Ogromna szafa.', 449.99, 44, 5, 3, 15);