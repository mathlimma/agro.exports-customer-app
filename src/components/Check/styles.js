import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import animation from '../../assets/animations/check-mark.json';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
`;

export const Loading = styled(LottieView).attrs({
  source: animation,
  autoPlay: true,
})`
  width: 90px;
  height: 90px;
`;
