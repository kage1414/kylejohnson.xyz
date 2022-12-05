CREATE MIGRATION m1prul6wa4obcbtb3hv3sytnxwpzibklolxbghsrbiyipne6t2m7zq
    ONTO m1gqd6uan25eqtd6nhqq3c25a6r4qkxsc353x3ixq472nikqhx4a6a
{
  ALTER TYPE default::Application {
      ALTER LINK descriptions {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Experience {
      ALTER LINK descriptions {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Technology {
      DROP LINK application;
  };
};
