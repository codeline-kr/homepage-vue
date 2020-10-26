<template>
    <v-app>
        <v-main>
            <Intro />

            <Portfolios id="portfolios" />
            <div class="padding"><Aboutus /></div>
            <Contactus />
        </v-main>
    </v-app>
</template>
<style lang="scss"></style>
<style scoped lang="scss">
.padding {
    padding: 10rem 0 5rem;
    @media #{map-get($display-breakpoints, 'xs-only')} {
        padding-top: 5rem;
    }
}
</style>

<script>
import Intro from './components/Intro';
import Portfolios from './components/Portfolios';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';

export default {
    name: 'App',

    components: {
        Intro,
        Portfolios,
        Aboutus,
        Contactus,
    },

    data: () => ({
        //
    }),

    mounted() {},
};
</script>
