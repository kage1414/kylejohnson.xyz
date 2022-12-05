CREATE MIGRATION m1ijjq6qipv6d5c5zrbxpcr6ny34jfo2h3py3gxj6fmnsw25dasipa
    ONTO m1b2bhgygbshk6zcymxb45xpshhymqvtbj2jwpqmjdxvi5slc2e66a
{
  ALTER TYPE default::TechStack {
      CREATE MULTI LINK technologies -> default::Technology {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
