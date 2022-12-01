CREATE MIGRATION m16lrsgk7nlritoq6gytfyimv7yjt4cwcjhesplc2bx6dfdysxalta
    ONTO m12vc2do54iqfqjoizi4u4ywojxi6y3lpm4v33w3eq3747qrlnoacq
{
  ALTER TYPE default::Application {
      CREATE MULTI LINK descriptions -> default::Description;
  };
  ALTER TYPE default::Technology {
      CREATE MULTI LINK application -> default::Application;
  };
};
