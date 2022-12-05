CREATE MIGRATION m1mbqzp3m6xd6hk53u2f3oqth7nk24mnmc6dfh4jcgdqh4323jdfvq
    ONTO m16bsu4uqnlb5mv3tidieungkhngi35apjue6kmbnr5joexxk7sriq
{
  ALTER TYPE default::TechStack {
      CREATE MULTI LINK technologies -> default::Technology;
  };
};
