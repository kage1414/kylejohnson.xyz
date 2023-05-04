CREATE MIGRATION m1wmazuxdkqbrtaivf3fso4q6pkk55hsset2depv3aadohh5rispca
    ONTO m12giuifdglv6y4yek4zzi4vq6azwd42igaw5m2cbbgxncsrvyyh3q
{
  ALTER TYPE default::Application {
      ALTER LINK technologies {
          ON TARGET DELETE ALLOW;
      };
  };
  ALTER TYPE default::Technology {
      ALTER LINK stack {
          RESET ON TARGET DELETE;
      };
  };
};
