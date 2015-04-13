angular.module('starter.controllers', ['starter.filters','starter.services'])
    .controller('tabCtrl',function($scope){
        $scope.data = {
            "currentColor": "#eec161",
            "colorList": ["red", "orange", "yellow", "green", "cyan", "blue", "purple"]
        };

    })
    .controller('pickCtrl', function ($scope, $ionicPopup, $timeout) {
        $scope.selectColor = function () {
            $ionicPopup.show({
                template: '<input type="text" ng-model="data.currentColor">',
                title: '请输入颜色的RGB值',
                subTitle: '如#2233EE、blue',
                scope: $scope,
                buttons: [{
                    text: '取消',
                    type: 'button-default'
                }, {
                    text: '确定',
                    type: 'button-positive',
                    onTap: function (e) {
                        return $scope.data.currentColor;
                    }
                }]
            })
                .then(function (res) {
                    if (res) {
                        $scope.data.colorList.push(res);
                    }
                    console.log('RGB:', res);
                });
        };
    })

    .controller('uploadCtrl', function ($scope,database) {
        $scope.upload = function(){
            database.uploadData($scope.data.colorList,success,error)
        };

        function success(){
            alert("上传成功");
        }
        function error(){
            alert("未上传，请检查服务地址");

        }
    })

    .controller('aboutCtrl', function ($scope) {

    });
