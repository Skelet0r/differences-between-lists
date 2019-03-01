'use strict';

angular.module('employees')
.component
(
    'comparative',
    {
        templateUrl:  'components/comparative.html',
           
        controller: function($scope)
        {
			$scope.check = function()
			{
				// For first list!
				$scope.listToArray1 = $scope.toArrayList($scope.list1);
				
				$scope.listToSpaces1 = $scope.spaces($scope.listToArray1);
				
				$scope.listToLower1 = $scope.toLowerCaseList($scope.listToSpaces1);
				
				$scope.listFinal1 = $scope.deleteAccent($scope.listToLower1);
				
				
				
				// For second list!
				$scope.listToArray2 = $scope.toArrayList($scope.list2);
				
				$scope.listToSpaces2 = $scope.spaces($scope.listToArray2);
				
				$scope.listToLower2 = $scope.toLowerCaseList($scope.listToSpaces2);
				
				$scope.listFinal2 = $scope.deleteAccent($scope.listToLower2);
				
				
				
				// Final function! :D
				$scope.arrayNames = $scope.comparativeList($scope.listFinal1, $scope.listFinal2);
			}
			
			$scope.toArrayList = function(csv)
			{
  				var names_list=csv.split("\n");
				
				return names_list;
			}
			
			$scope.spaces = function(list)
			{
				var listSpaces = [];
				for(var i = 0; i < list.length; i ++)
				{
					listSpaces[i] = list[i].replace(/\s+/g, '');
				}
				return listSpaces;
			}
			
			$scope.toLowerCaseList = function(list)
			{
				var listLower = [];
				for(var i = 0; i < list.length; i ++)
				{
					listLower[i] = list[i].toLowerCase();
				}
				
				return listLower;
			}
			
			$scope.deleteAccent = function(list)
			{
				var listAccent = [];
				for(var i = 0; i < list.length; i ++)
				{
					listAccent[i] = list[i].normalize('NFD').replace(/[\u0300-\u036f]/g,"");
				}
				return listAccent;
			}
			
			$scope.comparativeList = function(arre1, arre2)
			{
				
				var i = 0;
				var j = 0;
				var conta = 0;
				var contaNo = 0;
				var flag_found = 0;
				$scope.result = [];
				$scope.namesFinal = [];
				
				for(i = 0; i < arre1.length; i ++)
				{
					for(j = 0; j < arre2.length; j++)
					{
						flag_found = 0
						if(arre1[i] == arre2[j])
						{
							conta = conta + 1;
							flag_found = 1;
							j = arre2.length;
						}
					}
					if (flag_found == 0)
					{
						$scope.result[contaNo] = arre1[i];
						$scope.namesFinal.push($scope.listToArray1[i]);
						contaNo++;
					}
				}
				
				return $scope.namesFinal;
			}
        }
    }
);