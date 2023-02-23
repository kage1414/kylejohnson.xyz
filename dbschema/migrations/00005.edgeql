CREATE MIGRATION m12giuifdglv6y4yek4zzi4vq6azwd42igaw5m2cbbgxncsrvyyh3q
    ONTO m1j4jjmy3ktzwkftwggwh2fskhbqitdhe64ri5h2bodquc4tey67ra
{
  ALTER TYPE default::Technology {
      ALTER LINK stack {
          ON TARGET DELETE ALLOW;
      };
  };
};
