CREATE MIGRATION m1qvddtloo4xyv3rhvuqys2onur2fstqnmcrufktes7gmtyozy5wiq
    ONTO initial
{
#   CREATE FUTURE nonrecursive_access_policies;
  CREATE TYPE default::Description {
      CREATE REQUIRED PROPERTY description -> std::str;
      CREATE PROPERTY priority -> std::int32;
  };
  CREATE TYPE default::TechStack {
      CREATE REQUIRED PROPERTY stack -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE default::Technology {
      CREATE LINK stack -> default::TechStack;
      CREATE REQUIRED PROPERTY name -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE PROPERTY priority -> std::int32;
      CREATE PROPERTY url -> std::str;
  };
  CREATE TYPE default::Application {
      CREATE MULTI LINK descriptions -> default::Description {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE MULTI LINK technologies -> default::Technology;
      CREATE PROPERTY active -> std::bool {
          SET default := true;
      };
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE PROPERTY priority -> std::int32;
      CREATE PROPERTY url -> std::str;
  };
  CREATE TYPE default::Experience {
      CREATE MULTI LINK descriptions -> default::Description {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE PROPERTY active -> std::bool {
          SET default := true;
      };
      CREATE PROPERTY employer -> std::str;
      CREATE PROPERTY position -> std::str;
      CREATE PROPERTY priority -> std::int32;
      CREATE PROPERTY time -> std::str;
  };
  CREATE TYPE default::Education {
      CREATE PROPERTY active -> std::bool {
          SET default := true;
      };
      CREATE PROPERTY certificate -> std::str;
      CREATE PROPERTY degree -> std::str;
      CREATE PROPERTY priority -> std::int32;
      CREATE REQUIRED PROPERTY school -> std::str;
      CREATE REQUIRED PROPERTY time -> std::str;
  };
  CREATE TYPE default::User {
      CREATE REQUIRED PROPERTY password_hash -> std::str;
      CREATE REQUIRED PROPERTY username -> std::str;
  };
};
