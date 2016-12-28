var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  $scope.titulo = "Este es un ejemplo con Controladores.";
  $scope.nombre = "Nombre";
  $scope.apellido = "Apellido";

  $scope.funcion = function(){
    return $scope.nombre+" "+$scope.apellido;
  }

});
