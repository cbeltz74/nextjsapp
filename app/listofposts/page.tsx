const getPostsData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json();
};

const getUsersData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    return res.json();
};

export default async function ListOfPosts() {
    const [posts, users] = await Promise.all([getPostsData(), getUsersData()]);
    return (
      <div>
          {posts.map((post: any) => {
            return <p key={post.id}>{post.title}</p>
          })}

{users.map((user: any) => {
            return <p key={user.id}>{user.name}</p>
          })}

      </div>
    );
  }
  