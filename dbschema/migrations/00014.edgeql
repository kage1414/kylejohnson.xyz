CREATE MIGRATION m1gqd6uan25eqtd6nhqq3c25a6r4qkxsc353x3ixq472nikqhx4a6a
    ONTO m1x3wmazfmfmeklgduausz4ut5yhen2g7wyssc4i2vrixvvcji2hma
{
  ALTER TYPE default::TechStack {
      CREATE MULTI LINK technologies -> default::Technology;
  };
  ALTER TYPE default::Technology {
      DROP LINK stacks;
  };
};
