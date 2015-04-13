angular.module('starter.directives', []).directive("colorPoint", function () {
        return {
            restrict: 'E',
            template: ' <div class="colorPoint"></div>',
            link: function (scope, element, attrs) {
                element[0].children[0].style.backgroundColor = attrs.color;
                attrs.$observe('color', function(value){
                    element[0].children[0].style.backgroundColor = attrs.color;
                });

            }

        };
    }
);