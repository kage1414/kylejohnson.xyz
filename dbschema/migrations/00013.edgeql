CREATE MIGRATION m1x3wmazfmfmeklgduausz4ut5yhen2g7wyssc4i2vrixvvcji2hma
    ONTO m1e5xwydp3hyy3fzucfdbvejordlygylb3olmyixggiambyukusrxa
{
  ALTER TYPE default::Technology {
      ALTER LINK stack {
          RENAME TO stacks;
      };
  };
};
