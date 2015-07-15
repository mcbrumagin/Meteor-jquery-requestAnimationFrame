
Package.describe({
  summary: 'jquery-requestAnimationFrame gnarf37 Github package',
  version: '0.1.2',
  name: 'jquery-requestanimationframe',
  documentation: 'README.md',
  git: 'https://github.com/mcbrumagin/Meteor-jquery-requestAnimationFrame.git'
})

Package.onUse(function(api) {
  api.imply('jquery', 'client')
  api.addFiles(['jquery.requestAnimationFrame.js'], 'client')
})
