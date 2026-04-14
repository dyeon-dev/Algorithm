select count(*) as FISH_COUNT
from FISH_INFO as f join FISH_NAME_INFO as n on f.FISH_TYPE=n.FISH_TYPE
where n.FISH_NAME='BASS' || n.FISH_NAME='SNAPPER';