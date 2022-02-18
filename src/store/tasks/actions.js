export function updateTask(context, payload) {
    context.commit("updateTask", payload);
}

export function deleteTask(context, payload) {
    context.commit("deleteTask", payload);
}

export function addTask(context, payload) {
    context.commit("addTask", payload);
}
