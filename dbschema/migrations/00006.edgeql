CREATE MIGRATION m1oexozf2pqb4ozvvewdu2sfnrffv6movirgssp4dpzcvvajw76qgq
    ONTO m13sjpnb6zcn2oewairv6vs6omuryb5vte5yt5p4ctluk6gg7z4q3a
{
  ALTER TYPE default::Experience {
      DROP PROPERTY test;
  };
};
