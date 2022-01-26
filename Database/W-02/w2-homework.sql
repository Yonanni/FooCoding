-- 1. 
prepare capital_city from 'select city.name from city inner join country on country.capital = city.id where country.name = ?';
set @input = 'Eritrea';
execute capital_city using @input;
deallocate prepare capital_city;

-- 2. 
prepare regional_languages from 'select distinct language from countrylanguage inner join country on country.code = countrylanguage.countrycode where country.region = ?';
set @input = 'Eastern Africa';
execute regional_languages using @input;
deallocate prepare regional_languages;

-- 3.
prepare num_of_cities_theLanguage_spoken from 'select count(city.name) as num_of_cities from city inner join countrylanguage on city.countrycode = countrylanguage.countrycode where language = ?';
set @input = "Afar";
execute num_of_cities_theLanguage_spoken using @input;
deallocate prepare num_of_cities_theLanguage_spoken;

-- 4. 
prepare num_of_languages_in_continent from 'select distinct continent, count(distinct language) as num_of_languages from country inner join countrylanguage on country.code = countrylanguage.countrycode group by continent';
execute num_of_languages_in_continent;
deallocate prepare num_of_languages_in_continent;

-- 5. 
select distinct name from country 
inner join countrylanguage on country.code = countrylanguage.countrycode 
where countrylanguage.language IN 
(select language from countrylanguage 
inner join country on countrylanguage.countrycode = country.code 
where country.name = "France" and isofficial = "T") 
and country.continent = (select country.continent from country where country.name = "France") 
and isofficial = "T";

