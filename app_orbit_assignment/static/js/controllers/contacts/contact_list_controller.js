var app = angular.module("ContactsApp")

app.controller("ContactListController", 
    function($scope, $filter, $location, contactsDataService) {
    $scope.currentPage = 0;
    $scope.contactsPerPage = 3; 
    $scope.contacts = [];
    $scope.filteredContacts = [];
    $scope.pagedContacts = [];
    
    contactsDataService.fetchContacts().then(function(data){
        $scope.contacts = data;
        $scope.search();
    });
    $scope.contacts = contactsDataService.getContacts();

    $scope.search = function() {
        if ($scope.searchQuery) { 
            $scope.filteredContacts = $filter('filter')($scope.contacts, function(item) {
                for (var attr in item) {
                    if (typeof item[attr] === "string"){
                        return item[attr].toLowerCase().indexOf($scope.searchQuery.toLowerCase()) !== -1;
                    }
                }
                return false;
            });
        } else {
            $scope.filteredContacts = $scope.contacts;
        }
        $scope.currentPage = 0;
        $scope.groupToPages();
    }; 

    $scope.groupToPages = function() {
        $scope.pagedContacts = [];
        for (var i = 0; i < $scope.filteredContacts.length; i++) {
            if (i % $scope.contactsPerPage === 0) {
                $scope.pagedContacts[Math.floor(i / $scope.contactsPerPage)] = [$scope.filteredContacts[i]];
            } else {
                $scope.pagedContacts[Math.floor(i / $scope.contactsPerPage)].push($scope.filteredContacts[i]);
            }
        }
    };

    $scope.range = function(start, end) {
        var result = [];
        if (!end) {
            end = start;
            start = 0;
        }
        for (var i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    };

    $scope.prevPage = function() {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };

    $scope.nextPage = function() {
        if ($scope.currentPage < $scope.pagedContacts.length - 1) {
            $scope.currentPage++;
        }
    };

    $scope.setPage = function() {
        $scope.currentPage = this.n;
    };
    
    $scope.editContact = function(clickedContact){
        $scope.contactFormData = angular.copy(clickedContact);
        contactsDataService.setContactFormData($scope.contactFormData);        
        $location.path('/contacts/' + String(clickedContact.id) + "/edit");
    }
    $scope.addNewContact = function(){
        $scope.contactFormData = contactsDataService.resetContactFormData();
        $scope.contactFormData = contactsDataService.getContactFormData();        
        $location.path('/new-contact')
    }
});