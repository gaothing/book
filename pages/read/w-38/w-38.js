app.controller('w-38Ctrl',['$scope',function($scope){
	
}])
app.directive('ngX',[function(){
			return{
				restrict:"A",
				template:"<div><div ng-transclude></div></div>",
				replace:true,
				transclude:true,
				link:function($scope,el){
					$(".zhengwen").on('touchend',function(){
						  $('#header').toggle();
						  })
					$(".zhengwen").on('touchend',function(){
						  $('#end').toggle();
						  })
					$(".circles2").on('touchend',function(){
						  $('#s-43').show();
						  })
					$(".zhengwen").on('touchend',function(){
						  $('#s-43').hide();
						  })
					$(".circles3").on('touchend',function(){
						  $('#s-44').show();
						  })
					$(".zhengwen").on('touchend',function(){
						  $('#s-44').hide();
						  })
					
				}
			}
		}])