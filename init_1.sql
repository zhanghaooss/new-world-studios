DROP DATABASE IF EXISTS `bmdstudios`;
CREATE DATABASE `bmdstudios` DEFAULT CHARSET UTF8;
USE `bmdstudios`;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for movie_actor
-- ----------------------------
DROP TABLE IF EXISTS `movie_actor`;
CREATE TABLE `movie_actor`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID\r\n',
  `actor_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '演员名称\r\n',
  `actor_avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '演员头像路径',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 70786 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for movie_cinema
-- ----------------------------
DROP TABLE IF EXISTS `movie_cinema`;
CREATE TABLE `movie_cinema`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `cinema_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '影院名称',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '影院地址',
  `province` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '省份（北京市，河北省）',
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '影院所在城市名称（北京市、石家庄市）',
  `district` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '区（海淀区、桥西区）',
  `longitude` double NOT NULL COMMENT '经度',
  `latitude` double NOT NULL COMMENT '纬度',
  `tags` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '影院支持的标签（用/分隔，例如：退/改签/小吃/）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;



-- ----------------------------
-- Table structure for movie_cinema_room
-- ----------------------------
DROP TABLE IF EXISTS `movie_cinema_room`;
CREATE TABLE `movie_cinema_room`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `movie_cinema_id` int NULL DEFAULT NULL COMMENT '外键字段，关联movie_cinema表的主键ID',
  `room_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '放映厅名称（一号厅、二号厅）',
  `room_size` int NULL DEFAULT NULL COMMENT '放映厅的人数\r\n',
  `room_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '放映厅类型，关联roomtype表',
  `seat_template` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '存储当前放映厅的座位模板字符串',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;


-- ----------------------------
-- Table structure for movie_cinema_room_type
-- ----------------------------
DROP TABLE IF EXISTS `movie_cinema_room_type`;
CREATE TABLE `movie_cinema_room_type`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `type_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '影院中放映厅的名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;



-- ----------------------------
-- Table structure for movie_cinema_tag
-- ----------------------------
DROP TABLE IF EXISTS `movie_cinema_tag`;
CREATE TABLE `movie_cinema_tag`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `tagname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '影院支持的标签（退、改签、小吃、4K等）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;



-- ----------------------------
-- Table structure for movie_city
-- ----------------------------
DROP TABLE IF EXISTS `movie_city`;
CREATE TABLE `movie_city`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '城市名称',
  `pinyin` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '拼音',
  `sort` int NULL DEFAULT NULL COMMENT '序号',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;


-- ----------------------------
-- Table structure for movie_desc
-- ----------------------------
DROP TABLE IF EXISTS `movie_desc`;
CREATE TABLE `movie_desc`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `movieid` int NULL DEFAULT NULL,
  `description` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `director` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `actor` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `thumb` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2156 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;


-- ----------------------------
-- Table structure for movie_director
-- ----------------------------
DROP TABLE IF EXISTS `movie_director`;
CREATE TABLE `movie_director`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID\r\n',
  `director_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '导演名称\r\n',
  `director_avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '导演头像路径',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2460 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;



-- ----------------------------
-- Table structure for movie_info
-- ----------------------------
DROP TABLE IF EXISTS `movie_info`;
CREATE TABLE `movie_info`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `category_id` int NOT NULL COMMENT '电影分类ID  1.热映  2.待映   3.经典',
  `cover` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电影封面图片路径',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电影标题',
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电影类型（冗余字段）',
  `star_actor` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电影主演明星（冗余字段）',
  `showingon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '上映时间（冗余字段）',
  `score` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电影评分（冗余字段）',
  `description` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '电影描述',
  `duration` int NULL DEFAULT NULL COMMENT '电影时长（单位：分钟）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2144 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;



-- ----------------------------
-- Table structure for movie_info_map_actor
-- ----------------------------
DROP TABLE IF EXISTS `movie_info_map_actor`;
CREATE TABLE `movie_info_map_actor`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int NULL DEFAULT NULL,
  `actor_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;


-- ----------------------------
-- Table structure for movie_info_map_director
-- ----------------------------
DROP TABLE IF EXISTS `movie_info_map_director`;
CREATE TABLE `movie_info_map_director`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int NULL DEFAULT NULL,
  `director_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;



-- ----------------------------
-- Table structure for movie_thumb
-- ----------------------------
DROP TABLE IF EXISTS `movie_thumb`;
CREATE TABLE `movie_thumb`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '剧照路径',
  `movie_id` int NULL DEFAULT NULL COMMENT '外键字段，关联movie_info表ID字段，表示属于哪个电影',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;



-- ----------------------------
-- Table structure for movie_type
-- ----------------------------
DROP TABLE IF EXISTS `movie_type`;
CREATE TABLE `movie_type`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '电影类型名称（言情、武侠等）',
  `typename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 88 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;



-- ----------------------------
-- Table structure for showingon_plan
-- ----------------------------
DROP TABLE IF EXISTS `showingon_plan`;
CREATE TABLE `showingon_plan`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `cinema_id` int NULL DEFAULT NULL COMMENT '影院ID',
  `cinema_room_id` int NULL DEFAULT NULL COMMENT '放映厅ID',
  `movie_id` int NULL DEFAULT NULL COMMENT '上映电影ID',
  `showingon_date` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '上映时间（yyyy-MM-dd）',
  `showingon_time` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '场次，上映时间（HH:mm）',
  `status` int NULL DEFAULT NULL COMMENT '计划发布状态（0.稍后发布  1.立即发布）',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '票价',
  `seat_template` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '作为模板',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;



-- ----------------------------
-- Table structure for ticket_order
-- ----------------------------
DROP TABLE IF EXISTS `ticket_order`;
CREATE TABLE `ticket_order`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `showingon_plan_id` int NULL DEFAULT NULL,
  `seat_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '座位编号（1排23号）',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '票价',
  `showingon_date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '上映日期（年月日）',
  `showingon_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '开播时间（HH:mm）',
  `movie_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电影名称（冗余字段）',
  `cinema_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '影院名称（冗余字段）',
  `cinema_room_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '影院放映厅名称（一号厅）',
  `cinema_room_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '放映厅类型（4D厅）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;



