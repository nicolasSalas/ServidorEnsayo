'use strict';

var app = angular.module('Server');

app.service('MyServices', function($resource, $httpParamSerializerJQLike) {
    var service = $resource('URL/:action', null,
      {
    'ws_1': { method:'POST',
                      params: { action : 'Consultacupo' },
                      headers : {"Content-Type": "application/x-www-form-urlencoded"},
                      transformRequest: function(data) {
                      return $httpParamSerializerJQLike(data);
                  }},
    'ws_2': { method:'POST',
                      params: { action : 'Reservacupo' },
                      headers : {"Content-Type": "application/x-www-form-urlencoded"},
                      transformRequest: function(data) {
                      return $httpParamSerializerJQLike(data);
                  }},
      });

    return service;
  })
