CREATE MIGRATION m172lf3uj6zev6vkimfd7cbbsyond7u65quaotpg3fngkzk7t5h3ca
    ONTO m1tqdgckq3qeezgcqdbovwpmpm3sbsea2wiu224l2qgdcbbujvmhza
{
  ALTER TYPE default::TechStack {
      DROP LINK technologies;
  };
};
