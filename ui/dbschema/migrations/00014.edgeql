CREATE MIGRATION m1cnnxzb7w77a476ptossjbbbok7vjldfrw3thfwnmu3fmy3yjvzma
    ONTO m1lmj5fig3gocfexnogbsjou5yjzekujvfu5g53iujf2v2pzmteiwa
{
  ALTER TYPE default::Invite {
      ALTER PROPERTY email {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::User {
      ALTER PROPERTY username {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
