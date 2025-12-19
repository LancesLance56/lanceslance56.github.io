export default {
    template: await fetch('./templates/quiz.html').then(res => res.text()),
    data() {
        return {
            quiz: [
                { question: "What is the most popular festival in Binondo?", options: ["Lantern Festival", "Chinese New Year", "Dragon Boat", "Mooncake Festival"], correct: "Chinese New Year", selected: null, status: null },
                { question: "Which color symbolizes good luck?", options: ["Blue", "White", "Red", "Black"], correct: "Red", selected: null, status: null },
                { question: "Which is a common Chinese Dish?", options: ["Dimsum", "Pizza", "Burger", "Tacos"], correct: "Dimsum", selected: null, status: null },
                { question: "What region of China do most Tsinoys originate from?", options: ["Beijing", "Xi'An", "Yunnan", "Fujian"], correct: "Fujian", selected: null, status: null },
                { question: "Around when was the earliest confirmed trade conducted between China and the Philippines?", options: ["~900s AD", "~200s BC", "~1500s AD", "~1200s AD"], correct: "~900s AD", selected: null, status: null },
            ]
        };
    },
    mounted() {
        Vue.nextTick(() => {
            AOS.init({ duration: 800, offset: 100 });
        });
    },
    methods: {
        checkAnswer(index) {
            const q = this.quiz[index];
            if (!q.selected) { q.status = "Please select an option!"; return; }
            q.status = (q.selected === q.correct) ? "Correct!" : "Try Again.";
        }
    }
};