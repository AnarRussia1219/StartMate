/*
this constructor will have 4 properties: {
    name, String
    description, String
    selected, Boolean
    tasks: Array
}

the selected property is responsible for setting the selected project, ONLY 1 project can have the selected prop as true.
the tasks array is responsible for the tasks of this project,
the tasks array will always contain an object that acts as a task for the project it is in
the task object contains the following: {
    name, String
    description, String
    completed, Boolean
}
*/

function Project(name, description, selected, tasks) {
    // type checking
    if (
        (typeof name === "string" || name instanceof String) &&
        (typeof description === "string" || description instanceof String) &&
        (typeof selected === "boolean" || selected instanceof Boolean) &&
        (Array.isArray(tasks) || tasks instanceof Array)
    ) {
        this.name = name;
        this.description = description;
        this.selected = selected;
        this.tasks = tasks;
    } else {
        throw new Error(`Follow the data types for the Project() constructor: {
            name: String,
            description: String,
            selected: Boolean,
            tasks: Array[],
        }`);
    };
};

export {
    Project
};