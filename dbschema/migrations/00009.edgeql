CREATE MIGRATION m1riik4vbwwjo4tddpp332ayauy6jo4zg6ygakc6v3r6ls2pjeu5mq
    ONTO m1szd7njzqespq7maaw3twuu7glkjrt22a5nxqhk7rmayeds5yl4pq
{
  ALTER TYPE default::Application {
      ALTER PROPERTY name {
          RESET OPTIONALITY;
      };
  };
};
