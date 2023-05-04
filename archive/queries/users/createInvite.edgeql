insert Invite {
  email := <str>$email,
  key := <str>$key
};
select Invite {
  email,
  key
}
filter .email = <str>$email
limit 1;