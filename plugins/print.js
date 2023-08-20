// import Vue from 'vue';
import VueHtmlToPaper from 'vue-html-to-paper';

export default defineNuxtPlugin(nuxtApp => {
    
    const options = {
        name: 'Member Data',
        specs: [
            'fullscreen=yes',
            'titlebar=yes',
            'scrollbars=yes'
        ],
        styles: [
            'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
            'https://unpkg.com/kidlat-css/css/kidlat.css'
        ],
        autoClose: false,
        windowTitle: 'Member Data',
    };
    nuxtApp.vueApp.use(VueHtmlToPaper, options);
})
  