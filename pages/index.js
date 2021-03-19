import useSWR from 'swr';


const fetcher = (url) => fetch(url).then((res) => res.json());

const Index = () =>{
 

const { data, error } = useSWR(
    '/api/user',
    fetcher
  );

  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';
  return <code>{JSON.stringify(data, null, 2)}</code>;
}




export default Index;