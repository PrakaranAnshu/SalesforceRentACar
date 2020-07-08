public with sharing class AccountManager {

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccount(Integer numberOfRecords){
        
        return [select Id, Name, Phone from Account LIMIT :numberOfRecords];
        
    }

}
