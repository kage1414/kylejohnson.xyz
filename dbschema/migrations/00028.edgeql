CREATE MIGRATION m1gbwtkp2pbd42pk5ihjtpxvpexp2y4jw2k33strb5p3vckifxgvda
    ONTO m1j6evgaukehednz3fwbilzjk2timi32ss2pasrvs3ujm3z2mwspbq
{
  ALTER TYPE default::TechStack {
      ALTER PROPERTY stack {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
