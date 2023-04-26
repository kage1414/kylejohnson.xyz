update Experience
filter .id = <uuid>$id
set {
  employer := <optional str>$employer,
  time := <optional str>$time,
  position := <optional str>$position,
  active := <optional bool>$active,
  priority := <optional int32>$priority
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