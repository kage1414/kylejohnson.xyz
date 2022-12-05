update Education
filter .id = <uuid>$id
set {
  school := <str>$school,
  time := <str>$time,
  certificate := <optional str>$certificate,
  degree := <optional str>$degree,
  active := <optional bool>$active,
  priority := <optional int32>$priority
};
select Education {
  id,
  school, 
  time, 
  certificate, 
  degree, 
  active,
  priority
}
filter .id = <uuid>$id;