-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `loginname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '登录账号',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码',
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '昵称',
  `phone` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `validate_code` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '短信验证码',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;



-- ----------------------------
-- Table structure for user_visited_log
-- ----------------------------
DROP TABLE IF EXISTS `user_visited_log`;
CREATE TABLE `user_visited_log`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL COMMENT '用户ID',
  `movie_id` int NULL DEFAULT NULL COMMENT '用户想看的电影ID',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;



-- ----------------------------
-- Table structure for user_want_log
-- ----------------------------
DROP TABLE IF EXISTS `user_want_log`;
CREATE TABLE `user_want_log`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL COMMENT '用户ID',
  `movie_id` int NULL DEFAULT NULL COMMENT '用户想看的电影ID',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of movie_type
-- ----------------------------
INSERT INTO `movie_type` VALUES (1, '爱情');
INSERT INTO `movie_type` VALUES (2, '青春');
INSERT INTO `movie_type` VALUES (3, '奇幻');
INSERT INTO `movie_type` VALUES (5, '古装');
INSERT INTO `movie_type` VALUES (6, '喜剧');
INSERT INTO `movie_type` VALUES (7, '剧情');
INSERT INTO `movie_type` VALUES (8, '动作');
INSERT INTO `movie_type` VALUES (13, '动画');
INSERT INTO `movie_type` VALUES (14, '冒险');
INSERT INTO `movie_type` VALUES (15, '犯罪');
INSERT INTO `movie_type` VALUES (18, '战争');
INSERT INTO `movie_type` VALUES (20, '历史');
INSERT INTO `movie_type` VALUES (24, '科幻');
INSERT INTO `movie_type` VALUES (34, '纪录片');
INSERT INTO `movie_type` VALUES (36, '惊悚');
INSERT INTO `movie_type` VALUES (37, '恐怖');
INSERT INTO `movie_type` VALUES (39, '儿童');
INSERT INTO `movie_type` VALUES (48, '音乐');
INSERT INTO `movie_type` VALUES (51, '家庭');
INSERT INTO `movie_type` VALUES (53, '灾难');
INSERT INTO `movie_type` VALUES (62, '传记');
INSERT INTO `movie_type` VALUES (70, '运动');
INSERT INTO `movie_type` VALUES (87, '悬疑');


-- ----------------------------
-- Records of movie_cinema_tag
-- ----------------------------
INSERT INTO `movie_cinema_tag` VALUES (1, '改签');
INSERT INTO `movie_cinema_tag` VALUES (2, '小吃');
INSERT INTO `movie_cinema_tag` VALUES (3, '折扣卡');
INSERT INTO `movie_cinema_tag` VALUES (4, 'IMAX厅');
INSERT INTO `movie_cinema_tag` VALUES (5, 'CGS中国巨幕厅');
INSERT INTO `movie_cinema_tag` VALUES (6, 'RealD厅');
INSERT INTO `movie_cinema_tag` VALUES (7, 'DTS:X 临境音厅');
INSERT INTO `movie_cinema_tag` VALUES (8, '60帧厅');
INSERT INTO `movie_cinema_tag` VALUES (9, '退');
INSERT INTO `movie_cinema_tag` VALUES (10, '杜比全景声厅');
INSERT INTO `movie_cinema_tag` VALUES (11, '巨幕厅');
INSERT INTO `movie_cinema_tag` VALUES (12, 'LUXE巨幕厅');
INSERT INTO `movie_cinema_tag` VALUES (13, '4D厅');
INSERT INTO `movie_cinema_tag` VALUES (14, '120帧/4K厅');
INSERT INTO `movie_cinema_tag` VALUES (15, 'CINITY厅');
INSERT INTO `movie_cinema_tag` VALUES (16, 'RealD 6FL厅');
INSERT INTO `movie_cinema_tag` VALUES (17, '4K厅');
INSERT INTO `movie_cinema_tag` VALUES (18, '4DX厅');
INSERT INTO `movie_cinema_tag` VALUES (19, 'MX4D厅');
INSERT INTO `movie_cinema_tag` VALUES (20, '儿童厅');
INSERT INTO `movie_cinema_tag` VALUES (21, 'Dolby Cinema厅');

-- ----------------------------
-- Records of movie_cinema_room_type
-- ----------------------------
INSERT INTO `movie_cinema_room_type` VALUES (1, '4K厅');
INSERT INTO `movie_cinema_room_type` VALUES (2, 'ALPD Pro高亮厅');
INSERT INTO `movie_cinema_room_type` VALUES (3, '杜比全景声厅');
INSERT INTO `movie_cinema_room_type` VALUES (4, '60帧厅');
INSERT INTO `movie_cinema_room_type` VALUES (5, '巨幕厅');
