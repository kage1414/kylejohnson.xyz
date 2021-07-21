import { FC, ReactElement } from 'react';

interface IProps {
  title: string;
  idx: number;
  description?: string;
}

const Post: FC<IProps> = ({title, idx, description}): ReactElement => {

  const thumbnails: Array<string> = ['-1267px', '-1099px', '-1043px'];
  let likes: string = Math.floor(Math.random() * 50000).toString();

  if (Number(likes) > 10000) {
    likes = (Math.round(Number(likes) / 100) / 10).toString() + 'k';
  }

  return (
    <div style={{height: '55px', margin: '8px', display: 'block', width: '300px'}}>
      <span style={{color: 'rgb(198, 198, 198)', fontSize: '16px', marginTop: '15px', display: 'block', float: 'left', width: '19px'}}>{idx}</span>
      <div style={{width: '42px', float: 'left'}}>
        <div style={{margin: '0 13px', width: '15px', height: '15px', backgroundImage: 'url(https://www.redditstatic.com/sprite-reddit.5kxTB7FXse0.png)', backgroundPositionX: '-106px', backgroundPositionY: '-1654px'}}></div>
        <div style={{height: '15px'}}>{likes}</div>
        <div style={{margin: '0 13px', width: '15px', height: '15px', backgroundImage: 'url(https://www.redditstatic.com/sprite-reddit.5kxTB7FXse0.png)', backgroundPositionX: '-64px', backgroundPositionY: '-1654px'}}></div>
      </div>
      <div style={{margin: '2px 0', backgroundImage: 'url(https://www.redditstatic.com/sprite-reddit.5kxTB7FXse0.png)', height: '50px', width: '70px', float: 'left', backgroundPositionY: thumbnails[Math.floor(Math.random() * thumbnails.length)]}}></div>
      <span style={{paddingTop: '100px', color: 'blue'}}>{title}</span>
      {description &&
        <p>{description}</p>
      }
    </div>
  )
}

export default Post;