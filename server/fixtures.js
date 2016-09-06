Posts.remove({})

Meteor.startup(init)

function init () {
  _.times(50, createPost)
}

function createPost () {
  Posts.insert({
    title: faker.lorem.sentence(),
    category: _.sample(Config.getValues('PostCategory')),
    createdAt: new Date()
  })
}

Meteor.methods({
  createPost
})
