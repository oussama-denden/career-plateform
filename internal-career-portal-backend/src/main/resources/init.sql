-- MySQL dump 10.13  Distrib 5.6.24, for Win64 (x86_64)
--
-- Host: localhost    Database: careerportal
-- ------------------------------------------------------
-- Server version	5.6.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


SET foreign_key_checks = 0;
TRUNCATE offer;
TRUNCATE referral;
TRUNCATE portaluser;

--
-- Dumping data for table `offer`
--

LOCK TABLES `offer` WRITE;
/*!40000 ALTER TABLE `offer` DISABLE KEYS */;
INSERT INTO `offer` VALUES (1,0,'Admin','Stuttgart','Germany','Some description of the offer','PITERION TUNISIA','Christina','http://www.piterion.com','Short Term','Customer Inquiry','Ingo','test','2016-04-01','Georg','HR','Internal'),
(2,0,'Admin','Stuttgart','Germany','Some description of the offer','PITERION TUNISIA','Christina','http://www.piterion.com','Short Term','Customer Inquiry','Ingo','test','2016-04-01','Georg','Developer','Internal'),
(3,0,'Admin','Stuttgart','Germany','Some description of the offer','PITERION TUNISIA','Christina','http://www.piterion.com','Short Term','Customer Inquiry','Ingo','test','2016-04-01','Georg','Product Owner','Internal'),
(4,0,'Admin','Stuttgart','Germany','Some description of the offer','PITERION TUNISIA','Christina','http://www.piterion.com','Short Term','Customer Inquiry','Ingo','test','2016-04-01','Georg','Team Leader','Internal'),
(5,0,'Admin','New-Delphi','India','Some description of the offer','PITERION TUNISIA','Christina','http://www.piterion.com','Short Term','Customer Inquiry','Ingo','test','2016-04-01','Georg','Architect','Internal');
/*!40000 ALTER TABLE `offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `portaluser`
--

LOCK TABLES `portaluser` WRITE;
/*!40000 ALTER TABLE `portaluser` DISABLE KEYS */;
INSERT INTO `portaluser` VALUES (1,'password',false,'HR_GERMANY','Christina'),
								(2,'password',false,'ADMIN','MOEZ'),
								(3,'password',false,'HR_INDIA','Naveen'),
								(4,'password',false,'HR_TUNISIA','Sawssen'),
								(5,'password',false,'USER','Akrem'),
								(6,'password',false,'USER','Gerog'),
								(7,'password',false,'USER','Oussama');
/*!40000 ALTER TABLE `portaluser` ENABLE KEYS */;
UNLOCK TABLES;

SET foreign_key_checks = 1;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;