select i.ID, n.FISH_NAME, i.LENGTH
from FISH_INFO i join FISH_NAME_INFO n on i.FISH_TYPE=n.FISH_TYPE
where i.FISH_TYPE in (select FISH_TYPE
                     from FISH_INFO
                     group by FISH_TYPE
                     having LENGTH=MAX(LENGTH))
order by i.ID;