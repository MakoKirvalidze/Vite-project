import React from 'react';
import { useUser } from '../hooks/useUser';

interface UserDetailProps {
  userId: number;
}

const UserDetail: React.FC<UserDetailProps> = ({ userId }) => {
  const { data: user, isLoading, error } = useUser(userId);

  if (isLoading) {
    return <div>Loading user details...</div>;
  }

  if (error) {
    return <div>Error fetching user details</div>;
  }

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>Email: {user?.email}</p>
      <p>Username: {user?.username}</p>
    </div>
  );
};

export default UserDetail;
