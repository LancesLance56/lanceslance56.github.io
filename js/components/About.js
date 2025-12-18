export default {
  template: await fetch('./templates/about.html').then(res => res.text()),
  mounted() {
    Vue.nextTick(() => {
      AOS.init({duration: 800, offset: 100});
    });
  }
};