CREATE MIGRATION m12vc2do54iqfqjoizi4u4ywojxi6y3lpm4v33w3eq3747qrlnoacq
    ONTO m1q56ijyiwdgkzrf3zj2ketqxbsawgmizpajcwup7sbikgl6gcpjwq
{
  ALTER TYPE default::Technology {
      ALTER LINK stack {
          SET MULTI;
      };
  };
};
