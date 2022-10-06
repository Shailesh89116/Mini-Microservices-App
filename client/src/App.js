import CommentCreate from "./CommentCreate";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div className="App" style={{color:'blue',alignItems:'center',textAlign:'center'}}>
      <h2>Create a Post</h2>
      <PostCreate/>
      <hr />
      <h1>Posts</h1>
      <PostList/>
     
    </div>
  );
}

export default App;
