export function updateTask(state, payload) {
    const index = state.tasks.findIndex((task) => task.id === payload.id);
    Object.assign(state.tasks[index], payload.changes);
}

export function deleteTask(state, id) {
    const index = state.tasks.findIndex((task) => task.id === id);
    state.tasks.splice(index, 1);
}

export function addTask(state, payload) {
    //Aumentar id
    state.tasks.push(payload);
}
