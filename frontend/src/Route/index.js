import { Login, Register, Home, NotFound, About, Product, Details, Cart, Payment } from "../Page/index";
import LoginLayout from "../Layout/LoginLayout";
import MainLayout from "../Layout/MainLayout";
export const routes = [
    {
        path: '/', component: Home, layout: MainLayout
    },
    {
        path: '/login', component: Login, layout: LoginLayout
    },
    {
        path: '/register', component: Register, layout: LoginLayout
    },
    {
        path: '/about', component: About, layout: MainLayout
    },
    {
        path: '/product', component: Product, layout: MainLayout
    },
    {
        path: '/product/:id', component: Details, layout: MainLayout
    },
    {
        path: '/cart', component: Cart, layout: MainLayout
    },
    {
        path: '/payment', component: Payment, layout: MainLayout
    },
    {
        path: '*',  component: NotFound, layout: null
    },
]