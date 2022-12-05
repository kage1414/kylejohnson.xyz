CREATE MIGRATION m1uve5wftpaab3lnb35z5zzkqsiuul5dgrh3ljraywv6zzd7hm27na
    ONTO m14uokwbvfjelpv4imvm7wjtahwkt7x337urtuaiemcmv3hfot5gia
{
  ALTER TYPE default::Education {
      ALTER PROPERTY active {
          SET default := true;
      };
  };
  ALTER TYPE default::TechStack {
      ALTER LINK technologies {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
