update Application
filter .id = <uuid>$id
set {
  descriptions += ( 
    insert Description {
      description := <optional str>$description
    }
  )
};
