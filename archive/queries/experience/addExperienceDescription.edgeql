update  Experience
filter .id = <uuid>$experience_id
set {
  descriptions += (
    select Description
    filter .id = <uuid>$description_id
    limit 1
  )
};