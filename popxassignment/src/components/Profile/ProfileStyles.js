import styled from 'styled-components';

export const Screen = styled.div`
  padding: 24px;
  text-align: left;
  background-color: #c6c7c9;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
background-color: #ffff;
height:50px;
padding:2px;
  
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  cursor: pointer;
  &:hover svg {
    opacity: 1;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const CameraIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: white;
  border-radius: 50%;
  padding: 4px;
  opacity: 0;
  transition: opacity 0.2s ease;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: baseline;
`;

export const Name = styled.strong`
  font-size: 16px;
  color: #000;
`;

export const Email = styled.span`
  font-size: 14px;
  color: #777;
`;

export const Description = styled.p`
  color: #555;
`;
