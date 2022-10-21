import React, { FC, ReactElement } from 'react';

interface Props {
  title: string;
  subtitle?: string;
  time?: string;
  url?: string;
}

export function FullPostHeader({
  title,
  subtitle,
  url,
  time,
}: Props): ReactElement {
  return (
    <div
      style={{
        margin: '6px',
      }}
    >
      <a
        href={url || ''}
        style={{
          color: 'rgb(0, 0, 255)',
          marginBottom: '1px',
          backgroundColor: 'rgb(240, 243, 252)',
          fontFamily: 'verdana, arial, helvetica, sans-serif',
          fontSize: '16px',
          pointerEvents: url ? 'auto' : 'none',
          cursor: url ? 'pointer' : 'default',
          textDecoration: url ? 'underline' : 'auto',
        }}
      >
        {title}
      </a>
      {subtitle && (
        <p
          style={{
            marginBottom: '1px',
            backgroundColor: 'rgb(240, 243, 252)',
            fontFamily: 'verdana, arial, helvetica, sans-serif',
            fontSize: '16px',
            fontWeight: 100,
          }}
        >
          {subtitle}
        </p>
      )}
      {time && (
        <p
          style={{
            color: 'rgb(136, 136, 136)',
            fontWeight: 'normal',
            fontSize: '10px',
          }}
        >
          {'submitted '}
          <span style={{ color: 'blue' }}>{`${time} `}</span>
          {'by '}
          <a
            style={{
              color: 'rgb(51, 102, 153)',
            }}
          >
            {'kyle johnson'}
          </a>
        </p>
      )}
    </div>
  );
}
