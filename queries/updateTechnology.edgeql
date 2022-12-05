update Technology
filter .id = <uuid>$id
set {
  name := <str>$name,
  priority := <int32>$priority,
  stack := (
    select TechStack
    filter .stack = <str>$stack
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