CREATE MIGRATION m1yztnm3tgl4l44le7gf7jhklnhhfar3cfnem2kjvilaw3sjsi5hpa
    ONTO m1qvddtloo4xyv3rhvuqys2onur2fstqnmcrufktes7gmtyozy5wiq
{
  ALTER TYPE default::Experience {
      ALTER LINK descriptions {
          ON TARGET DELETE ALLOW;
      };
  };
};
