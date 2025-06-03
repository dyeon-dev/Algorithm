select SUM(g.SCORE) as SCORE, g.EMP_NO, e.EMP_NAME, e.POSITION, e.EMAIL
from HR_GRADE g join HR_EMPLOYEES e on g.EMP_NO = e.EMP_NO
group by EMP_NO
order by SCORE desc
limit 1;