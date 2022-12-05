CREATE MIGRATION m1g5hmjyshbg2mampocfustp7h5dgg7s2hzjrbi6omxsfkrzv7k7mq
    ONTO m1oexozf2pqb4ozvvewdu2sfnrffv6movirgssp4dpzcvvajw76qgq
{
  ALTER TYPE default::Description {
      CREATE SINGLE LINK application -> default::Application;
      CREATE SINGLE LINK experience -> default::Experience;
  };
};
