const BUTTONS = [
  `${Math.floor(Math.random() * 100)} comments`,
  "source",
  "share",
  "save",
  "hide",
  "give award",
  "report",
  "crosspost",
  "hide all child comments",
];

export function FullPostFooterList() {
  return (
    <ul>
      {BUTTONS.map((button) => (
        <li
          key={button}
          style={{
            display: "inline-block",
            padding: "0 4px",
            fontSize: "10px",
            lineHeight: "16px",
            height: "16px",
          }}
        >
          <a
            style={{
              textDecorationColor: "rgb(136, 136, 136)",
              fontWeight: 700,
              fontSize: "10px",
              color:
                button === "give award"
                  ? "rgb(167, 145, 40)"
                  : "rgb(136, 136, 136)",
            }}
          >
            {button}
          </a>
        </li>
      ))}
    </ul>
  );
}
