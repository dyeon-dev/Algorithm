select e.EMP_NO, e.EMP_NAME,	
CASE
    WHEN AVG(SCORE) >= 96 THEN 'S'
    WHEN AVG(SCORE) >= 90 THEN 'A'
    WHEN AVG(SCORE) >= 80 THEN 'B'
    ELSE 'C' 
END AS GRADE, 
CASE
    WHEN avg(SCORE) >= 96 then 0.2*e.SAL
    when avg(SCORE) >= 90 then 0.15*e.SAL
    when avg(SCORE) >= 80 then 0.1*e.SAL
    else 0*e.SAL 
END AS BONUS
from HR_EMPLOYEES e
join HR_GRADE g on g.EMP_NO=e.EMP_NO
group by e.EMP_NO;