/* eslint-disable react/prop-types */
import React, { useState, MouseEvent, useEffect } from 'react';
import type { FC } from 'react';
import { component, color, globalData } from './Common';
import styled from '@emotion/styled';
import downArrow from './assets/downArrow.png';
import ReactECharts from 'echarts-for-react';
import Pic00000 from './assets/00000.png';
import Pic00001 from './assets/00001.png';
import Pic00010 from './assets/00010.png';
import Pic00011 from './assets/00011.png';
import Pic00100 from './assets/00100.png';
import Pic00101 from './assets/00101.png';
import Pic00110 from './assets/00110.png';
import Pic00111 from './assets/00111.png';
import Pic01000 from './assets/01000.png';
import Pic01001 from './assets/01001.png';
import Pic01010 from './assets/01010.png';
import Pic01011 from './assets/01011.png';
import Pic01100 from './assets/01100.png';
import Pic01101 from './assets/01101.png';
import Pic01110 from './assets/01110.png';
import Pic01111 from './assets/01111.png';
import Pic10000 from './assets/10000.png';
import Pic10001 from './assets/10001.png';
import Pic10010 from './assets/10010.png';
import Pic10011 from './assets/10011.png';
import Pic10100 from './assets/10100.png';
import Pic10101 from './assets/10101.png';
import Pic10110 from './assets/10110.png';
import Pic10111 from './assets/10111.png';
import Pic11000 from './assets/11000.png';
import Pic11001 from './assets/11001.png';
import Pic11010 from './assets/11010.png';
import Pic11011 from './assets/11011.png';
import Pic11100 from './assets/11100.png';
import Pic11101 from './assets/11101.png';
import Pic11110 from './assets/11110.png';
import Pic11111 from './assets/11111.png';

const src: Record<string, string> = {
  Pic00000,
  Pic00001,
  Pic00010,
  Pic00011,
  Pic00100,
  Pic00101,
  Pic00110,
  Pic00111,
  Pic01000,
  Pic01001,
  Pic01010,
  Pic01011,
  Pic01100,
  Pic01101,
  Pic01110,
  Pic01111,
  Pic10000,
  Pic10001,
  Pic10010,
  Pic10011,
  Pic10100,
  Pic10101,
  Pic10110,
  Pic10111,
  Pic11000,
  Pic11001,
  Pic11010,
  Pic11011,
  Pic11100,
  Pic11101,
  Pic11110,
  Pic11111,
};

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

const queryId = async (id: number) => {
  const response = await fetch(`http://${host}:${port}/user_detail/${id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

interface ResProps {
  location: Array<number>;
  专业: number;
  年级: number;
  性别: number;
  绘画: number;
  艺术活动: number;
  艺术生活: number;
}

interface seriesProps {
  symbolSize: number;
  data: number[][];
  type: string;
  symbol: string;
}

interface CharactorProps {
  activeArr: number[];
}

interface DataProps extends ResProps {
  text: Record<string, string>;
}

const Charactor: FC<CharactorProps> = ({ activeArr }) => {
  const { Title, Header } = component;
  const [option, setOption] = useState({});
  const [data, setData] = useState<DataProps>({
    location: [],
    专业: 0,
    年级: 0,
    性别: 0,
    绘画: 0,
    艺术活动: 0,
    艺术生活: 0,
    text: {},
  });
  useEffect(() => {
    loadData().then((res) => {
      console.log(res);
      const data = Array<seriesProps>();
      const filter = !!activeArr.length;
      console.log('activeArr: ', activeArr);
      for (const [key, value] of Object.entries<ResProps>(res.dimension_data)) {
        const {
          专业: major,
          性别: gender,
          绘画: draw,
          艺术活动: artActive,
          艺术生活: artLive,
          location,
          年级: grades,
        } = value;
        const filename = `Pic${
          (gender + 1) % 2
        }${major}${draw}${artActive}${artLive}`;
        const valid = activeArr.indexOf(parseInt(key)) !== -1;
        const temp = {
          symbolSize: 10 * (1 + grades / 5),
          data: [location],
          type: 'scatter',
          symbol: filter && !valid ? '' : `image://${src[filename]}`,
          color: 'transparent',
        };
        data.push(temp);
      }
      globalData.mapData = res;
      setOption({
        xAxis: {
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          axisLine: {
            show: false,
          },
        },
        series: data,
      });
    });
  }, [activeArr]);

  const onClick = (e: { componentIndex: number }) => {
    const data = globalData.mapData.dimension_data[e.componentIndex];
    queryId(e.componentIndex).then((res) => {
      setData(
        Object.assign(data, {
          text: {
            draw: res.画画,
            active: res.艺术活动,
            live: res.艺术生活,
          },
        }),
      );
    });
  };

  return (
    <Main>
      <Header>
        <Title>用户关系</Title>
        <DownButton />
      </Header>
      <ChartLayout>
        <ReactECharts
          onEvents={{ click: onClick }}
          style={{ height: '70vh' }}
          option={option}
        ></ReactECharts>
      </ChartLayout>
      <InformationCard
        data={data}
        active={!!data.location.length}
      ></InformationCard>
    </Main>
  );
};

