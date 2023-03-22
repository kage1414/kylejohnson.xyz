select Invite { id, registered }
filter .email = <str>$email
limit 1