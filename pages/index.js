import useSWR from 'swr';

import {getUsers} from "../actions/user";



const Index = (props) =>{
 



  
  return <code>{JSON.stringify(props.users, null, 2)}</code>;
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