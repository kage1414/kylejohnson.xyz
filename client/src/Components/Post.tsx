import React, { FC, ReactElement } from 'react';

interface IProps {
  data: any;
}

const Post: FC<IProps> = ({data}): ReactElement => {
  console.log(data)

  return (
    <div>
      <h2>{data.name}</h2>
      <span><b>{data.dataType}</b>{data.data.join(' ')}</span>
      {data.url && <div>{data.url}</div>}
    </div>
  )
}

export default Post;