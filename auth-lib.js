// let allUsers = [
// 	{nickname: "admin", password: "1234", groups: ["admin", "manager", "basic"]},
// 	{nickname: "sobakajozhec", password: "ekh228", groups: ["basic", "manager"]},
// 	{nickname: "patriot007", password: "russiaFTW", groups: ["basic"]}
// ];
let allUsers = {
    "admin" : {password: "1234", groups: ["admin", "manager", "basic"]}
};

// let allGroups = {
// 	"admin" : {"rights" :[rights[2]],"users" :["123"]},
// 	"manager": {"rights" :[rights[1]], "users" :["1234"]},
// 	"basic": {"rights" :[rights[3]], "users" :["12345"]}
	
// }
// let allGroups = {
// 	"admin" : {"rights" :[rights[2]],"users" :["123"]}
	
// }

let allGroups = {
	"admin": [rights[2]],
	"manager": [rights[0]],
	"basic": [rights[1], rights[3]]
}



let allRights = ["manage content", "play games", "delete users", "view site"];


// Возвращает массив всех пользователей.
function users() {
    return allUsers;
    }

//Создает нового пользователя с указанным логином username и паролем password, возвращает созданного пользователя.
function createUser(name, password) {
    let user = {nickname: name, password: password};
    allUsers.push(user)
    return user;
}

// Удаляет пользователя user
function deleteUser(user) {
   allUsers.splice(allUsers.indexOf(user));
    
}



 //Возвращает массив групп, к которым принадлежит пользователь user
function userGroups(user) {
    return allGroups ;
}


 // Добавляет пользователя user в группу group
 function addUserToGroup(user, group) {
    if (user && group){
    //     allUsers.forEach((element) => {
    //      console.log(element)
    //      if (element.nickname == user){
    //          element.groups.push(group)
    //      }
        
    // })
        allUsers.user.groups.push(group);
    }else {
        throw new Error();
        
    }
     
}



// Удаляет пользователя user из группы group. Должна бросить исключение, если пользователя user нет в группе group
function removeUserFromGroup(user, group) {
    
}

// Возвращает массив прав
function rights() {
     return allRights;
}

// Создает новое право с именем name и возвращает его
function createRight(name) {
     allRights.push(name)
     return name;
}

// Удаляет право right
function deleteRight(right) {}

// Возвращает массив групп
function groups() {}

// Создает новую группу и возвращает её.
function createGroup(name) {}

// Удаляет группу group
function deleteGroup(group) {}

// Возвращает массив прав, которые принадлежат группе group
function groupRights() {}

// Добавляет право right к группе group
function addRightToGroup() {}

// Удаляет право right из группы group. Должна бросить исключение, если права right нет в группе group
function removeRightFromGroup() {}

function login(username, password) {}

function currentUser() {}

function logout() {}

function isAuthorized(user, right) {}
