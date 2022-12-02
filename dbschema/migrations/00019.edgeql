CREATE MIGRATION m1stxrnvc5zat2toixewaaxhkdyx2ov4ptfxuf4tlkuzc56pho6bkq
    ONTO m1uve5wftpaab3lnb35z5zzkqsiuul5dgrh3ljraywv6zzd7hm27na
{
  ALTER TYPE default::Application {
      CREATE MULTI LINK technologies -> default::Technology;
  };
};
