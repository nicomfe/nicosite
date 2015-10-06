'use strict';

NicoSiteApp.factory('ResumeFactory',function(){
    return {
      getTechnologies: function(){
        return[
          {
            name: 'Angular',
            stars: 'stars-4'
          },
          {
            name: 'SASS',
            stars: 'stars-3'
          },
          {
            name: 'HTML5',
            stars: 'stars-3'
          }
          ,
          {
            name: 'Javascript',
            stars: 'stars-4'
          }
        ]
      }
    };
});