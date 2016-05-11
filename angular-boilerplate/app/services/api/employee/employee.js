angular.module('employee.service', [])
    .factory('employeeService', ['$http', employeeService]);



function employeeService($http) {
    var employee = {};
    employeeList = {
            "employeeDetails": [{
                "id": 1,
                "firstname": "Prasanna",
                "lastname" : "Champ",
                "gender" : "male",
                "department": "Developer",
                "salary": 1000,
                "image": "http://cache4.asset-cache.net/fk/176794537.jpg?v=1&c=IWSAsset&k=1&f=2&d=4575EEE0F3AA8377CD9D0036C287379E479DFF9E20496F56146E8D247CE15381",
                "username": "prasanna@yopmail.com",
                "password": "12345"
            },{
                "id": 2,
                "firstname": "Ayushi",
                "lastname" : "Pachange",
                "gender" : "female",
                "department": "I.T",
                "salary": 1000,
                "image": "resource/images/IMG_3050.JPG",
                "username": "ayush@yopmail.com",
                "password": "12345"
            }, {
                "id": 3,
                "firstname": "Bobo",
                "lastname" : "Jack",
                "gender" : "male",
                "department": "Project manager",
                "salary": 100000,
                "image": "resource/images/textures-selection-nice-high-resolution_2165080.jpg",
                "username": "bobo@yopmail.com",
                "password": "12345"
            }, {
                "id": 4,
                "firstname": "Baby",
                "lastname" : "Champ",
                "gender" : "male",
                "department": "developer",
                "salary": 2000,
                "image": "resource/images/404.png",
                "username": "baby@yopmail.com",
                "password": "12345"
            }, {
                "id": 5,
                "firstname": "Nilesh",
                "lastname" : "Mahajan",
                "gender" : "male",
                "department": "Designer",
                "salary": 5500,
                "image": "resource/images/6309_1280x800.jpg",
                "username": "nilesh@yopmail.com",
                "password": "12345"
            }, {
                "id": 6,
                "firstname": "Amol",
                "lastname" : "Nivgune",
                "gender" : "male",
                "department": "Manager",
                "salary": 100500,
                "image": "resource/images/brand-avatar.jpg",
                "username": "amol@yopmail.com",
                "password": "12345"
            }, {
                "id": 7,
                "firstname": "Ganesh",
                "lastname" : "Patro",
                "gender" : "male",
                "department": "Accountant",
                "salary": 1000,
                "image": "resource/images/ipgeo.png",
                "username": "ganesh@yopmail.com",
                "password": "12345"
            }]
        };

    employee.getEmployeeList = getEmployeeList;
    employee.updateEmployeeList = updateEmployeeList;
    employee.deleteEmployee = deleteEmployee;
    employee.getEmployee = getEmployee;
    employee.setEmployeeList = setEmployeeList;

    return employee;

    function getEmployeeList() {
        return employeeList;
    }

    function getEmployee(userId) {
        if(!isNaN(userId) && typeof(userId) == "number" && userId > 0) {
            return employeeList.employeeDetails[userId - 1];
        }
    }

    function updateEmployeeList(userId, data) {
        
        if (!isNaN(userId) && typeof(userId) == "number" && userId > 0) {
            employeeList.employeeDetails.splice(userId - 1, 1);
            employeeList.employeeDetails.push(data);

            return employeeList;
        }
        return false;
    }

    function setEmployeeList(data) {
        console.log(data);

        if (data != null) {
            console.log(data);
            employeeList.employeeDetails.push(data);

            return employeeList;
        }
        return false;
    }

    function deleteEmployee(userId) {
        
        if (!isNaN(userId) && typeof(userId) == "number" && userId > 0) {
            employeeList.employeeDetails.splice(userId - 1, 1);
            return employeeList;
        }
        return false;
    }
    //END
};
