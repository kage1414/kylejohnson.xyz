update Experience
filter .id = <uuid>$id
set {
  employer := <str>$employer,
  time := <str>$time,
  position := <str>$position,
  active := <bool>$active,
  priority := <int32>$priority
};
select Experience {id,
  employer,
  time,
  position,
  active,
  descriptions: {description, id},
  priority
}
filter .id = <uuid>$id;