update Application
filter .id = <uuid>$id
set {
  technologies += ( 
    select (
      insert Technology {
        name := <optional str>$name,
      } unless conflict on .name else Technology
    )
  )
};
select Technology
{id, name, url, stack, priority }
filter .name = <str>$name