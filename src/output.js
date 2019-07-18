"use strict";

var name = "Kasara";
var person = {
	name: name,
	getName: function getName() {
		return this.name;
	}
};
console.log(person.getName());
