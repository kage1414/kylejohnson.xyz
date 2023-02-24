CREATE MIGRATION m1j4jjmy3ktzwkftwggwh2fskhbqitdhe64ri5h2bodquc4tey67ra
    ONTO m12z34f6o7sjip46ncknfsx4lzrxc4cgfyk4udpsvflfewg6drwkua
{
  ALTER TYPE default::Description {
      CREATE PROPERTY description -> std::str;
  };
};
