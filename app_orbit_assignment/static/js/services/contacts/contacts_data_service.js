'use strict';
var app = angular.module("ContactsApp"); 

app.service('contactsDataService', function ($http, $q) {
    var emptyContactFormData = {
        "first_name":"",
        "last_name":"",
        "emails":[{
            "email_type":"work",
            "email":""
        }],
        "contacts":[{
            "phone_type":"work", 
            "phone":""

        }]
    };
    var contacts = []
    var contactFormData = angular.copy(emptyContactFormData)

    var getContactFormData = function(){
        return contactFormData;
    };
    var setContactFormData =  function (contactFrmData) {
        contactFormData = contactFrmData;
    };
    var resetContactFormData = function () {
        contactFormData = angular.copy(emptyContactFormData);
    };
    var getContacts = function () {
        return contacts
    };
    var fetchContacts = function () {
        if(contacts.length !== 0) {
            return $q.resolve(contacts)
        }
        return $http.get("/api/v1/contact-list")
                .then(function(response) {
                    contacts = response.data.contacts
                    return response.data.contacts;
                }, function(response) {
                    return $q.reject(response.data);
                });
    };
    var setContacts = function (newContacts) {
        contacts = newContacts;
    };
    var appendContact  = function (contactFormData) {
        contacts.push(contactFormData);
    };
    var updateContactInList = function (contactFormData) {
        for(var i = 0; i < contacts.length; i++){
            if(contacts[i].id === contactFormData.id){
                contacts[i] = contactFormData
                break;
            }
        }
    };
    return {
        getContactFormData: getContactFormData, 
        setContactFormData: setContactFormData,
        resetContactFormData:resetContactFormData,
        getContacts: getContacts,
        fetchContacts: fetchContacts,
        appendContact: appendContact,
        updateContactInList:updateContactInList
    };
});