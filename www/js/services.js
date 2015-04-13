angular.module('starter.services', [])
    .factory('database', function ($http) {
        function uploadData(data, success, fail) {
            $http.post('/apicloud/colors', {'colorList': data}).
                success(success).
                error(fail);
        }

        return {
            uploadData: uploadData
        };
    });
