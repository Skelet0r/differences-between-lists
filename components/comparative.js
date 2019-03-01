'use strict';

angular.module('employees')
.component
(
    'comparative',
    {
        templateUrl:  'components/comparative.html',
           
        controller: function($scope)
        {
			
			$scope.arrayReady = false;
			/*
			console.log('Tamaño lista 1: ' + arre1.length);
			console.log('Tamaño lista 2: ' + arre2.length);
			
            for(i = 0; i < arre1.length; i ++)
			{
				for(j = 0; j < arre2.length; j++)
				{
					flag_found = 0
					if(arre1[i] == arre2[j])
					{
						//console.log(arre2[j]);
						conta = conta + 1;
						flag_found = 1;
						j = arre2.length;
					}
				}
				if (flag_found == 0)
				{
					result[contaNo] = arre1[i];
					contaNo++;
					console.log(contaNo + '.- ' + arre1[i] + ', Fila:' + (i + 1));
				}
			}
			console.log(result);
			console.log('Registros iguales: ' + conta);
			console.log('Faltan y/o a corregir: ' + (arre1.length - conta));
            */
			
			$scope.check = function()
			{
				// For first list!
				$scope.listToArray1 = $scope.toArrayList($scope.list1);
				//console.log($scope.listToArray);
				
				$scope.listToSpaces1 = $scope.spaces($scope.listToArray1);
				//console.log($scope.listToSpaces);
				
				$scope.listToLower1 = $scope.toLowerCaseList($scope.listToSpaces1);
				//console.log($scope.listToLower1);
				
				$scope.listFinal1 = $scope.deleteAccent($scope.listToLower1);
				//console.log($scope.listFinal1);
				
				
				// For second list!
				$scope.listToArray2 = $scope.toArrayList($scope.list2);
				//console.log($scope.listToArray);
				
				$scope.listToSpaces2 = $scope.spaces($scope.listToArray2);
				//console.log($scope.listToSpaces);
				
				$scope.listToLower2 = $scope.toLowerCaseList($scope.listToSpaces2);
				//console.log($scope.listToLower2);
				
				$scope.listFinal2 = $scope.deleteAccent($scope.listToLower2);
				//console.log($scope.listFinal2);
				
				$scope.array1 = $scope.comparativeList($scope.listFinal1, $scope.listFinal2);
				//$scope.array2 = $scope.comparativeList($scope.listFinal2, $scope.listFinal1);
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
				//console.log(listLower);
				
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
				
				for(i = 0; i < arre1.length; i ++)
				{
					for(j = 0; j < arre2.length; j++)
					{
						flag_found = 0
						if(arre1[i] == arre2[j])
						{
							//console.log(arre2[j]);
							conta = conta + 1;
							flag_found = 1;
							j = arre2.length;
						}
					}
					if (flag_found == 0)
					{
						$scope.result[contaNo] = arre1[i];
						contaNo++;
						//console.log(contaNo + '.- ' + arre1[i] + ', Fila:' + (i + 1));
					}
				}
				
				$scope.arrayReady = true;
				
				return $scope.result;
				//console.log('Registros iguales: ' + conta);
				//console.log('Faltan y/o a corregir: ' + (arre1.length - conta));
			}
        }
    }
);