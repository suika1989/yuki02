/**
 * Created by YUKI on 2016/11/27.
 */
myapp.controller('my_shoppingcart',function($scope,cartShop,$state,$ionicViewSwitcher){

    $scope.cart = cartShop.findAll();
    $scope.remove = function(item){
        cartShop.remove(item.product.title);
    };

    $scope.toDetail = function(){
        $state.go("tabs.thx");
        cartShop.clear();
        $ionicViewSwitcher.nextDirection("forward");    // "forward","back"

    };

    $scope.addto=function(item){
        item.number++
        if(item.number>=99){
            item.number=99
        }
    };

    $scope.reduce=function(item){
        item.number--
        if(item.number<=0){
            item.number=0
        }
    };
    $scope.clear = function(){
        cartShop.clear()
    };


});



