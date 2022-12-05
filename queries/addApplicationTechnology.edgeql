update Application
filter .id = <uuid>$id
set {
  technologies += ( 
    insert Technology {
      name := <str>$name,
      url := <str>$url
    }
  )
}