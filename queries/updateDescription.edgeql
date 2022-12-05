update Description
filter .id = <uuid>$id
set {
  description := <str>$description,
  priority := <int32>$priority
};
select Description {id, description}
filter .id = <uuid>$id;