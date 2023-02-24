update Application
filter .id = <uuid>$id
set {
  technologies -= ( 
    select Technology
    filter .id = <uuid>$technology_id
  )
}