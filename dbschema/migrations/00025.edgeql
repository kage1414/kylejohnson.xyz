CREATE MIGRATION m1tqdgckq3qeezgcqdbovwpmpm3sbsea2wiu224l2qgdcbbujvmhza
    ONTO m1ss6mk2vxlsve7bgxhymuxll75wpctgs5j524xukpju7cvrxynqyq
{
  ALTER TYPE default::Technology {
      DROP LINK stack;
  };
};
