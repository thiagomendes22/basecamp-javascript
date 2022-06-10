function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
    if(value === 'Admin') {
        admins.push(key);
      }
    }
    return admins;
}

const usuarios = new map();

usuario.set('Leuiz', 'Admin');
usuario.set('Thiago', 'Admin');
usuario.set('Nah', 'user');
usuario.set('Nathalia', 'Admin');

console.log(getAdmins(usuarios));
