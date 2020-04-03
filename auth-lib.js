let allUsers = [
	{nickname: "admin", password: "1234", groups: ["admin", "manager", "basic"]},
	{nickname: "sobakajozhec", password: "ekh228", groups: ["basic", "manager"]},
	{nickname: "patriot007", password: "russiaFTW", groups: ["basic"]}
];

// Возвращает массив всех пользователей.
function users() {
    return allUsers;
    }

//Создает нового пользователя с указанным логином username и паролем password, возвращает созданного пользователя.
function createUser(name, password) {
    allUsers.push(name, password)
    return name;
}

// Удаляет пользователя user
function deleteUser(user) {
   allUsers.splice(allUsers.indexOf(user));
    
}

// Возвращает массив групп, к которым принадлежит пользователь user
function userGroups(user) {
    return allUsers ;
}

// Добавляет пользователя user в группу group
function addUserToGroup(user, group) {
    
}

// Удаляет пользователя user из группы group. Должна бросить исключение, если пользователя user нет в группе group
function removeUserFromGroup(user, group) {}

// Возвращает массив прав
function rights() {
    let rights = [deleteUser, createUser];
    return rights;
}

// Создает новое право с именем name и возвращает его
function createRight(name) {}

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
