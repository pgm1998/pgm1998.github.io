angular.module("liangCang")
.controller("zyContentCtrl",["$scope","$http",function($scope,$http){
	//头部信息
	$scope.picture = [
		{
			pic:"image/shouye/i-1.jpg",
			picOne:"image/shouye/i-2.jpg",
			picTwo:"image/shouye/i-3.jpeg"
		},
		{
			pic:"image/shouye/i-4.jpg",
			picOne:"image/shouye/i-5.jpg",
			picTwo:"image/shouye/i-6.jpg"
		}
	];
	//专卖信息
	$http.get("dataJson/zhuye.json")
	.success(function(data){
		$scope.hot = data;
	})
	//分类信息
	$scope.type = [
		[
			{typePic:"image/shouye/type-1.png"},
			{typePic:"image/shouye/type-2.png"},
			{typePic:"image/shouye/type-3.png"}
		],
		[
			{typePic:"image/shouye/type-4.png"},
			{typePic:"image/shouye/type-5.png"},
			{typePic:"image/shouye/type-6.png"}
		]
	]
}]);