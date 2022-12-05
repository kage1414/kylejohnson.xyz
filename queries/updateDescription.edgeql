update Description
filter .id = <uuid>$id
set {
  description := <optional str>$description,
  priority := <optional int32>$priority
};
select Description {id, description}
filter .id = <uuid>$id;