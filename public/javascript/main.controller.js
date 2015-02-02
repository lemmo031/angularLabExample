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
    $scope.pointsEarned = 0;
    $scope.totalCredits = 0;
    $scope.output = "GPA: 0";

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
            $scope.updateGPA(letterToNum($scope.gradeField) * $scope.creditField, $scope.creditField)
            $scope.courseField = "";
            $scope.creditField = "";
            $scope.gradeField = "";
        }
    };

    $scope.updateGPA = function(changeInPoints, changeInCredits){
        $scope.pointsEarned += changeInPoints;
        $scope.totalCredits += changeInCredits;
        $scope.output = "GPA: " + calculateGPA($scope.pointsEarned, $scope.totalCredits);
    };

    $scope.removeData = function(index){
        var credits = $scope.data[index].credit;
        var grade = $scope.data[index].grade;
        $scope.updateGPA(-1 * letterToNum(grade) * credits, -1 * credits);
        $scope.data.splice(index, 1);
    };

    $scope.cat = function(str1, str2){
        return str1 + str2;
    };

    $scope.getColorClass = function(GPA){
        output = "";
        if (GPA >= 3.0){
            output = "bg-success";
        }
        else if (GPA >= 2.0){
            output = "bg-warning";
        }
        else{
            output = "bg-danger";
        }
        return output;
    };

});
