CREATE MIGRATION m1szd7njzqespq7maaw3twuu7glkjrt22a5nxqhk7rmayeds5yl4pq
    ONTO m1ixh2edfgsxvc4kuwwd6n4q4wkddacezrluehvuckx774nepozawa
{
  ALTER TYPE default::Education {
      ALTER PROPERTY school {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::Education {
      ALTER PROPERTY time {
          RESET OPTIONALITY;
      };
  };
};
