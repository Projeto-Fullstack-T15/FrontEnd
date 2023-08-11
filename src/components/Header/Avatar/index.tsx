import React from 'react';
import { UserAvatarContainer } from './style';

interface UserAvatarProps {
  username: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ username }) => {
  const initials = username
    .split(' ')
    .map(name => name[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();    

  return <UserAvatarContainer>{initials}</UserAvatarContainer>;
};
