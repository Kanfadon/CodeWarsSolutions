function friend(friends){
    let validFriends = [];
    return friends.forEach(function(item) {
      if (item.length != 4) {
          validFriends.push(item);
      }
    });
    return validFriends;
  }