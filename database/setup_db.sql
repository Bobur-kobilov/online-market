-- Create main database
CREATE DATABASE IF NOT EXISTS `online_market_db`;
-- Create shadow database for prisma
CREATE DATABASE IF NOT EXISTS `online_market_shadow_db`;


GRANT ALL PRIVILEGES ON online_market_db.* TO 'user'@'%';
GRANT ALL PRIVILEGES ON online_market_shadow_db.* TO 'user'@'%';

