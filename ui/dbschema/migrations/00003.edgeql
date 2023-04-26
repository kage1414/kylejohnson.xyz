CREATE MIGRATION m12z34f6o7sjip46ncknfsx4lzrxc4cgfyk4udpsvflfewg6drwkua
    ONTO m1yztnm3tgl4l44le7gf7jhklnhhfar3cfnem2kjvilaw3sjsi5hpa
{
  ALTER TYPE default::Description {
      DROP PROPERTY description;
  };
};
