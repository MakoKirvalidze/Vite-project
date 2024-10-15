import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};
