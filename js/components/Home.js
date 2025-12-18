export default {
    template: await fetch('./templates/home.html').then(res => res.text()),
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
        Vue.nextTick(() => {
            AOS.init({ duration: 800, offset: 120 });
        });
    }
};