//

const posts = ({ posts }) => <div>
  <h3>文章</h3>
  <Components.addOne/>
  {posts.map(post => <p key={post._id}>
    {post.title}
  </p>)}
</div>

const postsTracker = (props, onData) => {
  const posts = Posts.find({}, DefaultSortOptions).fetch()
  onData(null, { posts })
}

Components.posts = Container(postsTracker)(posts)

Components.addOne = () => <button onClick={createPost}>
  create new post
</button>

function createPost () {
  Meteor.call('createPost')
}
