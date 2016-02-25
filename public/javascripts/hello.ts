function createTask(name : string, description : string) {
	var output = "task " + name + " " + description;
	return output;
}

alert(createTask("push up", "these suck"));