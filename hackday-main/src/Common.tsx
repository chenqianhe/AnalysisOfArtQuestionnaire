import styled from '@emotion/styled';

const Title = styled.div`
  font-size: 3.3vmin;
  height: 4.6vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Header = styled.div`
  height: 11vh;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 8vh;
`;
interface ResProps {
  location: Array<number>;
  专业: number;
  年级: number;
  性别: number;
  绘画: number;
  艺术活动: number;
  艺术生活: number;
}
interface globalDataProps {
  mapData: { dimension_data: Record<number, ResProps> };
}

export const globalData: globalDataProps = {
  mapData: { dimension_data: {} },
};

export const color = {
  background: '#f6f7fa',
  btnBackground: '#1b44f3',
  rateCard: '#ffffff',
  analysisCard: '#1B44F3',
  dot: '#161616',
  fullScreen: '#E5E5E5',
};

export const component = {
  Title,
  Header,
};
