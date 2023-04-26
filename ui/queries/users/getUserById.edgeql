select User
{
  username,
  hash,
  salt,
  name
}
filter .id = <uuid>$id
limit 1