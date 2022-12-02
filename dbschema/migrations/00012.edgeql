CREATE MIGRATION m1e5xwydp3hyy3fzucfdbvejordlygylb3olmyixggiambyukusrxa
    ONTO m1t7r4qiikc2xiiakcqercphmpnkeqjme5l752zgtswti4yiorig6a
{
  ALTER TYPE default::TechStack {
      DROP LINK technologies;
  };
  ALTER TYPE default::Technology {
      CREATE MULTI LINK stack -> default::TechStack;
  };
};
