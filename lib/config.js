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
  return _(this[key])
    .map('value')
    .value()
}

// it works but 看起来像屎，让我想想

Config.getLabel = function(key, value) {
  const label = _(this[key])
    .filter(d => value == d.value)
    .value()
    [0].label
  return label
}

//

Config.mapLabel = function () {
  Config.mappedLabels = {}
  _.each(this, (value, key) => {
    if (_.isArray(value) && value[0] && value[0].label) {
      Config.mappedLabels[key] = {}
      _.each(value, d => {
        Config.mappedLabels[key][d.value] = d.label
      })
    }
  })
}

Config.DefaultSortOptions = {
  sort: {
    createdAt: -1
  }
}

Config.mapLabel()
