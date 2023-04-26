CREATE MIGRATION m1lgej7a4zwgqspzjwjl26wmobo5na2szkl2p4m74fkyuermteckna
    ONTO m1uobsba6dhmf7stis4iho7i2t2aq733wrgetf7yqmb7ycgebpxhrq
{
  ALTER TYPE default::Invite {
      CREATE REQUIRED PROPERTY key -> std::str {
          SET REQUIRED USING ('');
      };
  };
};
