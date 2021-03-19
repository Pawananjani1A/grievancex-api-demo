import useSWR from 'swr';

import {getUsers} from "../actions/user";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Index = (props) =>{
 

// const { data, error } = useSWR(
//     '/api/user',
//     fetcher
//   );

  // console.log(props);
  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';
  return <code>{JSON.stringify(data, null, 2)}</code>;
}



export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const users = await getUsers();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users
    },
  }
}


export default Index;