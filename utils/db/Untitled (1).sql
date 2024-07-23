CREATE TABLE `ctg_category` (
  `id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `ctg_subcategory` (
  `id` int PRIMARY KEY,
  `category_id` int,
  `name` varchar(255)
);

CREATE TABLE `ctg_product` (
  `id` int PRIMARY KEY,
  `subcategory_id` int,
  `barcode_piece` varchar(255),
  `barcode_pack` varchar(255),
  `description` varchar(255),
  `unit_measure` varchar(255)
);

CREATE TABLE `det_product_prices` (
  `id` int PRIMARY KEY,
  `product_id` int,
  `price_cost` double,
  `price_sale` double,
  `iva` double,
  `ieps1` double,
  `ieps2` double,
  `ieps3` double,
  `ieps4` double,
  `ieps5` double,
  `discount_general` double,
  `discount_subcategory` double,
  `discount_category` double,
  `discount_carry_and_pay` bool,
  `quantity_carry` double,
  `quantity_pay` double,
  `date_start` datetime,
  `date_end` datetime,
  `current` bool,
  `user_id` int
);

CREATE TABLE `det_product_stock` (
  `id` int PRIMARY KEY,
  `product_id` int,
  `total_pieces` double,
  `total_packs` double
);

CREATE TABLE `log_product_stock` (
  `id` int PRIMARY KEY,
  `product_id` int,
  `total_pieces_before` double,
  `total_packs_before` double,
  `total_pieces_after` double,
  `total_packs_after` double,
  `date_modify` datetime,
  `user_modify` datetime
);

CREATE TABLE `seg_users` (
  `id` int PRIMARY KEY,
  `employee_id` int,
  `profile_id` int,
  `fullname` varchar(255),
  `username` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `ctg_profile` (
  `id` int PRIMARY KEY,
  `description` varchar(255),
  `permisos` varchar(255)
);

CREATE TABLE `seg_employee` (
  `id` int PRIMARY KEY,
  `name` varchar(255),
  `lastname_paternal` varchar(255),
  `lastname_maternal` varchar(255),
  `date_birth` date
);

CREATE TABLE `mov_sale` (
  `id` int PRIMARY KEY,
  `date_sale` datetime,
  `user_id` int,
  `subtotal` double,
  `iva` double,
  `ieps1` double,
  `ieps2` double,
  `ieps3` double,
  `ieps4` double,
  `ieps5` double,
  `discount` double,
  `total` double
);

CREATE TABLE `mov_sale_products` (
  `sale_id` int,
  `row_position` int,
  `product_id` int,
  `quantity` double,
  `price_sale` double,
  PRIMARY KEY (`sale_id`, `row_position`)
);

ALTER TABLE `ctg_subcategory` ADD FOREIGN KEY (`category_id`) REFERENCES `ctg_category` (`id`);

ALTER TABLE `ctg_product` ADD FOREIGN KEY (`subcategory_id`) REFERENCES `ctg_subcategory` (`id`);

ALTER TABLE `det_product_prices` ADD FOREIGN KEY (`product_id`) REFERENCES `ctg_product` (`id`);

ALTER TABLE `det_product_prices` ADD FOREIGN KEY (`user_id`) REFERENCES `seg_users` (`id`);

ALTER TABLE `det_product_stock` ADD FOREIGN KEY (`product_id`) REFERENCES `ctg_product` (`id`);

ALTER TABLE `seg_users` ADD FOREIGN KEY (`employee_id`) REFERENCES `seg_employee` (`id`);

ALTER TABLE `seg_users` ADD FOREIGN KEY (`profile_id`) REFERENCES `ctg_profile` (`id`);

ALTER TABLE `mov_sale` ADD FOREIGN KEY (`user_id`) REFERENCES `seg_users` (`id`);

ALTER TABLE `mov_sale_products` ADD FOREIGN KEY (`sale_id`) REFERENCES `mov_sale` (`id`);

ALTER TABLE `mov_sale_products` ADD FOREIGN KEY (`product_id`) REFERENCES `ctg_product` (`id`);
