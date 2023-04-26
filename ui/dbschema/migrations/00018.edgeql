CREATE MIGRATION m1hxx5azghtavkyzylblkie2cphhfsv4e4hgo6krmhwprueyma32kq
    ONTO m1rsdyf43ne5xbn6u4vhkivkedkz2sev6gkr74i6vdkpprf7vqabza
{
  ALTER TYPE default::Invite {
      ALTER PROPERTY email {
          DROP CONSTRAINT std::exclusive;
      };
  };
};
