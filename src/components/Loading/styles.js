import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import animation from '../../assets/animations/tractor.json';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled(LottieView).attrs({
  source: animation,
  autoPlay: true,
})`
  width: 90px;
  height: 90px;
`;

export const TextLoading = styled.Text`
  font-weight: bold;
  color: #01a643;
`;
