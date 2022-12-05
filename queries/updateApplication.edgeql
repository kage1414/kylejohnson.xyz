update Application
filter .id = <uuid>$id
set {
  name := <optional str>$name,
  url := <optional str>$url,
  priority := <optional int32>$priority,
  active := <optional bool>$active
};
select Application {
  id, 
  name, 
  url,
  active, 
  descriptions: {description, id}, 
  technologies: {name, url, id},
  priority
}
filter .id = <uuid>$id;