import { createRouter, createWebHistory } from "vue-router";
import AppBody from "../components/AppBody.vue"
import AppLogin from "../components/AppLogin.vue"
import BooksList from "../components/BooksList.vue"
import BookSingle from "../components/BookSingle.vue"
import BooksAdmin from "../components/BooksAdmin.vue"
import BookEdit from "../components/BookEdit.vue"
import UsersList from "../components/UsersList.vue"
import UserEdit from "../components/UserEdit.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: AppBody,
    },
    {
        path: "/login",
        name: "Login",
        component: AppLogin,
    },
    {
        path: "/books",
        name: "Books",
        component: BooksList,
    },
    {
        path: "/book/:bookName",
        name: "Book",
        component: BookSingle,
    },
    {
        path: "/admin/books",
        name: "BooksAdmin",
        component: BooksAdmin,
    },
    {
        path: "/admin/book/:bookId",
        name: "BookEdit",
        component: BookEdit,
    },
    {
        path: "/admin/users",
        name: "Users",
        component: UsersList,
    },
    {
        path: "/admin/user/:userId",
        name: "UserEdit",
        component: UserEdit,
    },
]

const router = createRouter({history: createWebHistory(), routes})
export default router;