CREATE MIGRATION m13sjpnb6zcn2oewairv6vs6omuryb5vte5yt5p4ctluk6gg7z4q3a
    ONTO m16lrsgk7nlritoq6gytfyimv7yjt4cwcjhesplc2bx6dfdysxalta
{
  ALTER TYPE default::Experience {
      CREATE PROPERTY test -> std::bool;
  };
};
