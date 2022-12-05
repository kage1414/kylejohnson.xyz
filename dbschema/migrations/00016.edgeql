CREATE MIGRATION m1lypoqbxcrgge4ohma5hhsjhgp33k7ubzd2utirf7rt2buv6ucupq
    ONTO m1prul6wa4obcbtb3hv3sytnxwpzibklolxbghsrbiyipne6t2m7zq
{
  ALTER TYPE default::TechStack {
      ALTER LINK technologies {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Technology {
      ALTER PROPERTY name {
          DROP CONSTRAINT std::exclusive;
      };
  };
};
