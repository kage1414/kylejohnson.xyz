update Experience
filter .id = <uuid>$id
set {
  employer := <str>$employer,
  time := <str>$time,
  position := <str>$position,
  active := <bool>$active,
};
select Experience {id, employer, time, position, active, descriptions: {description, id}}
filter .id = <uuid>$id;