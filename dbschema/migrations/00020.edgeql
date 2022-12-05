CREATE MIGRATION m1rmm66w7kt6lv4i2oq6m4tiepewyga5c2xnglwqqwvbhd3c3ihiuq
    ONTO m1stxrnvc5zat2toixewaaxhkdyx2ov4ptfxuf4tlkuzc56pho6bkq
{
  ALTER TYPE default::TechStack {
      DROP LINK technologies;
  };
  ALTER TYPE default::Technology {
      CREATE LINK stack -> default::TechStack;
  };
};
