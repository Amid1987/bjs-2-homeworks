function compareArrays(arr1, arr2) {
    let result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
    return result;
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter( user => user.gender === gender).reduce((accumulator, current, index, array) => accumulator + current.age / array.length, 0);
    return result;
       
  }