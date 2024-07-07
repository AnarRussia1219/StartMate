// the task constructor is documented in ./Project.js
function Task(name, description, completed) {
    // type checking
    if (
        (typeof name === "string" || name instanceof String) &&
        (typeof description === "string" || description instanceof String) &&
        (typeof completed === "boolean" || completed instanceof Boolean)
    ) {
        this.name = name;
        this.description = description;
        this.completed = completed;
    } else {
        throw new Error(`Follow the data types for the Task() constructor: {
            name: String,
            description: String,
            completed: Boolean,
        }`);
    };
};

export {
    Task
};