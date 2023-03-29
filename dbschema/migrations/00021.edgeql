CREATE MIGRATION m1qfeejwds7iltbsdcebogax2gsqvzoxrpn3v3tf43ipkpgol2yhka
    ONTO m1lgej7a4zwgqspzjwjl26wmobo5na2szkl2p4m74fkyuermteckna
{
  CREATE TYPE default::Snapshot {
      CREATE REQUIRED PROPERTY createdAt -> std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY data -> std::json;
  };
};
