    var myApp= angular.module("myModule",[]).controller("myController",function($scope){
        var countries=[
            {name:"India",capital:"New Delhi",currency:"Indian Rupee (INR)",population: "Approximately 1.3 billion"},
            {name:"Afghanistan",capital:"Kabul",currency:"Afghan Afghani (AFN)",population: "Approximately 38 million"},
            {name:"Bangladesh",capital:"Dhaka",currency:"Bangladeshi Taka (BDT)",population: "Approximately 166 million"},
            {name:"Cambodia",capital:"Phnom Penh",currency:" Cambodian Riel (KHR)",population: "Approximately 16.7 million"},
            {name:"Georgia",capital:"Tbilisi",currency:"Georgian Lari (GEL)",population: "Approximately 3.7 million"}
        ];
        $scope.countries=countries;
    });