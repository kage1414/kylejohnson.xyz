select User
{
  username,
  password_hash,
}
filter .username = <str>$username
limit 1