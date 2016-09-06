Config = {
  PostCategory: [{
    value: 'RANDOM',
    label: '随机',
  }, {
    value: 'FUNNY',
    label: '搞笑',
  }, {
    value: 'TEST',
    label: '测试',
  }, {
    value: 'PAPA',
    label: '啪啪',
  }, {
    value: 'CHINESE',
    label: '中国',
  }]
}

Config.getValues = function(key) {
  return _.chain(this[key]).map('value').value()
}

// it works but 看起来像屎，让我想想

Config.getLabel = function(key, value) {
  const label = _.chain(this[key])
    .filter(d => value == d.value)
    .value()
    [0].label
  return label
}

DefaultSortOptions = {
  sort: {
    createdAt: -1
  }
}
