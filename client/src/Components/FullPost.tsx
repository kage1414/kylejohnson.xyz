import React, { FC, ReactElement } from "react";

interface IProps {
  title: string;
  subtitle?: string;
  body?: Array<string>;
  technologies?: Array<string>;
  time?: string;
  url?: string;
}

const FullPost: FC<IProps> = ({
  title,
  subtitle,
  body,
  time,
  url,
  technologies,
}): ReactElement => {
  const flatListButtons = [
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

  return (
    <div
      style={{
        margin: "10px 3px",
        flex: "1",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(240, 243, 252)",
          display: "inline-block",
        }}
      >
        <div
          style={{
            margin: "6px",
          }}
        >
          <a
            href={url || ""}
            style={{
              color: "rgb(0, 0, 255)",
              marginBottom: "1px",
              backgroundColor: "rgb(240, 243, 252)",
              fontFamily: "verdana, arial, helvetica, sans-serif",
              fontSize: "16px",
              pointerEvents: url ? "auto" : "none",
              cursor: url ? "pointer" : "default",
              textDecoration: url ? "underline" : "auto",
            }}
          >
            {title}
          </a>
          {subtitle && (
            <p
              style={{
                marginBottom: "1px",
                backgroundColor: "rgb(240, 243, 252)",
                fontFamily: "verdana, arial, helvetica, sans-serif",
                fontSize: "16px",
                fontWeight: 100,
              }}
            >
              {subtitle}
            </p>
          )}
          {time && (
            <p
              style={{
                color: "rgb(136, 136, 136)",
                fontWeight: "normal",
                fontSize: "10px",
              }}
            >
              {"submitted "}
              <span style={{ color: "blue" }}>{`${time} `}</span>
              {"by "}
              <a
                style={{
                  color: "rgb(51, 102, 153)",
                }}
              >
                {"kyle johnson"}
              </a>
            </p>
          )}
        </div>
        <div>
          {body && (
            <div>
              <div
                style={{
                  margin: "5px 0",
                  backgroundColor: "rgb(250, 250, 250)",
                  borderRadius: "7px",
                  border: "1px black solid",
                  padding: "10px",
                  display: "inline-block",
                }}
              >
                {body.map((text: string, idx: number) => (
                  <p
                    key={text + idx}
                    style={{
                      marginBottom: "5px",
                      minWidth: "300px",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "20px",
                    }}
                  >
                    {text}
                  </p>
                ))}
                {technologies && (
                  <>
                    <p
                      style={{
                        marginTop: "7px",
                        marginBottom: "2px",
                        minWidth: "300px",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "20px",
                      }}
                    >
                      Technologies Used:
                    </p>
                    {technologies.map((text: string, idx: number) => (
                      <p
                        key={text + idx}
                        style={{
                          marginBottom: "2px",
                          minWidth: "300px",
                          paddingLeft: "5px",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "20px",
                        }}
                      >
                        {text}
                      </p>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
        <ul
          style={{
            padding: "0 1px",
          }}
        >
          {flatListButtons.map((button) => (
            <li
              key={title + subtitle + button}
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
      </div>
    </div>
  );
};

export default FullPost;
