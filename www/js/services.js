angular.module('starter.services',['ngResource'])

.factory('Session',function($resource){

	return $resource('http://localhost:5000/sessions/:sessionId');

})
.factory('facebookService', function($q) {
    return {
        getMyProfile: function() {
            var deferred = $q.defer();
            FB.api('/me', {
                fields: 'id,name,first_name,last_name,about,middle_name,bio'
            }, function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        }
    }
});