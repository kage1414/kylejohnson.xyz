module default {
  type Experience {
    required property employer -> str;
    required property position -> str;
    required property time -> str;
    property active -> bool;
    multi link descriptions -> Description {
      constraint exclusive
    };
  }

  type Application {
    required property name -> str;
    property url -> str;
    property active -> bool;
    multi link descriptions -> Description {
      constraint exclusive
    };
    multi link technologies -> Technology;
  }

  type Education {
    required property school -> str;
    required property time -> str;
    property certificate -> str;
    property degree -> str;
    property active -> bool {
      default := true;
    };
  }

  type Description {
    required property description -> str;
  }

  type Technology {
    required property name -> str {
      constraint exclusive;
    };
    property url -> str;
  }

  type TechStack {
    required property stack -> str;
    multi link technologies -> Technology{
      constraint exclusive
    };
  }
}
