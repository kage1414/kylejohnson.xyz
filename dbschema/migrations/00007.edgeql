CREATE MIGRATION m1ixh2edfgsxvc4kuwwd6n4q4wkddacezrluehvuckx774nepozawa
    ONTO m1wmazuxdkqbrtaivf3fso4q6pkk55hsset2depv3aadohh5rispca
{
  ALTER TYPE default::Technology {
      ALTER PROPERTY name {
          RESET OPTIONALITY;
      };
  };
};
