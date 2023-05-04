CREATE MIGRATION m1rsdyf43ne5xbn6u4vhkivkedkz2sev6gkr74i6vdkpprf7vqabza
    ONTO m1xng3gvcd4tasxulvjj54k7p5ojmvzbts5kuvcaui7itisjtdchdq
{
  CREATE TYPE default::User {
      CREATE REQUIRED PROPERTY email -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE REQUIRED PROPERTY hash -> std::str;
      CREATE PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY salt -> std::str;
      CREATE REQUIRED PROPERTY username -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
