import React from 'react';
import { useUsers } from '../hooks/useUsers';

const UsersList: React.FC = () => {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error fetching users</div>;
  }

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;
