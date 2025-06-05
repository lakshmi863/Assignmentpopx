import React, { useRef, useState, useEffect } from 'react';
import {
  Screen,
  Title,
  AvatarWrapper,
  Avatar,
  CameraIcon,
  Row,
  InfoContainer,
  Name,
  Email,
  Description,
  HiddenInput
} from './ProfileStyles';

import { FiCamera } from 'react-icons/fi';

const ProfileComponent = () => {
  const fileInputRef = useRef(null);
  const [avatarSrc, setAvatarSrc] = useState('');

  // Load saved avatar from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('userAvatar');
    if (saved) setAvatarSrc(saved);
  }, []);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarSrc(reader.result);
        localStorage.setItem('userAvatar', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Screen>
      <Title>Account Settings</Title>

      <Row>
        <AvatarWrapper onClick={handleAvatarClick}>
          <Avatar src={avatarSrc || 'https://tse1.mm.bing.net/th?id=OIP.UGvszP1kpazIwiJJL94uYQHaJh&pid=Api&P=0&h=180'} alt="User" />
          <CameraIcon>
            <FiCamera size={20} />
          </CameraIcon>
          <HiddenInput
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="user"
            onChange={handleImageChange}
          />
        </AvatarWrapper>

        <InfoContainer>
          <Name>Marry Doe</Name>
          <Email>Marry@gmail.com</Email>
        </InfoContainer>
      </Row>

      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elitr, Sed Diam Nonumy
        Eirmod Tempor invidunt Ut Labore Et Dolore magna Aliquyam Erat, Sed Diam
      </Description>
    </Screen>
  );
};

export default ProfileComponent;
