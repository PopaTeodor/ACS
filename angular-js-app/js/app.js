
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
	   $http.get(url + "/" + parseInt(id)).then(	   
	   function successCallback(response) {
       $scope.showObiect = response.data;		   
	   });	    
	   };
 
 
   $http.get(url).then(
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
   
   $scope.obiecte = [];
   $scope.keys = [];
   $scope.obj={};
   $scope.obiect = {};
   $scope.editObject = {};
   $scope.showModal = false;
   $scope.showObiect = {};
  
   $scope.displayModal = function(id){	   
       $scope.showModal = !$scope.showModal;
	   $http.get(url + "/" + parseInt(id)).then(	   
	   function successCallback(response) {
       $scope.showObiect = response.data;		   
	   });	    
	   };
 
 
   $http.get(url).then(
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
  
+app.controller('ProdusController', ['$scope', '$http', function($scope, $http) {
	  
    var url = "http://localhost:8080/produs";
   
   $scope.obiecte = [];
   $scope.keys = [];
   $scope.obj={};
   $scope.obiect = {};
   $scope.editObject = {};
   $scope.showModal = false;
   $scope.showObiect = {};
  
   $scope.displayModal = function(id){	   
       $scope.showModal = !$scope.showModal;
	   $http.get(url + "/" + parseInt(id)).then(	   
	   function successCallback(response) {
       $scope.showObiect = response.data;		   
	   });	    
	   };
 
 
   $http.get(url).then(
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
  
 +app.controller('RachetaController', ['$scope', '$http', function($scope, $http) {
	  
    var url = "http://localhost:8080/racheta";
   
   $scope.obiecte = [];
   $scope.keys = [];
   $scope.obj={};
   $scope.obiect = {};
   $scope.editObject = {};
   $scope.showModal = false;
   $scope.showObiect = {};
  
   $scope.displayModal = function(id){	   
       $scope.showModal = !$scope.showModal;
	   $http.get(url + "/" + parseInt(id)).then(	   
	   function successCallback(response) {
       $scope.showObiect = response.data;		   
	   });	    
	   };
 
 
   $http.get(url).then(
     function successCallback(response) {
	 $scope.obj=response;
     $scope.obiecte = $scope.obj.data;
     $scope.keys = Object.keys(response.data[0]);
   });
 
 
   $scope.addObiect = function(obiect) {
        obiect.id = parseInt(obiect.id);
		obiect.distance= parseInt(obiect.distance);
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