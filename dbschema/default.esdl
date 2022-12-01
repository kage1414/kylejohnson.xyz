module default {
  type Experience {
    required property employer -> str;
    required property position -> str;
    required property time -> str;
    property active -> bool;
    multi link descriptions -> Description;
  }

  type Application {
    required property name -> str;
    property url -> str;
    property active -> bool;
    multi link descriptions -> Description;
  }

  type Education {
    required property school -> str;
    required property time -> str;
    property certificate -> str;
    property degree -> str;
    property active -> bool;
  }

  type TechStack {
    required property stack -> str;
  }

  type Description {
    required property description -> str;
  }

  type Technology {
    required property name -> str;
    property url -> str;
    multi link stack -> TechStack;
    multi link application -> Application;
  }
}
