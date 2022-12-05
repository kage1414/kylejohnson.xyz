CREATE MIGRATION m16bsu4uqnlb5mv3tidieungkhngi35apjue6kmbnr5joexxk7sriq
    ONTO m1rbio67aw5kz4o5v5fsr2g4ktpk7qmnkxrz7vn6dl2qmdqdahzegq
{
  ALTER TYPE default::Technology {
      ALTER PROPERTY name {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
