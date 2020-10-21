var sidebar = {
  templateUrl: './sidebar.html',
  controller: 'SidebarController'
};

angular
  .module('common')
  .component('sidebar', sidebar);
