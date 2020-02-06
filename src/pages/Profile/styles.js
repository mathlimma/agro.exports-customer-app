import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`;

export const PhotoView = styled.TouchableOpacity`
  align-items: center;
`;

export const ProfileView = styled.View`
  align-items: center;
`;

export const TextPhoto = styled.Text`
  margin-top: 5px;
  align-items: center;
  color: #161616;
`;

export const PhotoImage = styled.Image`
  width: 85px;
  height: 85px;
  border-radius: 42.5px;
  border-color: #01a643;
  border-width: 1px;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  width: 290px;
  border-bottom-width: 1px;
  border-bottom-color: #808080;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#808080',
})`
  flex: 8;
  width: 290px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 50px;
  background: #fff;
  justify-content: center;
  align-items: center;
  width: 288px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #a60101;
`;

export const LogoutButtonText = styled.Text`
  color: #a60101;
`;
