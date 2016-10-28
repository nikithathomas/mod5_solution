(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signUpCtrl = this;
  signUpCtrl.saveSubmit=function(userFirstName,userLastName,userEmail,userPhone,userShortName){
    signUpCtrl.shortNameInd=MenuService.saveFromSubmit(userShortName).then(function (item) {
      signUpCtrl.errorMsg=false;
      var user= {
             firstName:userFirstName,
             lastName:userLastName,
             email:userEmail,
             phone:userPhone,
             shortName:userShortName,
             item:item.data,
             saved:true
           };
           signUpCtrl.errorMsg=false;
    MenuService.saveInService(user);
    },function()
    {
      signUpCtrl.errorMsg=true;
     });
  }
}


})();
