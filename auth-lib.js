let allUsers = [
    {nickname: "admin", password: "1234", groups: ["admin", "manager", "basic"]},
    {nickname: "sobakajozhec", password: "ekh228", groups: ["basic", "manager"]},
    {nickname: "patriot007", password: "russiaFTW", groups: ["basic"]}
];

let allRights = [
"manage content", "play games", "delete users", "view site"
];

let  allGroups = [
    {name: "admin", rights: [allRights[2]]},
    {name: "manager", rights: [allRights[0]]},
    {name: "basic", rights: [allRights[1], allRights[3]]}
]

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
    if (!user) {
        throw Error("Pusto");
    }
    if (allUsers.indexOf(user) === -1){
        throw Error("111");
    }
  allUsers.splice(allUsers.indexOf(user), 1);

}

 //Возвращает массив групп, к которым принадлежит пользователь user
function userGroups(user) {
    return allGroups;
}


 // Добавляет пользователя user в группу group
 function addUserToGroup(user, group) { 
 	console.log(user);
    if (!user || !group) {
        throw Error("exception. undefined value");
    }
    if (!allUsers.indexOf(user)) {
        throw Error("exception. undefined");
    }
    if (!allGroups.indexOf(group)){
        throw Error("exception. undefined");
    }
    allUsers.push(user,group);

    // allUsers.indexOf(user).groups.push(group);

  }

// Удаляет пользователя user из группы group. Должна бросить исключение, если пользователя user нет в группе group
function removeUserFromGroup(user, group) {
    allUsers.splice(allGroups.indexOf(user));
    if (!user || !group) {throw Error("неверно");}

}

// Возвращает массив прав
function rights(right) {
    return allRights;
}

// Создает новое право с именем name и возвращает его
function createRight(name) {
     allRights.push(name)
     return name;
}

// Удаляет право right
function deleteRight(right) {
	let index = allRights.indexOf(right);
    
     if (!right) {
        throw Error("Pusto");
    }
     if (index == -1) {
        throw Error("Pusto");
    }
        allRights.splice(index);
}

// Возвращает массив групп
function groups() {
    return allGroups;
}

// Создает новую группу и возвращает её.
function createGroup(name) { 
    allGroups.push({name:name,rights:[]});
    return allGroups[allGroups.length-1];

}

// Удаляет группу group
function deleteGroup(group) {
    allGroups.splice(allGroups.indexOf(group), 1);
//     if (!group != group){throw Error("fail");}
}

// Возвращает массив прав, которые принадлежат группе group
function groupRights(group) {
    return allRights;
}

// Добавляет право right к группе group
function addRightToGroup(right,group) {

    
}

// Удаляет право right из группы group. Должна бросить исключение, если права right нет в группе group
function removeRightFromGroup(right,group) {
	// let index = allGroups.indexOf(group);
    
 //     if (index == -1) {
 //        throw Error("Pusto");
 //    	}
 //    // allRights.splice(allGroups.indexOf(rights
 //    // allGroups.getValue(index);
 //    let group1 = allGroups[index];
 //    // group.rights.splice()
    console.log(group);
    allGroups.rights.splice(group.rights.indexOf(right));
    console.log(group);
}

function login(username, password) {}

function currentUser() {}

function logout() {}

function isAuthorized(user, right) {}