const Main = styled.div`
  position: relative;
  background: ${color.background};
  height: 100vh;
`;

const ChartLayout = styled.div`
  width: 100%;
`;

const DownButton: FC = () => {
  const [showExample, setShowExample] = useState(false);
  return (
    <DownButtonBlock onClick={() => setShowExample(!showExample)}>
      <DownArrowImg src={downArrow} isDown={!showExample}></DownArrowImg>
      <Example isShow={showExample} />
    </DownButtonBlock>
  );
};

const DownButtonBlock = styled.div`
  width: 4.6vmin;
  height: 4.6vmin;
  border-radius: 1vmin;
  background: ${color.btnBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

const DownArrowImg = styled.img<{ isDown: boolean }>`
  width: 32%;
  height: 16%;
  transition: 0.5s;
  transform: ${({ isDown }) => (isDown ? 'none' : 'rotate(180deg)')};
`;

interface ExampleProps {
  isShow: boolean;
}

const Example: FC<ExampleProps> = ({ isShow = false }) => {
  const data = [
    { text: '年级[大一/大四及以上]', src: [Pic00000, Pic00000] },
    { text: '非艺术/艺术专业', src: [Pic00000, Pic01000] },
    { text: '性别[男/女]', src: [Pic00000, Pic10000] },
    { text: '绘画', src: [Pic00100, undefined] },
    { text: '参加艺术活动', src: [Pic00010, undefined] },
    { text: '艺术家生活', src: [Pic00001, undefined] },
  ];

  const examples = data.map(({ text, src }, i) => (
    <ExampleBlock key={text}>
      <ExampleText>{text}</ExampleText>
      <ExampleImgBlock>
        <img src={src[0]} style={{ width: '32px', height: '32px' }}></img>
        {src[1] && (
          <img
            src={src[1]}
            style={
              i !== 0
                ? { width: '32px', height: '32px' }
                : {
                    position: 'relative',
                    width: '48px',
                    height: '48px',
                    right: '-8px',
                  }
            }
          ></img>
        )}
      </ExampleImgBlock>
    </ExampleBlock>
  ));
  const preventDefault = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <ExampleLayout isShow={isShow} onClick={preventDefault}>
      {examples}
    </ExampleLayout>
  );
};

const ExampleLayout = styled.div<{ isShow: boolean }>`
  position: absolute;
  min-width: 100px;
  min-height: 100px;
  bottom: 0;
  right: 0;
  width: 26.7vw;
  padding: 4.5vh 2.9vh;
  background: white;
  transform: ${({ isShow }) =>
    isShow ? 'translateY(calc(100% + 2.6vh))' : 'none'};
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transition: 0.5s;
  border-radius: 24px;
  cursor: default;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const ExampleBlock = styled.div`
  height: 5.7vh;
  margin-top: 2.2vh;
  :first-of-type {
    margin-top: 0;
  }
  display: flex;
`;

const ExampleText = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
`;

const ExampleImgBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface InformationProps {
  data: DataProps;
  active: boolean;
}

const InformationCard: FC<InformationProps> = ({ data, active }) => {
  const {
    专业: major,
    性别: gender,
    绘画: draw,
    艺术活动: artActive,
    艺术生活: artLive,
    年级: grades,
  } = data;
  const { draw: drawText, active: activeText, live: liveText } = data.text;
  const source =
    src[`Pic${(gender + 1) % 2}${major}${draw}${artActive}${artLive}`];
  const textData = {
    grade: ['大一', '大二', '大三', '大四', '大四及以上'],
    major: ['非专业', '专业'],
    gender: ['女', '男'],
  };
  return (
    <InformationCardLayout active={active}>
      <BasicBlock>
        <img src={source} style={{ height: '24px', width: '24px' }}></img>
        <div>{`${textData.grade[grades - 1]} | ${textData.major[major]} | ${
          textData.gender[gender]
        }`}</div>
      </BasicBlock>
      <SplitLine></SplitLine>
      <BasicBlockPadding>
        {drawText != '0' && <div>{`绘图：${drawText}`}</div>}
        {activeText != '0' && <div>{`活动：${activeText}`}</div>}
        {liveText != '0' && <div>{`生活：${liveText}`}</div>}
      </BasicBlockPadding>
    </InformationCardLayout>
  );
};

const SplitLine = styled.div`
  width: 1px;
  height: 8vh;
  background: black;
`;

const InformationCardLayout = styled.div<{ active: boolean }>`
  padding: 2.6vmin 5vw;
  display: flex;
  border-radius: 2vh;
  background-color: white;
  display: flex;
  justify-content: space-between;
  min-height: calc(15vh - 5.2vmin);
  transform: translateY(-25%);
  width: calc(70% - 5vw);
  margin: 0 auto;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: 0.5s;
`;

const BasicBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const BasicBlockPadding = styled.div`
  max-width: 60%;
  text-align: center;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default Charactor;
