CREATE MIGRATION m1uobsba6dhmf7stis4iho7i2t2aq733wrgetf7yqmb7ycgebpxhrq
    ONTO m1hxx5azghtavkyzylblkie2cphhfsv4e4hgo6krmhwprueyma32kq
{
  ALTER TYPE default::User {
      CREATE LINK invite -> default::Invite;
  };
};
