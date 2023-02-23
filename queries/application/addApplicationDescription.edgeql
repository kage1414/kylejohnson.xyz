update Application
filter .id = <uuid>$application_id
set {
  descriptions += (
    select Description
    filter .id = <uuid>$description_id
    limit 1
  )
};
