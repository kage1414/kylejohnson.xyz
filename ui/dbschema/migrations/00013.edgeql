CREATE MIGRATION m1lmj5fig3gocfexnogbsjou5yjzekujvfu5g53iujf2v2pzmteiwa
    ONTO m1ivxflqbpl2hcwmkbz3d5y2aiddhykvtssnjkbueupndkbswcdriq
{
  CREATE TYPE default::Invite {
      CREATE REQUIRED PROPERTY email -> std::str;
      CREATE REQUIRED PROPERTY registered -> std::bool;
  };
};
