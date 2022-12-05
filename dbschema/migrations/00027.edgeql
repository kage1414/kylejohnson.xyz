CREATE MIGRATION m1j6evgaukehednz3fwbilzjk2timi32ss2pasrvs3ujm3z2mwspbq
    ONTO m172lf3uj6zev6vkimfd7cbbsyond7u65quaotpg3fngkzk7t5h3ca
{
  ALTER TYPE default::Technology {
      CREATE LINK stack -> default::TechStack;
  };
};
