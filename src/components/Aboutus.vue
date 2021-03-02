<template>
    <v-container id="aboutus">
        <div class="logo-svg2">
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
        <h2 class="text-center mb-1">
            <span class="d-block primary--text mb-2" data-aos="fade-up">About Us</span>
            <p data-aos="fade-up" data-aos-delay="150">Introducing Members</p>
        </h2>
        <v-row>
            <v-col v-for="(member, i) in members" :key="member.id" data-aos="fade-up" :data-aos-delay="150 + 100 * i">
                <v-hover v-slot="{ hover }">
                    <v-card :class="{ 'on-hover': hover }" class="mx-auto rounded-xl pa-10 text-center align-center justify-center">
                        <v-img width="203" height="203" class="mx-auto rounded-circle" :src="require(`@/assets/avatar${member.id}.png`)"></v-img>
                        <v-card-subtitle class="d-inline-block rounded-pill py-1 px-6 mt-7 " v-html="member.type"></v-card-subtitle>
                        <div>
                            <v-card-title class="d-inline-block pb-1 mt-2">{{ member.name }}</v-card-title>
                            <v-card-text>
                                <p class="font-weight-medium mb-7">{{ member.mail }}</p>
                            </v-card-text>
                            <v-divider></v-divider>

                            <v-btn class="mt-2" block text @click="member.show = !member.show">
                                <div>more</div>
                                <v-spacer></v-spacer>

                                <v-icon>{{ member.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                            <v-expand-transition>
                                <div v-show="member.show">
                                    <v-card-text>
                                        <p v-html="member.text" class="link"></p>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </div>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
.container {
    position: relative;
}
.logo-svg2 {
    position: absolute;
    height: 50%;
    width: 100%;
    // overflow: hidden;
    transition: 0.5s;
    left: -40%;
    top: -15%;
    svg {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
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
    position: relative;
    z-index: 10;
    font-family: 'Prompt', sans-serif;
    font-size: 1.85rem;
    span {
        font-size: 1.18rem;
        font-weight: 400;
    }
}
.v-card {
    position: relative;
    z-index: 1;
    background: transparent;
    @media #{map-get($display-breakpoints, 'xs-only')} {
        box-shadow: 0 0 15px rgba(#000, 0.1) !important;
    }
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index: -1;
        transform-origin: bottom;
        transform: scaleY(1);
        border-radius: 24px;
        transition: 0.5s;
    }
    transition: 0.5s !important;
    box-shadow: none !important;
    .v-card__subtitle {
        background-color: var(--v-secondary-base);
        color: #fff !important;
        &::v-deep i {
            font-size: 0.8rem;
            font-style: normal;
            vertical-align: 0.05rem;
            font-weight: 100 !important;
        }
    }
    .v-card__title {
        font-size: 1.125rem;
        letter-spacing: 0;
        font-weight: 700 !important;
    }
}
.v-card.on-hover {
    @media #{map-get($display-breakpoints, 'xs-only')} {
        box-shadow: none !important;
    }
    &::before {
        transform: scaleY(0.85);
        background-color: var(--v-primary-base);
        box-shadow: 10px 10px 30px rgba(#000, 0.2) !important;
    }
    transform: translate(-1%, -1%);
    .v-image.v-responsive {
        box-shadow: 0 3px 40px rgba(#000, 0.3) !important;
    }
    .v-card__subtitle {
        background-color: #fff;
        color: var(--v-primary-base) !important;
        box-shadow: 3px 3px 15px rgba(#000, 0.15);
        font-weight: 500;
    }
    .v-card__title {
        color: #fff;
        font-weight: 500 !important;
    }
    .v-card__text {
        color: #fff;
        font-weight: 300;
    }
    button {
        color: #fff;
    }
    .link::v-deep a {
        color: #fff !important;
    }
}
</style>

<script>
export default {
    data: () => ({
        members: [
            {
                id: 1,
                type: '분석<i>/</i>설계<i>/</i>개발',
                name: '이상돈 (20년)',
                mail: 'sdlee@code-line.kr',
                show: false,
                text: `
                    한국연구재단 LINC+ 대학평가<br />
                    한국연구재단 웹사이트<br />
                    한국화학연구원 신약개발플랫폼<br />
                    포베어스 학부모 돌보미 매칭앱<br />
                    카바타 데이터마켓<br />
                    김천시청 감사시스템<br />
                    대전정보문화산업 진흥원 사업관리<br />
                    한국원자력안전기술원 생활방사선 관리<br />
                    한국원자력안전기술원 기록물관리<br />
                    병무청 차세대 고도화(DW)<br />
                    병무청 인터넷전자민원<br />
                    병무청 사회복무 프로젝트<br />
                    KISTI 슈퍼컴퓨터 사용자정보 통합관리<br />
                    KISTI 슈퍼컴퓨터 운영업무 통합관리<br />
                    그룹웨어<br />
                    KT 네오스 DB<br />
                    여행사 ERP<br />
                    대덕대학 학사정보시스템<br />
                    ERP(구매재고, POS, 회계, 고객)
                `,
            },
            {
                id: 2,
                type: '분석<i>/</i>설계<i>/</i>개발',
                name: '김영명 (17년)',
                mail: 'ymkim@code-line.kr',
                show: false,
                text: `
                    한국연구재단 LINC+ 대학평가<br/>
                    한국연구재단 웹사이트<br/>
                    충남대학교 대표앱 및 수강신청앱<br/>
                    충남대학교 학생경력관리<br/>
                    충남대학교 통합메시지(PMS)<br/>
                    한국화학연구원 신약개발플랫폼<br/>
                    포베어스 학부모 돌보미 매칭앱<br/>
                    한국원자력안전기술원 생활방사선 관리<br/>
                    한국원자력안전기술원 기록물관리<br/>
                    병무청 인터넷전자민원<br/>
                    병무청 사회복무 프로젝트<br/>
                    KISTI 슈퍼컴퓨터 사용자정보 통합관리<br/>
                    KISTI 슈퍼컴퓨터 운영업무 통합관리<br/>
                    대덕대학 학사정보시스템<br/>
                    기타 ETRI 연구과제
                `,
            },
            {
                id: 3,
                type: '디자인<i>/</i>퍼블리싱',
                name: '전미선 (17년)',
                mail: 'hdkw@code-line.kr',
                show: false,
                text: `
                    웹/앱 디자인<br/>
                    반응형 웹사이트<br/>
                    특허청<br/>
                    천안시청<br/>
                    공주시<br/>
                    명함인식기 및 인맥관리 솔루션<br/>   
                    <a href="https://hdw.hdstove.com" class="font-weight-medium d-block mt-4" target="_blank">포트폴리오</a>           
                `,
            },
        ],
    }),
};
</script>
