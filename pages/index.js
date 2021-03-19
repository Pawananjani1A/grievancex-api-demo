import useSWR from 'swr';

import {getUsers} from "../actions/user";

import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Index = (props) =>{
 
const { data, error } = useSwr('/api/user', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>
  
  return <code>{JSON.stringify(data, null, 2)}</code>;
}





export default Index;