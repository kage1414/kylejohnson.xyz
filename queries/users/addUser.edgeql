insert User
{
  username := <str>$username,
  hash := <str>$hash,
  salt := <str>$salt,
  name := <optional str>$name,
  email := <str>$email,
  invite := (
    select Invite
    filter .id = <optional uuid>$invite_id
  )
};