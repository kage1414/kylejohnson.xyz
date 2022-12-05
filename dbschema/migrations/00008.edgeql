CREATE MIGRATION m1rbio67aw5kz4o5v5fsr2g4ktpk7qmnkxrz7vn6dl2qmdqdahzegq
    ONTO m1g5hmjyshbg2mampocfustp7h5dgg7s2hzjrbi6omxsfkrzv7k7mq
{
  ALTER TYPE default::Description {
      DROP LINK application;
      DROP LINK experience;
  };
};
