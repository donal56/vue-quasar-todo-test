<template>
    <q-page padding class="q-pa-md">
        <h3>TO DO</h3>
        <div class="q-gutter-md" style="max-width: 300px">
            <q-input v-model="newTask.task" label="Tarea" outlined />
            <q-input filled v-model="newTask.dueDate">
                <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                        >
                            <q-date
                                v-model="newTask.dueDate"
                                mask="YYYY-MM-DD HH:mm"
                            >
                                <div class="row items-center justify-end">
                                    <q-btn
                                        v-close-popup
                                        label="Close"
                                        color="primary"
                                        flat
                                    />
                                </div>
                            </q-date>
                        </q-popup-proxy>
                    </q-icon>
                </template>

                <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                        >
                            <q-time
                                v-model="date"
                                mask="YYYY-MM-DD HH:mm"
                                format24h
                            >
                                <div class="row items-center justify-end">
                                    <q-btn
                                        v-close-popup
                                        label="Close"
                                        color="primary"
                                        flat
                                    />
                                </div>
                            </q-time>
                        </q-popup-proxy>
                    </q-icon>
                </template>
            </q-input>
        </div>
        <br />

        <q-input
            outlined
            v-model="busqueda"
            label="Buscar"
            @keypress.enter="agregarTarea"
        />
        <br />
        <q-list bordered padding separator>
            <Task
                v-for="task in this.getTasks"
                :key="task.id"
                :task="task"
            ></Task>
        </q-list>
    </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            busqueda: "",
            newTask: {
                task: "",
                dueTime: "",
                dueDate: new Date(),
            },
        };
    },
    computed: {
        ...mapGetters("tasks", ["getTasks"]),
    },
    methods: {
        ...mapActions("tasks", ["addTask"]),
        agregarTarea() {
            this.addTask({
                name: this.busqueda,
                dueDate: null,
                dueTime: null,
                completed: false,
            });

            this.busqueda = "";
        },
    },
    components: {
        Task: require("components/Task.vue").default,
    },
};
</script>

<style></style>
