var app = angular.module('custom.directive', []);
    
app.directive("ngConfirmClick", function() {
    
    return {
            link: function (scope, element, attr) {
                var msg = attr.ngConfirmClick || "Are you sure?";
                
                var clickAction = attr.confirmedClick;
                element.bind('click',function (event) {
                    if ( window.confirm(msg) ) {
                        scope.$eval(clickAction);
                    }
                });
            }
        };
});

app.directive("ngSubmitInfo", function() {
    return {
            link: function (scope, element, attr) {
                
                var clickAction = attr.submitAction;
                element.bind('click',function (event) {
                    if (scope.userinfo.$valid) {
                        scope.buttonText = "Saving...";
                        scope.isDisabled = true;
                        scope.$eval(clickAction);
                    }
                });
            }
        };
});

