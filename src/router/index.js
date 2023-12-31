import Vue from "vue";
import VueRouter from "vue-router";

const PostDetail = () => import("../modules/common/components/PostDetail");

const Home = () => import("../modules/home/views/Home");
const News = () => import("../modules/news/views/NewsActivity");
const Introduce = () => import("../modules/about/views/Introduce");
const ServiceIntro = () => import("../modules/services/view/Introduce");
const Contact = () => import("../modules/contact/view/Contact");
const Volunteer = () => import("../modules/volunteer/views/Volunteer");
const Other = () => import("../modules/other/views/other");

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "Introduce",
        component: Introduce
    },
    {
        path: "/services",
        name: "ServiceIntro",
        component: ServiceIntro
    },
    {
        path: "/news",
        name: "News",
        component: News
    },
    {
        path: "/volunteer",
        name: "Volunteer",
        component: Volunteer
    },
    {
        path: "/other",
        name: "Other",
        component: Other
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/post/:id",
        name: "PostDetail",
        component: PostDetail
    },
    {
        path: "*",
        name: "Home",
        component: Home
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
