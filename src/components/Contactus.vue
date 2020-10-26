<template>
    <v-container id="contactus">
        <v-row class="text-center text-md-left">
            <v-col cols="12" md="4">
                <h3 class="mb-2 d-flex align-center justify-center justify-md-start primary--text font-weight-bold subtitle-1" color="primary"><v-icon class="mr-2" color="primary">mdi-home-city-outline</v-icon>Contact Us</h3>
                <p class="mb-1">
                    sdlee@code-line.kr<br />
                    010-9421-1155
                </p>
                <address class="mt-3">대전시 서구 도안북로 88<br />산업협력단 창업지원센터 O1-504호</address>
            </v-col>
            <v-col cols="12" md="4" class="mt-5 mt-md-0">
                <h3 class="mb-2 d-flex align-center  justify-center justify-md-start primary--text font-weight-bold subtitle-1"><v-icon class="mr-2" color="primary">mdi-github</v-icon>GitHub</h3>
                <p>https://github.com/codeline-kr</p>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <footer class="grey--text overline text-center text-md-left mt-10 d-flex  justify-center justify-md-space-between align-md-center">
            <div>CODELINE Corp. © 2020</div>
            <img src="@/assets/small_logo.svg" alt="codeline" @click="$vuetify.goTo(0)" />
        </footer>
    </v-container>
</template>
<style scoped lang="scss">
address {
    font-size: 0.9rem;
    font-style: normal;
}
footer img {
    width: 50px;

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
        width: 20px;
        margin-left: 8px;
    }
}
</style>
<script>
export default {};
</script>
