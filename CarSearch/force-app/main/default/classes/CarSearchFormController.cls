public with sharing class CarSearchFormController {

    // public CarSearchFormController() {

    //     @AuraEnabled
    //     public static List<Car_Type__c> getCarTypes(){
    //         return [SELECT Id, Name from Car_Type__c];
            
    //     }


    // }
        @AuraEnabled(cacheable= true)
        public static List<Car_Type__c> getCarTypes(){
            return [SELECT Id, Name from Car_Type__c];
            
        }


}
