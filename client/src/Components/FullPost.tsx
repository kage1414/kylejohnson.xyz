import React, { FC, ReactElement } from "react";

interface Props {
  title: string;
  subtitle?: string;
  body?: Array<string>;
  time?: string;
  url?: string;
  secondaryBody?: string[];
  secondaryBodyTitle?: string;
}

interface PostBodyProps {
  body: string[];
  title?: string;
}

const PostBodyContent: FC<PostBodyProps> = ({ body, title }) => {
  return (
    <>
      {title && (
        <div
          style={{
            fontSize: "14px",
            fontWeight: 600,
            marginTop: "8px",
            marginBottom: "4px",
          }}
        >
          {title}
        </div>
      )}
      {body.map((text: string, idx: number) => (
        <p
          key={text + idx}
          style={{
            marginBottom: "4px",
            minWidth: "300px",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
          }}
        >{`${text}`}</p>
      ))}
    </>
  );
};

const FullPost: FC<Props> = ({
  title,
  subtitle,
  body,
  time,
  url,
  secondaryBody,
  secondaryBodyTitle,
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
        margin: "10px 0px",
        flex: "1",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(240, 243, 252)",
          display: "inline-block",
          width: "100%",
        }}
      >
        <div
          style={{
            margin: "8px",
          }}
        >
          <a
            href={url || ""}
            style={{
              color: "rgb(0, 0, 255)",
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
                marginTop: "4px",
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
                marginTop: "8px",
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
        {(body || secondaryBody) && (
          <div style={{ margin: "8px" }}>
            <div
              style={{
                backgroundColor: "rgb(250, 250, 250)",
                borderRadius: "8px",
                border: "1px black solid",
                padding: "10px",
                display: "inline-block",
              }}
            >
              {body && (
                <div>
                  <PostBodyContent body={body} />
                </div>
              )}
              {secondaryBody && (
                <div>
                  <PostBodyContent
                    body={secondaryBody}
                    title={secondaryBodyTitle}
                  />
                </div>
              )}
            </div>
          </div>
        )}
        <ul
          style={{
            padding: "0 1px",
            marginBottom: "4px",
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
