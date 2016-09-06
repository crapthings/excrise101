Meteor.startup(render)

function render () {
  const app = document.createElement('div')
  app.id = 'app'
  document.body.appendChild(app)
  Render(Components.layout(), app)
}
