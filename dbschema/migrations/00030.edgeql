CREATE MIGRATION m1xy2lpurrbeecw7tkoogmteimcmhnrknbbvojq53jpaz4ecnzvf7q
    ONTO m1qocc6nhdpnh2ebvljt2l5gnao6orsn5f4nzwwf7eliwdhmhoomua
{
  ALTER TYPE default::Application {
      ALTER PROPERTY active {
          SET default := true;
      };
  };
  ALTER TYPE default::Experience {
      ALTER PROPERTY active {
          SET default := true;
      };
  };
};
