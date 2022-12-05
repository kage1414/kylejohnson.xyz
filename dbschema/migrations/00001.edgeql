CREATE MIGRATION m14edu5xz7xcezdw3yms7pjwqfunvb3gtepi3mdwnduikgiq7seauq
    ONTO initial
{
  CREATE FUTURE nonrecursive_access_policies;
  CREATE TYPE default::Application {
      CREATE PROPERTY active -> std::bool;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE PROPERTY url -> std::str;
  };
  CREATE TYPE default::Description {
      CREATE REQUIRED PROPERTY description -> std::str;
  };
  CREATE TYPE default::Education {
      CREATE PROPERTY active -> std::bool;
      CREATE PROPERTY certificate -> std::str;
      CREATE PROPERTY degree -> std::str;
      CREATE REQUIRED PROPERTY school -> std::str;
      CREATE REQUIRED PROPERTY time -> std::str;
  };
  CREATE TYPE default::Experience {
      CREATE PROPERTY active -> std::bool;
      CREATE REQUIRED PROPERTY employer -> std::str;
      CREATE REQUIRED PROPERTY position -> std::str;
      CREATE REQUIRED PROPERTY time -> std::str;
  };
  CREATE TYPE default::TechStack {
      CREATE REQUIRED PROPERTY stack -> std::str;
  };
  CREATE TYPE default::Technology {
      CREATE LINK stack -> default::TechStack;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE PROPERTY url -> std::str;
  };
};
