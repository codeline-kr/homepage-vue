<template>
    <div>
        <v-container class="d-flex align-center justify-center text-center">
            <div class="logo-svg1">
                <svg xmlns="http://www.w3.org/2000/svg" width="1191.2950439453125" height="465.7380065917969" viewBox="0 0 1191.295 465.738">
                    <g id="logo_outline" transform="translate(-801.455 -230.313)">
                        <path
                            class="line1"
                            d="M206.656,29.437A79.86,79.86,0,0,0,94.29,17.948L29.431,70.776A79.873,79.873,0,0,0,130.32,194.632L195.179,141.8a79.871,79.871,0,0,0,11.49-112.366Z"
                            transform="translate(1014.591 230.863) rotate(90)"
                            fill="none"
                            stroke="#d55e4a"
                            stroke-width="1"
                        ></path>
                        <path
                            class="line2"
                            d="M29.431,141.8,334.322,390.155A79.873,79.873,0,0,0,435.211,266.3L130.32,17.948A79.873,79.873,0,0,0,29.431,141.8Z"
                            transform="translate(1452.001 230.863) rotate(90)"
                            fill="none"
                            stroke="#d55e4a"
                            stroke-width="1"
                        ></path>
                        <path
                            class="line3"
                            d="M435.206,266.3,130.315,17.948A79.873,79.873,0,0,0,29.426,141.8L334.317,390.156A79.873,79.873,0,0,0,435.206,266.3Z"
                            transform="translate(1750.306 230.863) rotate(90)"
                            fill="none"
                            stroke="#68a5b8"
                            stroke-width="1"
                        ></path>
                        <path
                            class="line4"
                            d="M17.956,183.149a79.86,79.86,0,0,0,112.367,11.49l64.859-52.828A79.873,79.873,0,0,0,94.292,17.954L29.433,70.782a79.871,79.871,0,0,0-11.49,112.366Z"
                            transform="translate(1992.199 470.888) rotate(90)"
                            fill="none"
                            stroke="#68a5b8"
                            stroke-width="1"
                        ></path>
                    </g>
                </svg>
            </div>
            <div>
                <h1>
                    <img src="@/assets/logo.svg" alt="codeline" :width="$vuetify.breakpoint.xs ? 200 : 230" data-aos="fade-up" />
                </h1>
                <h2 :class="$vuetify.breakpoint.xs ? 'mt-8' : 'mt-12'" data-aos="fade-up" data-aos-delay="200">apps<span></span>web<span></span>design</h2>
                <div class="btn mt-9" data-aos="fade-up" data-aos-delay="250">
                    <v-btn @click="$vuetify.goTo('#portfolios')">Portfolio</v-btn>
                    <v-btn @click="$vuetify.goTo('#aboutus')">Members</v-btn>
                    <v-btn @click="$vuetify.goTo('#contactus')">Contact Us</v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>

<style scoped lang="scss">
.container {
    min-height: 100vh;
}
h1 {
    position: relative;
    z-index: 10;
    transition: 0.5s !important;
}
.logo-svg1 {
    position: absolute;
    height: 50%;
    width: 100%;
    transition: 0.5s;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 0;
    svg {
        position: absolute;
        left: 50%;
        top: -6%;
        transform: translateX(-15%);
        @media #{map-get($display-breakpoints, 'xs-only')} {
            top: -8%;
            transform: translateX(-35%);
        }
        .line1 {
            stroke-dashoffset: 671.2365112304688px;
            stroke-dasharray: 671.2365112304688px;
            animation: line1 2.5s linear 0s both;
            @keyframes line1 {
                to {
                    stroke-dashoffset: 1342.4730224609375px;
                }
            }
        }
        .line2 {
            stroke-dashoffset: 1289.114013671875px;
            stroke-dasharray: 1289.114013671875px;
            animation: line2 2.5s linear 0.5s both;
            @keyframes line2 {
                to {
                    stroke-dashoffset: 2578.22802734375px;
                }
            }
        }
        .line3 {
            stroke-dashoffset: 1289.4727783203125px;
            stroke-dasharray: 1289.4727783203125px;
            animation: line3 2.5s linear 1s both;
            @keyframes line3 {
                to {
                    stroke-dashoffset: 2578.945556640625px;
                }
            }
        }
        .line4 {
            stroke-dashoffset: 671.2374877929688px;
            stroke-dasharray: 671.2374877929688px;
            animation: line4 2.5s linear 1.5s both;
            @keyframes line4 {
                to {
                    stroke-dashoffset: 1342.4749755859375px;
                }
            }
        }
    }
}
h2 {
    transition: 0.5s !important;
    font-size: 3.5rem;
    color: var(--v-fontColor-base);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        background: rgba(#3c3c3c, 0.4);
        border-radius: 50%;
        margin: 0.2em 0.3em 0;
    }
    @media #{map-get($display-breakpoints, 'xs-only')} {
        font-size: 2.3rem;
        span {
            width: 0.4rem;
            height: 0.4rem;
        }
    }
}
.btn {
    @media #{map-get($display-breakpoints, 'xs-only')} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button {
        transition: 0.5s !important;
        letter-spacing: 0;
        font-weight: 700;
        width: 180px;
        font-size: 1.25rem !important;
        padding: 1.2em 0 !important;
        box-shadow: none !important;
        color: #fff !important;
        background: var(--v-secondary-base) !important;
        &:hover {
            transform: translate(-1%, -1%);
            box-shadow: 10px 10px 30px rgba(#000, 0.2) !important;
        }
        &:first-child {
            border-radius: 30px 10px 45px 30px;
            background: var(--v-primary-base) !important;
        }
        &:nth-child(2) {
            border-radius: 45px 10px 45px 10px;
            margin: 0 4px;
            @media #{map-get($display-breakpoints, 'xs-only')} {
                margin: 10px 0;
            }
        }
        &:nth-child(3) {
            border-radius: 45px 30px 30px 10px;
        }
        @media #{map-get($display-breakpoints, 'xs-only')} {
            border-radius: 30px !important;
        }
    }
}
</style>

<script>
export default {};
</script>
