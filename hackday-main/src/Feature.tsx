/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import type { FC } from 'react';
import styled from '@emotion/styled';
import { color } from './Common';
import huihua1 from './assets/huihua/huihua1.png';
import huihua2 from './assets/huihua/huihua2.png';
import huihua3 from './assets/huihua/huihua3.png';
import huihua4 from './assets/huihua/huihua4.png';
import huihua5 from './assets/huihua/huihua5.png';
import huihua6 from './assets/huihua/huihua6.png';
import huihua7 from './assets/huihua/huihua7.png';
import huihua8 from './assets/huihua/huihua8.png';
import huihua9 from './assets/huihua/huihua9.png';
import huihua10 from './assets/huihua/huihua10.png';
import huihua11 from './assets/huihua/huihua11.png';
import huihua12 from './assets/huihua/huihua12.png';
import huihua13 from './assets/huihua/huihua13.png';
import huihua14 from './assets/huihua/huihua14.png';
import huihua15 from './assets/huihua/huihua15.png';
import huihua16 from './assets/huihua/huihua16.png';
import huihua17 from './assets/huihua/huihua17.png';
import huihua18 from './assets/huihua/huihua18.png';
import huihua19 from './assets/huihua/huihua19.png';
import huihua20 from './assets/huihua/huihua20.png';
import huihua21 from './assets/huihua/huihua21.png';
import huihua22 from './assets/huihua/huihua22.png';
import huihua23 from './assets/huihua/huihua23.png';
import huihua24 from './assets/huihua/huihua24.png';
import huihua25 from './assets/huihua/huihua25.png';
import huihua26 from './assets/huihua/huihua26.png';
import huihua27 from './assets/huihua/huihua27.png';
import huihua28 from './assets/huihua/huihua28.png';
import huihua29 from './assets/huihua/huihua29.png';
import huihua30 from './assets/huihua/huihua30.png';
import huihua31 from './assets/huihua/huihua31.png';
import huihua32 from './assets/huihua/huihua32.png';
import huihua33 from './assets/huihua/huihua33.png';
import yishu1 from './assets/yishu/yishu1.png';
import yishu2 from './assets/yishu/yishu2.png';
import yishu3 from './assets/yishu/yishu3.png';
import yishu4 from './assets/yishu/yishu4.png';
import yishu5 from './assets/yishu/yishu5.png';
import yishu6 from './assets/yishu/yishu6.png';
import yishu7 from './assets/yishu/yishu7.png';
import yishu8 from './assets/yishu/yishu8.png';
import yishu9 from './assets/yishu/yishu9.png';
import yishu10 from './assets/yishu/yishu10.png';
import yishu11 from './assets/yishu/yishu11.png';
import yishu12 from './assets/yishu/yishu12.png';
import yishu13 from './assets/yishu/yishu13.png';
import yishu14 from './assets/yishu/yishu14.png';
import yishu15 from './assets/yishu/yishu15.png';
import yishu16 from './assets/yishu/yishu16.png';
import yishu17 from './assets/yishu/yishu17.png';
import yishu18 from './assets/yishu/yishu18.png';
import yishu19 from './assets/yishu/yishu19.png';
import yishu20 from './assets/yishu/yishu20.png';
import yishu21 from './assets/yishu/yishu21.png';
import yishu22 from './assets/yishu/yishu22.png';
import yishu23 from './assets/yishu/yishu23.png';
import yishu24 from './assets/yishu/yishu24.png';
import yishu25 from './assets/yishu/yishu25.png';
import yishu26 from './assets/yishu/yishu26.png';
import yishu27 from './assets/yishu/yishu27.png';
import yishu28 from './assets/yishu/yishu28.png';
import shenghuo1 from './assets/shenghuo/shenghuo1.png';
import shenghuo2 from './assets/shenghuo/shenghuo2.png';
import shenghuo3 from './assets/shenghuo/shenghuo3.png';
import shenghuo4 from './assets/shenghuo/shenghuo4.png';
import shenghuo5 from './assets/shenghuo/shenghuo5.png';
import shenghuo6 from './assets/shenghuo/shenghuo6.png';
import shenghuo7 from './assets/shenghuo/shenghuo7.png';
import shenghuo8 from './assets/shenghuo/shenghuo8.png';
import shenghuo9 from './assets/shenghuo/shenghuo9.png';
import shenghuo10 from './assets/shenghuo/shenghuo10.png';
import shenghuo11 from './assets/shenghuo/shenghuo11.png';
import shenghuo12 from './assets/shenghuo/shenghuo12.png';
import shenghuo13 from './assets/shenghuo/shenghuo13.png';
import shenghuo14 from './assets/shenghuo/shenghuo14.png';
import shenghuo15 from './assets/shenghuo/shenghuo15.png';
import shenghuo16 from './assets/shenghuo/shenghuo16.png';
import shenghuo17 from './assets/shenghuo/shenghuo17.png';
import shenghuo18 from './assets/shenghuo/shenghuo18.png';
import shenghuo19 from './assets/shenghuo/shenghuo19.png';
import shenghuo20 from './assets/shenghuo/shenghuo20.png';
import shenghuo21 from './assets/shenghuo/shenghuo21.png';
import shenghuo22 from './assets/shenghuo/shenghuo22.png';
import shenghuo23 from './assets/shenghuo/shenghuo23.png';
import shenghuo24 from './assets/shenghuo/shenghuo24.png';
import shenghuo25 from './assets/shenghuo/shenghuo25.png';
import shenghuo26 from './assets/shenghuo/shenghuo26.png';
import shenghuo27 from './assets/shenghuo/shenghuo27.png';
import shenghuo28 from './assets/shenghuo/shenghuo28.png';

