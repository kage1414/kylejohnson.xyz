select User
{
  username,
  hash,
  salt,
  name
}
filter .username = <str>$username
limit 1