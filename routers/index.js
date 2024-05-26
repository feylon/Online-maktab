import { createRouter, createWebHistory } from "vue-router";
import loginpage from "../src/login.vue";

const router = createRouter(
    {
        history:createWebHistory(),
        routes:
        [
            {path:"/login", component:loginpage}
        ]
    }
);

export default router;