interface FeatureProps {
  setIndice: (n: string) => void;
}

const Feature: FC<FeatureProps> = ({ setIndice }) => {
  const [chosenId, setChosenId] = useState(0);
  let images: { src: string; text: string }[] = [];
  switch (chosenId) {
    case 0:
      images = [
        { src: huihua1, text: '?????????' },
        { src: huihua2, text: '??????????????????' },
        { src: huihua3, text: '????????????' },
        { src: huihua4, text: '??????' },
        { src: huihua5, text: '??????????????????...' },
        { src: huihua6, text: '??????????????????' },
        { src: huihua7, text: '???' },
        { src: huihua8, text: '??????????????????...' },
        { src: huihua9, text: '???' },
        { src: huihua10, text: '??????????????????...' },
        { src: huihua11, text: '??????????????????...' },
        { src: huihua12, text: '??????????????????' },
        { src: huihua13, text: '?????????' },
        { src: huihua14, text: '???????????????' },
        { src: huihua15, text: '??????' },
        { src: huihua16, text: '????????????' },
        { src: huihua17, text: '??????' },
        { src: huihua18, text: '??????' },
        { src: huihua19, text: '?????????' },
        { src: huihua20, text: '??????' },
        { src: huihua21, text: '???????????????' },
        { src: huihua22, text: '????????????' },
        { src: huihua23, text: '??????' },
        { src: huihua24, text: '????????????' },
        { src: huihua25, text: '??????' },
        { src: huihua26, text: '????????????' },
        { src: huihua27, text: '??????' },
        { src: huihua28, text: '??????????????????...' },
        { src: huihua29, text: '??????' },
        { src: huihua30, text: '????????????' },
        { src: huihua31, text: '??????' },
        { src: huihua32, text: '??????' },
        { src: huihua33, text: '??????' },
      ];
      break;
    case 1:
      images = [
        { src: yishu1, text: '?????????' },
        { src: yishu2, text: '??????' },
        { src: yishu3, text: '?????????' },
        { src: yishu4, text: '??????' },
        { src: yishu5, text: '??????' },
        { src: yishu6, text: '??????' },
        { src: yishu7, text: '??????' },
        { src: yishu8, text: '??????' },
        { src: yishu9, text: '??????' },
        { src: yishu10, text: '??????' },
        { src: yishu11, text: '??????' },
        { src: yishu12, text: '??????' },
        { src: yishu13, text: '??????' },
        { src: yishu14, text: '??????' },
        { src: yishu15, text: '??????' },
        { src: yishu16, text: '??????' },
        { src: yishu17, text: '?????????' },
        { src: yishu18, text: '??????' },
        { src: yishu19, text: '?????????' },
        { src: yishu20, text: '??????' },
        { src: yishu21, text: '??????' },
        { src: yishu22, text: '??????' },
        { src: yishu23, text: '?????????' },
        { src: yishu24, text: '??????' },
        { src: yishu25, text: '??????' },
        { src: yishu26, text: '??????' },
        { src: yishu27, text: '??????' },
        { src: yishu28, text: '??????' },
      ];
      break;
    case 2:
      images = [
        { src: shenghuo1, text: '??????' },
        { src: shenghuo2, text: '??????' },
        { src: shenghuo3, text: '??????' },
        { src: shenghuo4, text: '??????' },
        { src: shenghuo5, text: '??????' },
        { src: shenghuo6, text: '??????' },
        { src: shenghuo7, text: '??????' },
        { src: shenghuo8, text: '??????' },
        { src: shenghuo9, text: '??????' },
        { src: shenghuo10, text: '??????' },
        { src: shenghuo11, text: '??????' },
        { src: shenghuo12, text: '??????' },
        { src: shenghuo13, text: '??????' },
        { src: shenghuo14, text: '??????' },
        { src: shenghuo15, text: '??????' },
        { src: shenghuo16, text: '??????' },
        { src: shenghuo17, text: '?????????' },
        { src: shenghuo18, text: '??????' },
        { src: shenghuo19, text: '?????????' },
        { src: shenghuo20, text: '??????' },
        { src: shenghuo21, text: '??????' },
        { src: shenghuo22, text: '??????' },
        { src: shenghuo23, text: '?????????' },
        { src: shenghuo24, text: '??????' },
        { src: shenghuo25, text: '??????' },
        { src: shenghuo26, text: '??????' },
        { src: shenghuo27, text: '??????' },
        { src: shenghuo28, text: '??????' },
      ];
      break;
  }
  return (
    <Main>
      <TabBar chosenId={chosenId} setChosenId={setChosenId}></TabBar>
      <Contents images={images} setIndice={setIndice}></Contents>
    </Main>
  );
};

