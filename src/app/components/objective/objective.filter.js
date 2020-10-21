function objectiveFilter() {
    return function (collection, params) {
      if(!collection) return collection;
      return collection.filter(function (item) {
        return item.tag === (
          params.tag === 'all' ? item.tag : params.tag
        );
      });
    };
  }
  
  angular
    .module('components.objective')
    .filter('objectiveFilter', objectiveFilter);
  