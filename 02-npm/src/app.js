var _ = require("lodash");

var users = [
  {id: 1, name: "Dan", roles: ["admin"]},
  {id: 2, name: "Foo", roles: ["registered, moderator"]},
  {id: 3, name: "Bar", roles: []},
  {id: 4, name: "Baz", roles: ["registered"]},
];

var admins = _(users)
    .filter(u => _.includes(u.roles, "admin"))
    .map("name");

console.log(admins.value());

users.push({id: 5, name: "Whoa", roles: ["admin"]});

console.log(admins.value());

// Dan: admin
// Foo: registered, moderator
// ...

var userRoleList = _(users)
    .map(u => `${u.name}: ${u.roles.join(", ")}`)
    .value();
console.log(userRoleList);

var user = _.find(users, {id: 4});
console.log(user);

var array = require("lodash/array");
console.log(array.first(users));

var collection = require("lodash/collection");
collection.each(users, user => console.log(user.name));





