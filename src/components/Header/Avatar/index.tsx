import { UserAvatarContainer } from './style';
import { UserAvatarProps } from './interface';

const UserAvatarComponents = ({ username }: UserAvatarProps) => {
  const initials = username
    .split(' ')
    .map((name) => name[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return <UserAvatarContainer>{initials}</UserAvatarContainer>;
};

export default UserAvatarComponents;
