import { FC, ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Feed } from './Feed';

interface Props {
  selectedTab: number;
}

export const FeedContainer: FC<Props> = function ({
  selectedTab,
}): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed selectedTab={selectedTab} />} />
      </Routes>
    </BrowserRouter>
  );
};
