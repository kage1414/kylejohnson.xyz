update Description
filter .id = <uuid>$id
set {
  description := <str>$description,
};
select Description {id, description}
filter .id = <uuid>$id;