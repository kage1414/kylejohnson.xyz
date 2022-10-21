import { ReactElement } from 'react';

interface Props {
  body?: Array<string>;
}

export function FullPostBody({ body }: Props): ReactElement {
  return (
    <div>
      {body && (
        <div>
          <div
            style={{
              margin: '5px 0',
              backgroundColor: 'rgb(250, 250, 250)',
              borderRadius: '7px',
              border: '1px black solid',
              padding: '10px',
              display: 'inline-block',
            }}
          >
            {body.map((text: string, idx: number) => (
              <p
                key={text + idx}
                style={{
                  marginBottom: '5px',
                  minWidth: '300px',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '20px',
                }}
              >{`${text}`}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
