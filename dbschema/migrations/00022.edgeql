CREATE MIGRATION m1b2bhgygbshk6zcymxb45xpshhymqvtbj2jwpqmjdxvi5slc2e66a
    ONTO m1s6a6hmk6wujiqs2zkux5it6whlfka2shk2fas4oafsgvpy2pl6oa
{
  ALTER TYPE default::TechStack {
      DROP LINK technologies;
  };
};
