const { createApp, nextTick } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

const Home = {
	template: "#home-template",
	methods: {
		scrollToContent() {
			const el = document.getElementById("content-target");
			if (el) {
				const y = el.getBoundingClientRect().top + window.scrollY - 80;
				window.scrollTo({ top: y, behavior: 'smooth' });
			}
		}
	},
	mounted() {
		nextTick(() => {
			AOS.init({ duration: 800, offset: 120 });
		});
	}
};

const About = {
	template: "#about-template",
	mounted() {
		nextTick(() => {
			AOS.init({ duration: 800, offset: 100 });
		});
	}
};

const Quiz = {
  template: "#quiz-template",
  data() {
		return {
			quiz: [
				{
					question: "What is the most popular festival in Binondo?",
					options: ["Lantern Festival", "Chinese New Year", "Dragon Boat", "Mooncake Festival"],
					correct: "Chinese New Year",
					selected: null,
					status: null
				},
				{
					question: "Which color symbolizes good luck?",
					options: ["Blue", "White", "Red", "Black"],
					correct: "Red",
					selected: null,
					status: null
				},
				{
					question: "What is a common staple food?",
					options: ["Dimsum", "Pizza", "Burger", "Tacos"],
					correct: "Dimsum",
					selected: null,
					status: null
				}
			]
		};
	},
  mounted() {
		nextTick(() => {
			AOS.init({ duration: 800, offset: 100 });
		});
	},
	methods: {
		checkAnswer(index) {
			const q = this.quiz[index];
			if (!q.selected) {
				q.status = "Please select an option!";
				return;
			}
			if (q.selected === q.correct) {
				q.status = "Correct!";
			} else {
				q.status = "Try Again.";
			}
		}
	}
};

const routes = [
	{ path: "/", component: Home },
	{ path: "/about", component: About },
  { path: "/quiz-yourself", component: Quiz }
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: "smooth",
				top: 80
			};
		} else if (!savedPosition) {
			return { top: 0, behavior: "smooth" };
		}
		return savedPosition;
	}
});

const app = createApp({});
app.use(router);
app.mount("#app");