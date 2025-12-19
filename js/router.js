import Home from './components/Home.js';
import About from './components/About.js';
import Quiz from './components/Quiz.js';
import Blogs from './components/Blogs.js';
import Blog from './components/Blog.js';

const { createRouter, createWebHashHistory } = VueRouter;

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/quiz-yourself", component: Quiz },
    { path: "/blogs", component: Blogs },
    { path: "/blog/:id", component: Blog, props: true },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, behavior: "smooth", top: 80 };
        } else if (!savedPosition) {
            return { top: 0, behavior: "smooth" };
        }
        return savedPosition;
    }
});