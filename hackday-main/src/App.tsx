import React, { useState } from 'react';
import type { FC } from 'react';
import styled from '@emotion/styled';
import Feature from './Feature';
import Charactor from './Charactor';
import FrontPage from './FrontPage';

const App: FC = () => {
  // Create the count state.
  const [activeArr, setActiveArr] = useState<number[]>([]);
  const onclick = () => {
    activeArr.length && setActiveArr([]);
  };
  console.log(activeArr);

  const host = '192.168.31.169';
  const port = '5000';

  const loadData = async () => {
    const response = await fetch(`http://${host}:${port}/all_data`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  };

  const setIndice = (n: string) => {
    loadData().then(res => {
      console.log(res)
      setActiveArr(res.draw_data.what_to_draw[n])
    })
  }
  // Return the App component.
  return (
    <>
      <Main onClick={onclick}>
        <Feature setIndice={setIndice}></Feature>
        <Charactor activeArr={activeArr}></Charactor>
      </Main>
      <FrontPage></FrontPage>
    </>
  );
};

const Main = styled.div`
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: 38% 62%;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

export default App;
