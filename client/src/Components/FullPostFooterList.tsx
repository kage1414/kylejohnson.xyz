import { ReactElement } from 'react';

interface Props {
  buttons: Array<string>;
}

export function FullPostFooterList({ buttons }: Props) {
  return (
    <ul
      style={{
        padding: '0 1px',
      }}
    >
      {buttons.map((button) => (
        <li
          key={button}
          style={{
            display: 'inline-block',
            padding: '0 4px',
            fontSize: '10px',
            lineHeight: '16px',
            height: '16px',
          }}
        >
          <a
            style={{
              textDecorationColor: 'rgb(136, 136, 136)',
              fontWeight: 700,
              fontSize: '10px',
              color:
                button === 'give award'
                  ? 'rgb(167, 145, 40)'
                  : 'rgb(136, 136, 136)',
            }}
          >
            {button}
          </a>
        </li>
      ))}
    </ul>
  );
}
