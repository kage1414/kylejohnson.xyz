CREATE MIGRATION m14uokwbvfjelpv4imvm7wjtahwkt7x337urtuaiemcmv3hfot5gia
    ONTO m1lypoqbxcrgge4ohma5hhsjhgp33k7ubzd2utirf7rt2buv6ucupq
{
  ALTER TYPE default::TechStack {
      ALTER LINK technologies {
          DROP CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Technology {
      ALTER PROPERTY name {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
