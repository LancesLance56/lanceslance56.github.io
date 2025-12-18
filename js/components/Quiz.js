export default {
    template: await fetch('./templates/quiz.html').then(res => res.text()),
    data() {
        return {
            quiz: [
                { question: "What is the most popular festival in Binondo?", options: ["Lantern Festival", "Chinese New Year", "Dragon Boat", "Mooncake Festival"], correct: "Chinese New Year", selected: null, status: null },
                { question: "Which color symbolizes good luck?", options: ["Blue", "White", "Red", "Black"], correct: "Red", selected: null, status: null },
                { question: "What is a common staple food?", options: ["Dimsum", "Pizza", "Burger", "Tacos"], correct: "Dimsum", selected: null, status: null }
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