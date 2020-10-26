import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: { customProperties: true },
        themes: {
            light: {
                primary: '#D55E4A',
                secondary: '#68A5B8',
                //anchor: '#0b172e',
                fontColor: '#3C3C3C',
            },
        },
    },
});
