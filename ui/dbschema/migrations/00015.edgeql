CREATE MIGRATION m16gracqyksrogdbgqr4kawivnu4hqwf6iowus7h3hvq2nqb3nwkyq
    ONTO m1cnnxzb7w77a476ptossjbbbok7vjldfrw3thfwnmu3fmy3yjvzma
{
  ALTER TYPE default::Invite {
      ALTER PROPERTY registered {
          SET default := false;
      };
  };
};
