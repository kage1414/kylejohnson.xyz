CREATE MIGRATION m1s6a6hmk6wujiqs2zkux5it6whlfka2shk2fas4oafsgvpy2pl6oa
    ONTO m1rmm66w7kt6lv4i2oq6m4tiepewyga5c2xnglwqqwvbhd3c3ihiuq
{
  ALTER TYPE default::TechStack {
      CREATE MULTI LINK technologies -> default::Technology {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
