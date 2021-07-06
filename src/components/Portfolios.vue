<template>
    <v-container id="portfolios">
        <h2 class="text-center mb-7">
            <span class="d-block primary--text mb-2" data-aos="fade-up">Our Works</span>
            <p data-aos="fade-up" data-aos-delay="150">Recently Added Portfolios</p>
        </h2>
        <div class="text-center" data-aos="fade-up" data-aos-delay="200">
            <h3 class="mb-3 mb-md-8 rounded-pill primary d-inline-block px-10 py-2 white--text">
                WEB
            </h3>
        </div>
        <v-row>
            <v-col v-for="(work, i) in works.slice().reverse()" :key="work.id" data-aos="fade-up" :data-aos-delay="200 + 100 * i">
                <v-hover v-slot="{ hover }">
                    <v-card :class="{ 'on-hover': hover }" class="mx-auto rounded-xl pa-5">
                        <v-img aspect-ratio="1" height="250" min-width="300" :src="require(`@/assets/${work.img}.png`)" position="left top"></v-img>
                        <div class="d-flex justify-space-between align-center mt-5">
                            <v-card-subtitle class="rounded-pill py-1 px-4" v-html="work.type"></v-card-subtitle>
                            <v-btn icon @click="openDialog(work)" v-if="work.details">
                                <v-icon> mdi-plus-circle </v-icon>
                            </v-btn>
                        </div>
                        <v-card-title class="px-1 pb-2 d-flex flex-column align-start">
                            <div class="year">
                                {{ work.year }}
                            </div>
                            <div style="line-height:1.4" class="my-1">{{ work.title }}</div>
                        </v-card-title>
                        <v-card-text class="px-1">
                            {{ work.description }}
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
        <v-dialog v-if="open" scrollable v-model="open" width="900px">
            <v-card class="rounded-xl">
                <v-toolbar elevation="0">
                    <v-toolbar-title class="title text-truncate pl-3">{{ dialogData.title }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon class="grey--text white" text @click="open = false">
                        <v-icon> mdi-close </v-icon>
                    </v-btn>
                </v-toolbar>
                <v-divider class="grey lighten-4"></v-divider>
                <v-card-text class="pt-3">
                    <v-row>
                        <v-col flat v-for="d in dialogData.details" :key="d.id" style="min-width:300px" :class="$vuetify.breakpoint.xs ? 'py-4' : 'py-6'">
                            <div class="detail-img">
                                <v-img height="250" :src="require(`@/assets/${d.img}.png`)" position="left top"></v-img>
                            </div>
                            <div class="subtitle-1 grey--text text--darken-3 font-weight-medium text-center mt-3 mb-1">{{ d.title }}</div>
                            <div v-html="d.description" class="text-center"></div> </v-col
                    ></v-row>
                </v-card-text>
            </v-card>
        </v-dialog>

        <div class="text-center pt-md-10" data-aos="fade-up" data-aos-delay="300">
            <h3 class="mb-3 mt-10 mb-md-8 mt-md-16  rounded-pill primary d-inline-block px-10 py-2 white--text">
                APP
            </h3>
        </div>
        <v-row>
            <v-col v-for="(app, i) in apps.slice().reverse()" :key="app.id" data-aos="fade-up" :data-aos-delay="300 + 100 * i">
                <v-hover v-slot="{ hover }">
                    <v-card :class="{ 'on-hover': hover }" class="mx-auto rounded-xl pa-5">
                        <v-img aspect-ratio="1" height="250" min-width="250" :src="require(`@/assets/${app.img}.png`)" position="left top"></v-img>
                        <div class="d-flex justify-space-between align-center mt-5">
                            <v-card-subtitle class="rounded-pill py-1 px-4" v-html="app.type"></v-card-subtitle>
                            <v-btn v-if="app.link" icon :href="app.link" target="_blank">
                                <img src="@/assets/googleplay_logo.svg" width="16" />
                            </v-btn>
                        </div>
                        <v-card-title class="px-1 pb-2 d-flex flex-column align-start">
                            <div class="year">
                                {{ app.year }}
                            </div>
                            <div style="line-height:1.4" class="my-1">{{ app.title }}</div>
                        </v-card-title>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
h2 {
    font-family: 'Prompt', sans-serif;
    font-size: 1.85rem;
    span {
        font-size: 1.18rem;
        font-weight: 400;
    }
    p {
        line-height: 1.3;
    }
}
.v-dialog .v-card {
    background: #f8f8f8;
}
.v-dialog__content::v-deep .v-dialog {
    border-radius: 24px !important;
    .title {
        font-family: 'S-CoreDream' !important;
    }
}
.v-card {
    transition: 0.5s !important;
    box-shadow: none !important;
    position: relative;
    z-index: 10;
    @media #{map-get($display-breakpoints, 'xs-only')} {
        box-shadow: 0 0 15px rgba(#000, 0.1) !important;
    }
    .v-card__subtitle {
        background-color: var(--v-secondary-base);
        color: #fff !important;
        font-family: 'S-CoreDream' !important;
        &::v-deep i {
            font-size: 0.8rem;
            font-style: normal;
            vertical-align: 0.05rem;
            font-weight: 100 !important;
            display: inline-block;
            margin: 0 3px;
        }
    }
    .v-btn {
        background: rgba(#000, 0.04);
        .v-icon {
            color: rgba(#000, 0.2);
        }
    }
    .year {
        font-weight: 600;
        font-size: 0.75rem;
        letter-spacing: 1px;
        line-height: 1.5rem;
        color: rgba(#000, 0.4);
    }
    .v-card__title {
        font-size: 1.125rem;
        letter-spacing: 0;
        font-weight: 700 !important;
        font-family: 'S-CoreDream' !important;
    }
}
.v-card.on-hover {
    transform: translate(-1%, -1%);
    background-color: var(--v-primary-base);
    box-shadow: 10px 10px 30px rgba(#000, 0.2) !important;

    .v-card__subtitle {
        background-color: #fff;
        color: var(--v-primary-base) !important;
        font-weight: 500;
    }
    .year {
        font-weight: 500;
        color: rgba(#fff, 0.5);
    }
    .v-card__title {
        color: #fff;
        font-weight: 500 !important;
    }
    .v-card__text {
        color: #fff;
        font-weight: 300;
    }
    .v-btn {
        background: rgba(#fff, 0.2);
        .v-icon {
            color: #fff;
        }
    }
}
.detail-img .v-responsive {
    box-shadow: 0 5px 20px rgba(#000, 0.15) !important;
}
.v-image {
    border-radius: 16px !important;
}
</style>

<script>
export default {
    data: () => ({
        open: false,
        dialogData: null,
        works: [
            {
                id: 1,
                year: '2020.07 - 10',
                title: 'LINC+ 종합성과관리 시스템 개발',
                img: '2020/lincplus_01',
                type: '분석<i>/</i>설계<i>/</i>개발',
                description: 'LINC+ 선정대학 정량/정성 평가, 평가위원풀 관리 및 추출, 업무지원 시스템, CMSLINC+ 선정대학 정량/정성 평가, 평가위원풀 관리 및 추출, 업무지원 시스템, CMS',
                details: [
                    {
                        id: 1,
                        img: '2020/lincplus_02',
                        title: '평가위원 평가지원',
                        description: '대학이 제출한 자료로 평가위원들이 검토후 정량/정성 평가를 하도록 지원<br/> 보고관리/평가현황',
                    },
                    {
                        id: 2,
                        img: '2020/lincplus_03',
                        title: '대학 평가자료 제출',
                        description: '100여개 선정대학이 접속 후 평가를 위한 자료 업로드<br/> LINC+ 홈페이지에 게재될 대학정보 편집<br/>사업관리 / 예산변경신청 / 성과관리 / 행사정보',
                    },
                    {
                        id: 3,
                        img: '2020/lincplus_04',
                        title: '연구재단 실무자 업무지원 및 관리',
                        description: '웹사이트 컨텐츠 관리및 평가를 위한 기반 업무처리<br/>사업관리 / 평가관리 / 평가위원 관리 / 회원관리 / 홈페이지 관리',
                    },
                    {
                        id: 4,
                        img: '2020/lincplus_05',
                        title: '대학계정관리',
                        description: '',
                    },
                    {
                        id: 5,
                        img: '2020/lincplus_06',
                        title: '평가위원 평가관리',
                        description: '',
                    },
                ],
            },
            {
                id: 2,
                year: '2020.08 - 10',
                title: 'KISTI 머신러닝 데이터구축사업',
                img: '2020/kistimldms_01',
                type: '설계<i>/</i>개발',
                description: 'KISTI 머신러닝 데이터구축 사업 업무파트 개발. 작업자 일일보고 작성기능. 관리자 관리기능(일일보고, 목표대비 실적현황, 근태관리, 근태현황)',
                details: [
                    {
                        id: 1,
                        img: '2020/kistimldms_02',
                        title: '관리자 관리기능',
                        description: '목표대비 실적현황',
                    },
                    {
                        id: 2,
                        img: '2020/kistimldms_03',
                        title: '관리자 관리기능',
                        description: '작업자 근태관리',
                    },
                    {
                        id: 3,
                        img: '2020/kistimldms_04',
                        title: '관리자 관리기능',
                        description: '작업자 근태관련 경고현황',
                    },
                    {
                        id: 4,
                        img: '2020/kistimldms_05',
                        title: '작업자',
                        description: '일일보고 작성기능',
                    },
                ],
            },
            {
                id: 4,
                year: '2020.10 - 11',
                title: '중소벤처기업진흥공단 DW프로젝트',
                img: '2020/dw_01',
                type: '분석<i>/</i>설계<i>/</i>개발',
                description: 'ETL 솔루션(TeraStream)을 활용하여 각 분야 데이터를 추출, 변환 및 적재 후 사용자 친화적인 GUI 및 엑셀파일 형식으로 레포트 출력.',
            },
            {
                id: 5,
                year: '2020.11',
                title: '기초과학연구원 자원신청사이트 개발지원',
                img: '2020/ibs_01',
                type: '설계<i>/</i>개발<i>/</i>디자인',
                description: '기초과학연구원 슈퍼컴퓨터의 Cluster, Data Storage, Gitlab 자원에 대한 사용신청 사이트. 관리자가 신청된 접수건에 대해 처리 및 자원ID 맵핑 처리',
                details: [
                    {
                        id: 1,
                        img: '2020/ibs_02',
                        title: '사용현황 페이지',
                        description: '사용자가 신청한 자원의 사용현황을 API 호출을 통해 보여줍니다.',
                    },
                    {
                        id: 2,
                        img: '2020/ibs_03',
                        title: '관리자 페이지',
                        description: '사용자의 신청에 대한 처리, 자원ID 맵핑 및 기타 관리 기능',
                    },
                    {
                        id: 3,
                        img: '2020/ibs_04',
                        title: '반응형 사용자 사이트',
                        description: '반응형으로 모바일 버전 사이트 제공',
                    },
                    {
                        id: 4,
                        img: '2020/ibs_05',
                        title: '반응형 관리자 사이트',
                        description: '반응형으로 관리자를 위한 모바일 버전 사이트 제공',
                    },
                ],
            },
            {
                id: 6,
                year: '2021.01 - 03',
                title: '지하매설물 관리 시스템',
                img: '2021/bauger_01',
                type: '개발<i>/</i>디자인',
                description: 'Backend API : Spring Boot / Frontend : Vue.js & Vuetify / 반응형 사이트',
                details: [
                    {
                        id: 1,
                        img: '2021/bauger_01',
                        title: '메인 페이지',
                        description: '',
                    },
                    {
                        id: 2,
                        img: '2021/bauger_02',
                        title: '메인 페이지 - 모바일',
                        description: '',
                    },
                    {
                        id: 3,
                        img: '2021/bauger_03',
                        title: '상세 페이지',
                        description: '',
                    },
                    {
                        id: 4,
                        img: '2021/bauger_04',
                        title: '상세 페이지 - 모바일',
                        description: '',
                    },
                ],
            },
            {
                id: 7,
                year: '2021.03 - 06',
                title: '2021 LINC+ 육성사업 정성/정량 평가 개발',
                img: '2020/lincplus_01',
                type: '분석<i>/</i>설계<i>/</i>개발',
                description: '2021년도 LINC+ 육성사업 선정 대학의 정성/정량 평가 시스템 개발 및 기존 시스템 개선',
            },
        ],
        apps: [
            {
                id: 0,
                year: '2020.10',
                title: '음식주문관리 앱 개발지원',
                img: '2020/ocms_01',
                type: '개발<i>/</i>IOS<i>/</i>ANDROID',
                description: 'GRUBHUB, DOORDASH, POSTMATES, UBEREATS를 통해 접수된 주문을 하나의 앱으로 확인할 수 있도록 지원. 연결된 POS 프린터로 주문내역 출력. 판매현황 조회',
            },
            {
                id: 1,
                year: '2021.04',
                title: '운동타이머',
                img: '2021/healthtimer',
                type: '기획<i>/</i>개발<i>/</i>디자인',
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.healthtimer&hl=ko',
            },
            {
                id: 2,
                year: '2021.04',
                title: '하루기록장',
                img: '2021/onedaydiary',
                type: '기획<i>/</i>개발<i>/</i>디자인',
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.onedaydiary&hl=ko',
            },
            {
                id: 3,
                year: '2021.04',
                title: '충남대학교 식당메뉴',
                img: '2021/cnucafeteria',
                type: '기획<i>/</i>개발<i>/</i>디자인',
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.cnucafeteria&hl=ko',
            },
            {
                id: 4,
                year: '2021.05',
                title: '지출 기록장',
                img: '2021/outgoingrecord',
                type: '기획<i>/</i>개발<i>/</i>디자인',
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.outgoingrecord&hl=ko',
            },
            {
                id: 5,
                year: '2021.05',
                title: '레시피 재료비율 계산기',
                img: '2021/recipecalculator',
                type: '기획<i>/</i>개발<i>/</i>디자인',
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.recipe.calculator&hl=ko',
            },
            {
                id: 6,
                year: '2021.05',
                title: '경조사비 기록장',
                img: '2021/eventInout',
                type: '기획<i>/</i>개발<i>/</i>디자인',
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.event.inout&hl=ko',
            },
            {
                id: 7,
                year: '2021.05',
                title: '장바구니 메모',
                img: '2021/shoppinglist',
                type: '기획<i>/</i>개발<i>/</i>디자인',
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.shoppinglist',
            },
            {
                id: 8,
                year: '2021.06',
                title: '나침반과 소음측정',
                img: '2021/compass',
                type: '기획<i>/</i>개발<i>/</i>디자인',
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.compass',
            },
            {
                id: 9,
                year: '2021.06',
                title: '총무의 계산기 - 심플한 더치페이 계산기',
                img: '2021/dutchpay',
                type: '기획<i>/</i>개발<i>/</i>디자인',
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.dutchpay',
            },
            {
                id: 10,
                year: '2021.06',
                title: '체중 기록장 - 다이어트 체중/식단 기록 관리',
                img: '2021/weight-diary',
                type: '기획<i>/</i>개발<i>/</i>디자인',
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.weightdiary',
            },
            {
                id: 11,
                year: '2021.06',
                title: '물때정보',
                img: '2021/tide-time',
                type: '기획<i>/</i>개발<i>/</i>디자인',
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.tidetime',
            },
            {
                id: 12,
                year: '2021.07',
                title: '이름 주소 영문변환',
                img: '2021/romanizer',
                type: '기획<i>/</i>개발<i>/</i>디자인',
                link: 'https://play.google.com/store/apps/details?id=com.hdstove.romanizer',
            },
        ],
    }),
    methods: {
        openDialog(work) {
            this.open = true;
            this.dialogData = work;
        },
    },
};
</script>
