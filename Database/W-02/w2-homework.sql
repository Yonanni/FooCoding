-- 1. What is the capital of country X ? (Accept X from user)
PREPARE capital_city FROM 'SELECT city.name FROM city INNER JOIN country ON country.capital = city.id WHERE country.name = ?';
SET @a = 'Eritrea';
EXECUTE capital_city USING @a;
DEALLOCATE PREPARE capital_city;

-- 2. 
PREPARE regional_languages FROM 'SELECT DISTINCT language FROM countrylanguage INNER JOIN country ON country.code = countrylanguage.countrycode WHERE country.region = ?';
SET @a = 'Eastern Africa';
EXECUTE regional_languages using @a;
DEALLOCATE PREPARE regional_languages;

-- 3.
PREPARE num_of_cities_theLanguage_spoken FROM 'SELECT COUNT(city.Name) as num_of_cities from city inner join countrylanguage on city.countrycode = countrylanguage.countrycode WHERE language = ?';
set @a = "Afar";
EXECUTE num_of_cities_theLanguage_spoken USING @a;
DEALLOCATE PREPARE num_of_cities_theLanguage_spoken;

-- 4. 
PREPARE num_of_languages_in_continent FROM 'SELECT DISTINCT continent, COUNT(DISTINCT language) as num_of_languages FROM country INNER JOIN countrylanguage ON country.code = countrylanguage.countrycode GROUP BY continent';
EXECUTE num_of_languages_in_continent;
DEALLOCATE PREPARE num_of_languages_in_continent;

-- 5. 
SELECT DISTINCT Name FROM country 
INNER JOIN countrylanguage ON country.code = countrylanguage.countrycode 
WHERE countrylanguage.language IN 
(SELECT language FROM countrylanguage 
INNER JOIN country ON countrylanguage.countrycode = country.code 
WHERE country.name = "France" AND isofficial = "T") 
AND country.continent = (SELECT country.continent FROM country WHERE country.name = "France") 
AND isofficial = "T";