const Main = styled.div`
  position: relative;
  overflow-y: auto;
`;

interface TabBarProps {
  chosenId: number;
  setChosenId: (n: number) => void;
}
const TabBar: FC<TabBarProps> = ({ chosenId, setChosenId }) => {
  return (
    <TabBarLayout>
      <TabBarItem
        chosenId={chosenId}
        _id={0}
        onClick={() => {
          setChosenId(0);
        }}
      >
        ????????????
      </TabBarItem>
      <TabBarItem
        chosenId={chosenId}
        _id={1}
        onClick={() => {
          setChosenId(1);
        }}
      >
        ????????????
      </TabBarItem>
      <TabBarItem
        chosenId={chosenId}
        _id={2}
        onClick={() => {
          setChosenId(2);
        }}
      >
        ????????????
      </TabBarItem>
    </TabBarLayout>
  );
};
const TabBarLayout = styled.div`
  display: flex;
  border: 2px solid ${color.btnBackground};
  box-sizing: border-box;
  border-radius: 12px;
  margin-top: 5vh;
  margin-left: 10%;
  margin-right: 10%;
`;
const TabBarItem = styled.div<{
  chosenId: number;
  _id: number;
  onClick: () => void;
}>`
  background: ${color.btnBackground};
  border-radius: 9px;
  border: 3px, solid, ${color.btnBackground};
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
  color: ${({ chosenId, _id }) => {
    return chosenId === _id ? 'white' : color.btnBackground;
  }};
  background-color: ${({ chosenId, _id }) => {
    return chosenId === _id ? color.btnBackground : 'white';
  }};
`;

interface PicProps extends FeatureProps {
  images: ContentItemProps[];
}
interface ContentItemProps {
  src: string;
  text: string;
}
const Contents: FC<PicProps> = (props) => {
  return (
    <ContentsLayout>
      {props.images.map((item, i) => {
        return (
          <ContentItem
            key={item.src + i * 2}
            src={item.src}
            text={item.text}
            setIndice={props.setIndice}
          ></ContentItem>
        );
      })}
    </ContentsLayout>
  );
};
const ContentsLayout = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  margin-left: 12%;
  margin-right: 12%;
  margin-top: 2vh;
`;
interface ContentProps extends FeatureProps {
  src: string;
  text: string;
}

const ContentItem: FC<ContentProps> = (props) => {
  return (
    <ContentItemLayout onClick={() => props.setIndice(props.text)}>
      <ContentItemImg src={props.src}></ContentItemImg>
      <text>{props.text}</text>
    </ContentItemLayout>
  );
};

const ContentItemImg = styled.img`
  width: 80%;
`;
const ContentItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  user-select: none;
  font-size: 10px;
`;
export default Feature;
