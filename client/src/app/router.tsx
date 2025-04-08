import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Paths } from './constants';
import { Layout } from './Layout';

const MockPage = ({ pageName }: { pageName: string }) => <div>{pageName}</div>;

export const RouterComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/*"
          element={
            <Routes>
              <Route index path={Paths.home} element={<MockPage pageName="Home" />} />
              <Route path={Paths.boards} element={<MockPage pageName="Boards" />} />
              <Route path={Paths.board} element={<MockPage pageName="Board" />} />
              <Route path={Paths.issues} element={<MockPage pageName="Issues" />} />
              <Route path="/*" element={<MockPage pageName="NotFound" />} />
            </Routes>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
