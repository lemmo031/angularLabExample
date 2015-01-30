var mainApp = angular.module("mainApp", []);

//====================== NAVBAR CONTROLLER ============================
    mainApp.controller('navbarCtrl', function($scope){
        console.log("controller loaded!");

        $scope.pages = [
            {text: "Home", link: '/'},
            {text: "About", link: '/about'},
            {text: "Kittens", link: '/kittens'},
            {text: "Birds", link: '/birds'},
            {text: "GPA Calculator", link: '/gpaCalculator'},
            {text: "404 Page", link: '/wefwrtbertbeb'},

        ];
    });

//==================== MAIN CONTROLLER ==================================
    mainApp.controller('mainCtrl', function($scope){
       console.log("controller loaded!");

       $scope.textField = "";

       // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
       $scope.data = [
           {text: "fish"},
           {text: "fuzzy kittens"},
           {text: "snake"},
           {text: "honey badger"},
           {text: "puppies"},
           {text: "laz0r shark"}
       ];

       $scope.addData = function(){
           if($scope.textField.length >= 1) {
               $scope.data.push({text: $scope.textField});
               $scope.textField = "";
           }
       };

       $scope.removeData = function(index){
           $scope.data.splice(index, 1);
       };

       $scope.cat = function(str1, str2){
           return str1 + str2;
       };

       $scope.itemsInList = function(){
           return $scope.data.length;
       };
    });

//==================== GPA CONTROLLER ==================================
mainApp.controller('gpaCtrl', function($scope){
    console.log("controller loaded!");

    $scope.courseField = "";
    $scope.creditField = "";
    $scope.gradeField = "";
    $scope.output = "yolo";

    $scope.data = [
    ];

    $scope.addData = function(){
        // implement the GPA calculator

        if($scope.courseField.length == 0){
            alert("Please enter a class name.");
        } else if (!isPositive($scope.creditField)){
            alert("Credits must be greater than 0.");
        } else if (!isValidGrade($scope.gradeField)){
            alert("Please enter a valid letter grade (A-F).");
        } else {
            $scope.gradeField = $scope.gradeField.toUpperCase();
            $scope.data.push({course: $scope.courseField, credit: $scope.creditField, grade: $scope.gradeField});
            $scope.courseField = "";
            $scope.creditField = "";
            $scope.gradeField = "";
        }
        //if($scope.courseField.length >= 1) {
        //    $scope.data.push({text: $scope.courseField});
        //    $scope.courseField = "";
        //}
        //
        //if($scope.creditField.length >= 1) {
        //    $scope.data.push({text: $scope.creditField});
        //    $scope.creditField = "";
        //}
        //
        //if($scope.gradeField.length >= 1) {
        //    $scope.data.push({text: $scope.gradeField});
        //    $scope.gradeField = "";
        //}


    };

    $scope.removeData = function(index){
        $scope.data.splice(index, 1);
    };

    $scope.cat = function(str1, str2){
        return str1 + str2;
    };

});
