function SidebarController(Config) {
  var ctrl = this;
  ctrl.objectiveTags = [{
    label: 'All objectives',
    icon: 'star',
    value: 'all'
  }].concat(Config.objectiveTags);
}

angular
  .module('common')
  .controller('SidebarController', SidebarController);
