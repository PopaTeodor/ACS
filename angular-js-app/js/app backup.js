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
    
app.controller('HomeController', ['$scope', '$http', function($scope, $http) {
  $scope.helloWorld = 'AWJ';
}]);


 app.controller('MasinaController', ['$scope', '$http', function($scope, $http) { 

  $scope.masini = [ ];
  $scope.keys = [ ];

  $scope.obj = {};
  $scope.masina = {};
  $scope.editMasina = {};
  $scope.showMasina = {};
  $scope.showCarModal = false;
  $scope.idShow = {};
  
  $http.get('http://localhost:8080/masina').then(
    function successCallback(response) {
	$scope.obj = response;
    $scope.masini = $scope.obj.data; 
    $scope.keys = Object.keys(response.data[0]);
  }, function errorCallback(response) { 
  console.log(response);
  }
  );
  
    
   $scope.displayCarModal = function(masina){	   
       $scope.showCarModal = !$scope.showCarModal;	   
	  
	   $http.get('http://localhost:8080/masina/' + parseInt(id)).then(	   
	   function successCallback(response) {
       $scope.showMasina = response.data;	   
	   });	   
	   /*
	   atribuirea directa, fara utilizarea $http.get (utilizata la debugging)	   	 	      
	   $scope.showMasina = $scope.masini[idShow];   
	   */
	   };

   $scope.addMasina = function(masina) {
	$scope.masini.push(masina);
	masina.id = parseInt(masina.id);     
	
	
    $http.post('http://localhost:8080/masina', masina).then(
	function successCallback(response) {
	$scope.masini.push(masina);
	});
    $scope.masina = {};
  };

  $scope.setUpdateMasina = function(masina) {
    $scope.editMasina = masina;
  };

  $scope.updateMasina= function() {
    $http.put('http://localhost:8080/masina/', $scope.editMasina);
    $scope.editMasina = {};
  };

  $scope.deleteMasina = function(id) {
    $http.delete('http://localhost:8080/masina/' + id)
    .then(
      function successCallback(response) {},	  
      function errorCallback(response) { 
	  console.log(response);
	  $scope.masini = $scope.masini.filter(function(obj) {
         return obj.id !== id;
    });		
  })};   
  
}]);

/*
app.controller('PersoanaController', ['$scope', '$http', function($scope, $http) { 

  $scope.persoane = [ ];
  $scope.keys = [ ];

  $scope.person = {};
  $scope.editPerson = {};
  $scope.showPerson = {};
  
  $scope.showPersonModal = false;
  
   $scope.displayPersonModal = function(id){	
	   $scope.showPersonModal = !$scope.showPersonModal;
	   $scope.showPerson = persoane[id];  
  };
   
  $http.get('http://localhost:8080/persoana').then(
    function successCallback(response) {

    $scope.persoane = response; 
    $scope.keys = Object.keys(response.data);
  });


  $scope.addPersoana = function(person) {
    $scope.persoane.push(person);
    $http.post('http://localhost:8080/persoana', person);
    $scope.person = {};
  };

  $scope.setUpdatePerson = function(person) {
    $scope.editPerson = person;
  };

  $scope.updatePerson = function() {
    $http.put('http://localhost:8080/persoana', $scope.editPerson);
    $scope.editPerson = {};
  };

  $scope.deletePersoana = function(id) {
    $http.delete('http://localhost:8080/persoana/' + id)
    .then(
      function successCallback(response) {
		  
        /* code goes here 
		 },
      function errorCallback(response) {
        angular.element('[data-id=' + id + ']').remove();
    });		
  };    
  
}]);
      },
      function errorCallback(response) {
        angular.element('[data-id=' + id + ']').remove();
    });		
  };    
  
}]);

*/