select (
  insert Description {
    description := <optional str>$description
  }
) {
  description,
  id
}