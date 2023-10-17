import { createRouter, createWebHistory } from "vue-router";
import InboxPage from "../components/pages/InboxPage.vue";
import TodayPage from "../components/pages/TodayPage.vue";
import UpComingPage from "../components/pages/UpComingPage.vue";
import FiltersPage from "../components/pages/FiltersPage.vue";
import PageNotFound from "../components/pages/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: InboxPage,
  },
  {
    path: "/inbox",
    name: "Inbox",
    component: InboxPage,
  },
  {
    path: "/today",
    name: "Today",
    component: TodayPage,
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: UpComingPage,
  },
  {
    path: "/filters",
    name: "Filters",
    component: FiltersPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
