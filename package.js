
Package.describe({
  name: 'mcbrumagin:jquery-requestanimationframe',
  summary: 'jquery-requestAnimationFrame gnarf37 Github package',
  version: '0.1.2',
  documentation: 'README.md',
  git: 'https://github.com/mcbrumagin/Meteor-jquery-requestAnimationFrame.git'
})

Package.onUse(function(api) {
  api.imply('jquery@1.11.3_2', 'client')
  api.addFiles(['jquery.requestAnimationFrame.js'], 'client')
})

