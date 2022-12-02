CREATE MIGRATION m1t7r4qiikc2xiiakcqercphmpnkeqjme5l752zgtswti4yiorig6a
    ONTO m1mbqzp3m6xd6hk53u2f3oqth7nk24mnmc6dfh4jcgdqh4323jdfvq
{
  ALTER TYPE default::Technology {
      DROP LINK stack;
  };
};
