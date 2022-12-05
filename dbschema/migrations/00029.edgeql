CREATE MIGRATION m1qocc6nhdpnh2ebvljt2l5gnao6orsn5f4nzwwf7eliwdhmhoomua
    ONTO m1gbwtkp2pbd42pk5ihjtpxvpexp2y4jw2k33strb5p3vckifxgvda
{
  ALTER TYPE default::Application {
      CREATE PROPERTY priority -> std::int32;
  };
  ALTER TYPE default::Description {
      CREATE PROPERTY priority -> std::int32;
  };
  ALTER TYPE default::Education {
      CREATE PROPERTY priority -> std::int32;
  };
  ALTER TYPE default::Experience {
      CREATE PROPERTY priority -> std::int32;
  };
  ALTER TYPE default::Technology {
      CREATE PROPERTY priority -> std::int32;
  };
};
