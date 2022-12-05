CREATE MIGRATION m1ss6mk2vxlsve7bgxhymuxll75wpctgs5j524xukpju7cvrxynqyq
    ONTO m1ijjq6qipv6d5c5zrbxpcr6ny34jfo2h3py3gxj6fmnsw25dasipa
{
  ALTER TYPE default::Technology {
      ALTER LINK stack {
          USING (.<technologies[IS default::TechStack]);
      };
  };
};
