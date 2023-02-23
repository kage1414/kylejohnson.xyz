module default {
  type Experience {
    property employer -> str;
    property position -> str;
    property time -> str;
    property active -> bool {
      default := true;
    };
    multi link descriptions -> Description {
      on target delete allow;
      constraint exclusive
    };
    property priority -> int32;
  }

  type Application {
    required property name -> str;
    property url -> str;
    property active -> bool {
      default := true;
    };
    multi link descriptions -> Description {
      constraint exclusive
    };
    multi link technologies -> Technology;
    property priority -> int32;
  }

  type Education {
    required property school -> str;
    required property time -> str;
    property certificate -> str;
    property degree -> str;
    property active -> bool {
      default := true;
    };
    property priority -> int32;
  }

  type Description {
    property description -> str;
    property priority -> int32;
  }

  type Technology {
    required property name -> str {
      constraint exclusive;
    };
    property url -> str;
    link stack -> TechStack;
    property priority -> int32;
  }

  type TechStack {
    required property stack -> str {
      constraint exclusive;
    };
  }

  type User {
    required property username -> str;
    required property password_hash -> str;
  }
}
