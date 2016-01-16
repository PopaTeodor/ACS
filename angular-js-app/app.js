
var app = angular.module('blog', [ ]);


app.directive('modal', function () { //directiva necesara pentru rularea modalelor
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close"  aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
    
+app.controller('HomeController', ['$scope', '$http', function($scope, $http) {
  $scope.helloWorld = 'AWJ';
}]);

+app.controller('PersoanaController', ['$scope', '$http', function($scope, $http) {
   
   var url = "http://localhost:8080/persoana";
   
   $scope.obiecte = [];
   $scope.keys = [];
   $scope.obj={};
   $scope.obiect = {};
   $scope.editObject = {};
   $scope.showModal = false;
   $scope.showObiect = {};
  
   $scope.displayModal = function(id){	   
       $scope.showModal = !$scope.showModal;
		
	 //  $scope.idShow = parseInt(id);
	   $http.get('http://localhost:8080/persoana/' + parseInt(id)).then(	   
	   function successCallback(response) {
       $scope.showObiect = response.data;		   
	   });	      
	
	   };
 
 
   $http.get('http://localhost:8080/persoana').then(
     function successCallback(response) {
	 $scope.obj=response;
     $scope.obiecte = $scope.obj.data;
     $scope.keys = Object.keys(response.data[0]);
   });
 
 
   $scope.addObiect = function(obiect) {
        obiect.id = parseInt(obiect.id);
        $http({
            method: 'POST',
            url: url,
            data: obiect
        }).then(function successCallback(response) {
            $scope.obiecte.push(obiect);
            // done.
        })};


    $scope.deleteObiect = function(id) {
        $http({
            method: 'DELETE',
            url: url+'/' + id,
            data: {}
        }).then(function successCallback(response) {
        }, function errorCallback(response) {
            $scope.obiecte = $scope.obiecte.filter(function(obj) {
                return obj.id !== id;
            });
        });
    };



    $scope.setUpdateObiect = function(obiect) {
        $scope.editObiect = obiect;
    };


    $scope.updateObiect = function() {
        $http({
            method: 'PUT',
            url: url,
            data: $scope.editObiect
        }).then(function successCallback(response) {
            $scope.editObiect = {};
            console.log(response);
            // $scope.persoane.push($scope.editPerson);
            // done.
        }, function errorCallback(response) {
            $scope.editObiect = {};
            console.log(response);
        });
    };
  }]);
  
  
  
+app.controller('MasinaController', ['$scope', '$http', function($scope, $http) {
	
  
  var url = "http://localhost:8080/masina";
   $scope.cars = [];
   $scope.keys = [];
	$scope.obj={};
   $scope.car = {};
   $scope.editCar = {};
   $scope.showCarModal = false;
  
  
   $scope.displayCarModal = function(id){	   
       $scope.showCarModal = !$scope.showCarModal;
		
	 //  $scope.idShow = parseInt(id);
	   $http.get('http://localhost:8080/masina/' + parseInt(id)).then(	   
	   function successCallback(response) {
       $scope.showMasina = response.data;		   
	   });	   
	   
	   /*	   
	   atribuirea directa, fara utilizarea $http.get (utilizata la debugging)	   	 	      
	   $scope.showMasina = $scope.masini[idShow];   
	   */
	   };
 
 
   $http.get('http://localhost:8080/masina').then(
     function successCallback(response) {
		$scope.obj=response;
     $scope.cars = $scope.obj.data;
     $scope.keys = Object.keys(response.data[0]);
   });
 
 
   $scope.addPersoana = function(persoana) {
        persoana.id = parseInt(persoana.id);
        console.log(persoana.id);
        $http({
            method: 'POST',
            url: url,
            data: persoana
        }).then(function successCallback(response) {
            console.log(response);
            $scope.persoane.push(persoana);
            // done.
        }, function errorCallback(response) {
            console.log(response);
        });
    };


    $scope.deletePersoana = function(id) {
        $http({
            method: 'DELETE',
            url: url+'/' + id,
            data: {}
        }).then(function successCallback(response) {
            // aici nu intra niciodata ca e functia de succes
        }, function errorCallback(response) {
            // aici intra pentru ca da eroare
            $scope.persoane = $scope.persoane.filter(function(obj) {
                return obj.id !== id;
            });
        });
    };



    $scope.setUpdatePerson = function(person) {
        $scope.editPerson = person;
    };


    $scope.updatePerson = function() {
        $http({
            method: 'PUT',
            url: url,
            data: $scope.editPerson
        }).then(function successCallback(response) {
            $scope.editPerson = {};
            console.log(response);
            // $scope.persoane.push($scope.editPerson);
            // done.
        }, function errorCallback(response) {
            $scope.editPerson = {};
            console.log(response);
        });
    };
  }]);
  