import styled from 'styled-components/native';

export const Container = styled.View`
  height: 180px;
  width: 150px;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border-radius: 12px;
  border-width: 1px;
  border-color: ${props =>
    props.active ? 'rgba(1, 166, 67, 1)' : 'rgba(239, 98, 98, 1)'};
  background-color: ${props =>
    props.active ? 'rgba(1, 166, 67, 0.2)' : 'rgba(239, 98, 98, 0.2)'};
`;

export const ProductNameText = styled.Text`
  font-size: 14px;
`;

export const StatusText = styled.Text`
  margin-top: 10px;
  font-size: 14px;
`;
export const ProductImage = styled.Image`
  margin-top: 10px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  border-width: 1px;
  border-color: #01a643;
`;
