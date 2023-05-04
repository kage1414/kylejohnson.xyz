CREATE MIGRATION m1ivxflqbpl2hcwmkbz3d5y2aiddhykvtssnjkbueupndkbswcdriq
    ONTO m1ffvexb6ddkt5sgiwaevk3johx3i2pe5whkdvdkgmyl22spxjkycq
{
  CREATE TYPE default::User {
      CREATE REQUIRED PROPERTY hash -> std::str;
      CREATE PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY salt -> std::str;
      CREATE REQUIRED PROPERTY username -> std::str;
  };
};
