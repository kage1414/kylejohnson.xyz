CREATE MIGRATION m1eytr5s2bteu7jo2bt3nhnbs773xwjfflcukibzna7easxy5qsxha
    ONTO m1riik4vbwwjo4tddpp332ayauy6jo4zg6ygakc6v3r6ls2pjeu5mq
{
  ALTER TYPE default::User {
      ALTER PROPERTY password_hash {
          RENAME TO hash;
      };
  };
};
