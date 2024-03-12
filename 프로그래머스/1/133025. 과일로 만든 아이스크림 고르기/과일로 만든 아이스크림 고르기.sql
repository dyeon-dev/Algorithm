-- 코드를 입력하세요
SELECT f.flavor
from icecream_info as i left join first_half as f on i.flavor = f.flavor
where f.total_order > 3000 and i.INGREDIENT_TYPE LIKE 'fruit_based'
order by f.TOTAL_ORDER desc;