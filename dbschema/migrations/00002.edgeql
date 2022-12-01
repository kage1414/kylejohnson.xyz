CREATE MIGRATION m1q56ijyiwdgkzrf3zj2ketqxbsawgmizpajcwup7sbikgl6gcpjwq
    ONTO m14edu5xz7xcezdw3yms7pjwqfunvb3gtepi3mdwnduikgiq7seauq
{
  ALTER TYPE default::Experience {
      CREATE MULTI LINK descriptions -> default::Description;
  };
};
