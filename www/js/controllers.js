angular.module('app.controllers', [])
  
.controller('sobreCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
$scope.appName = "Iron Time Calculator";
}])
   
.controller('calculeOTempoFinalDeSuaProvaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

var provas = [
{nome: "Ironman  70.3", id:1, swim:1900  , bike:90 	, run: 21 }, 
{nome: "Ironman 140.6", id:2, swim:3800  , bike:180 , run: 42}, 
{nome: "Olímpico", 		id:3, swim:1500  , bike:40 	, run: 10},
{nome: "Short", 		id:4, swim:750   , bike:20 	, run: 5}
];

$scope.resultado = "00:00:00";


$scope.limpar = function(form) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      $scope.user = angular.copy($scope.master);
    };



$scope.preencheDistancias = function(escolha){
	var escolhido; 
	provas.filter(function (elemento){
		if (elemento.id == escolha){
			escolhido = elemento;
		}
	});
	console.log(escolhido)
	$scope.escolhido = escolhido;
}

$scope.calcular = function(prova){
	console.log(prova);
}


}])
   
.controller('autorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
    