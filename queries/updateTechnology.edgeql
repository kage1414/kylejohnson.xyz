update Technology
filter .id = <uuid>$id
set {
  name := <optional str>$name,
  priority := <optional int32>$priority,
  stack := (
    select TechStack
    filter .stack = <optional str>$stack
    limit 1
  )
};
select Technology 
{
  id,
  name,
  stack: {id, stack},
  priority
}
filter .id = <uuid>$id;