/*1*/
SELECT Name FROM country
WHERE Population > 8000000;
/*2*/
SELECT Name FROM country WHERE name LIKE '%land%';
/*3*/
SELECT * FROM city
WHERE Population BETWEEN 500000 AND 1000000;
/*4*/
SELECT * FROM country
WHERE Continent = "Europe";
/*5*/
SELECT * FROM country ORDER BY SurfaceArea DESC;
/*6*/
SELECT * FROM city WHERE CountryCode = "NLD";
/*7*/
SELECT Name, Population FROM city WHERE Name = "Rotterdam";
/*8*/
SELECT Name, SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10;
/*9*/
SELECT Name, Population FROM city ORDER BY Population DESC LIMIT 10;
/*10*/
SELECT SUM(Population) Total_Pop FROM country;