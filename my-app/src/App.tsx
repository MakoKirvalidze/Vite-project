import React, { useState } from 'react';
import UsersList from './components/UsersList';
import UserDetail from './components/UserDetail';

const App: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  return (
    <div>
      <h1>User Management</h1>
      <UsersList />
      <button onClick={() => setSelectedUserId(1)}>Load User 1</button>
      <button onClick={() => setSelectedUserId(2)}>Load User 2</button>

      {selectedUserId && <UserDetail userId={selectedUserId} />}
    </div>
  );
};

export default App;
