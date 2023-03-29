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
    property name -> str;
    property url -> str;
    property active -> bool {
      default := true;
    };
    multi link descriptions -> Description {
      constraint exclusive
    };
    multi link technologies -> Technology {
      on target delete allow;
    };
    property priority -> int32;
  }

  type Education {
    property school -> str;
    property time -> str;
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
    property name -> str {
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
    required property username -> str {
      constraint exclusive;
    };
    required property email -> str {
      constraint exclusive;
    };
    required property hash -> str;
    required property salt -> str;
    property name -> str;
    link invite -> Invite;
  }

  type Invite {
    required property email -> str;
    required property registered -> bool {
      default := false;
    };
    required property key -> str;
  }

  type Snapshot {
    required property data -> json;
    required property createdAt -> datetime {
      default := datetime_current();
    };
  }
}
