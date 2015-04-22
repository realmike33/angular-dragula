# angular-dragula

Built using [Dragula](https://github.com/bevacqua/dragula)

# Dependencies

- Angular.js

# Features

- Easy to get [started](https://github.com/realmike33/angular-dragula#usage)
- Comes with dragula
- Gives you full flexibility as the dragula library allows

# Install

```shell
bower install angular-dragula --save
```

# Usage

- angular-dragula comes with dragula, no need to download the library.
- Getting started is as simple as adding the angular-draglua directive to the element along with a config attribute to point to your config object in your controller

```html
<div ng-dragula config="config">
  <div id='left'>
    <div>item 1</div>
    <div>item 2</div>
  </div>
  <div id='right'>
    <div>item 3</div>
    <div>item 4</div>
  </div>
</div>
```

```javascript
angular.module('app', ['angular-dragula'])
.controller('AppCtrl', function($scope){
  var elements = [left, right];
  $scope.config = {
    name: 'main',
    elements: elements
  };
});
```
- To gain access to the dragable elements, inject ngDragulaFactory and use the .get method passing in the name of the config object.

```javascript
.controller('AppCtrl', function($scope, ngDragulaFactory){
ngDragulaFactory.get('main').then(function(dragula){
  console.log(dragula);
  dragula
    .on('drag', function(el){
      ...
    })
    .on('drop', function(el){
      ...
    });
});
```

## Contributing
1. Fork it
2. Clone your fork
3. Create new branch
4. Make changes
5. Make test and check test
6. Build it, run ```gulp``` and the files will be linted and concatenated
7. Push to new branch on your forked repo
8. Pull request from your branch to angular-dragula master

### Format for pull request
- Pretty standard
  - in your commit message; ```(type) message [issue # closed]```
    - ```(bug) killed that bug, closes #45```
- Submit issues as you see them. There are probably better, faster, easier ways to achieve what angular-dragula is designed to do so.
