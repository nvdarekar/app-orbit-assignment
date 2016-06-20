var app = angular.module("ContactsApp")

app.controller("ContactFormController", 
    function($scope, $location, contactsDataService) {

    $scope.contactFormData = contactsDataService.getContactFormData();
    $scope._contactFormData = angular.copy($scope.contactFormData)
    
    $scope.appendEmailRow = function(){
        $scope.contactFormData.emails.push({email_type:"work", email:""});
    }
    
    $scope.appendPhoneRow = function(){
        $scope.contactFormData.contacts.push({phone_type:"work", phone:""});
    }
    
    $scope.removeEmailRow = function($index){
        $scope.contactFormData.emails.splice($index, 1);   
    }

    $scope.removePhoneRow = function($index){
        $scope.contactFormData.contacts.splice($index, 1);   
    }

    $scope.addNewContact = function(){
        contactsDataService.resetContactFormData();   
        $scope.contactFormData = contactsDataService.getContactFormData();        
        $location.path('/new-contact')
    }

    $scope.submitForm = function(isValid){
        if(isValid && typeof $scope.contactFormData.id === "undefined"){
            contactsDataService.appendContact($scope.contactFormData); 
        } else{
            contactsDataService.updateContactInList($scope.contactFormData); 
        }

        $location.path('/contacts/');
    }
   
    $scope.resetForm = function($event){
        $scope.contactFormData = angular.copy($scope._contactFormData)
    }
});