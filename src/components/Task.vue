<template>
    <q-item :class="localTask.completed ? 'bg-green-1' : ''" v-ripple clickable>
        <q-item-section side top>
            <q-checkbox
                v-model="localTask.completed"
                class="no-pointer-events"
                @click="
                    updateTask({
                        id: localTask.id,
                        changes: {
                            completed: !localTask.completed,
                        },
                    })
                "
            >
            </q-checkbox>
        </q-item-section>
        <q-item-section :class="localTask.completed ? 'text-strike' : ''">
            <q-item-label>
                {{ localTask.name }}
            </q-item-label>
        </q-item-section>
        <q-item-section side>
            <q-btn
                flat
                dense
                round
                color="red"
                icon="delete"
                @onclick="deleteTask"
            >
            </q-btn>
        </q-item-section>
        <q-item-section side>
            <q-icon name="event"></q-icon>
        </q-item-section>
        <q-item-section side>
            <q-item-label>
                {{ localTask.dueDate }}
            </q-item-label>
            <q-item-label>
                <small>
                    {{ localTask.dueTime }}
                </small>
            </q-item-label>
        </q-item-section>
    </q-item>
</template>

<script>
import { mapActions } from "vuex";

export default {
    props: ["task"],
    data() {
        return {
            localTask: this.task,
        };
    },
    methods: {
        ...mapActions("tasks", ["updateTask", "deleteTask"]),
        deleteTask() {
            this.$q
                .dialog({
                    title: "Confirmar",
                    message: "¿Está seguro de eliminar este elemento?",
                    cancel: true,
                    persistent: true,
                })
                .onOk(() => {
                    console.log("Eliminando....");
                    this.deleteTask(this.task.id);
                });
        },
    },
};
</script>
