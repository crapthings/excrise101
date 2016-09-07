//

const postFilter = ({ posts, li }) => <div>
  <h3>类型</h3>
  <ul>
    <li>
      <a href="#">
        全部 {posts.length}
      </a>
    </li>
    {li.map((i, index) => <li key={index}>
      <a href="#">
        {Config.mappedLabels.PostCategory[i.label]} {i.count}
      </a>
    </li>)}
  </ul>
</div>

const postFilterTracker = (props, onData) => {
  const posts = Posts.find().fetch()

  const li = _(posts)
    .countBy('category')
    .map(remap)
    .value()

  onData(null, { posts, li })

  function remap (v, k) {
    Config.getLabel('PostCategory', k)
    return {
      label: k,
      count: v
    }
  }
}

Components.postFilter = Container(postFilterTracker)(postFilter)
