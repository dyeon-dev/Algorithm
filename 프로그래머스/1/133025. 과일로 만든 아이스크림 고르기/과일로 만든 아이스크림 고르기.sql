select f.flavor
from FIRST_HALF as f right join ICECREAM_INFO as i on f.flavor=i.flavor
where f.total_order>3000 and i.INGREDIENT_TYPE like 'fruit_based'
order by f.total_order desc;
