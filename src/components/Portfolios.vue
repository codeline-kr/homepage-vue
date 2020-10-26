<template>
    <v-container id="portfolios">
        <h2 class="text-center mb-10">
            <span class="d-block primary--text mb-2">Our Works</span>
            Recently Added Portfolios
        </h2>
        <v-row>
            <v-col v-for="work in works" :key="work.id">
                <v-hover v-slot="{ hover }">
                    <v-card :class="{ 'on-hover': hover }" class="mx-auto rounded-xl pa-5">
                        <v-img aspect-ratio="1" height="250" min-width="250" :src="require(`@/assets/${work.img}.png`)" position="left top"></v-img>
                        <div class="d-flex justify-space-between align-center mt-5">
                            <v-card-subtitle class="rounded-pill py-1 px-4" v-html="work.type"></v-card-subtitle>
                            <v-btn icon @click="openDialog(work)" v-if="work.details">
                                <v-icon>
                                    mdi-plus-circle
                                </v-icon>
                            </v-btn>
                        </div>
                        <v-card-title class="px-1 pb-2 d-flex flex-column align-start">
                            <div class="year">
                                {{ work.year }}
                            </div>
                            {{ work.title }}
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
                <v-card-title class="d-flex justify-space-between">
                    <span class="title">{{ dialogData.title }}</span>
                    <v-btn icon class="grey--text white" text @click="open = false">
                        <v-icon>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="pt-3">
                    <v-row v-for="d in dialogData.details" :key="d.id">
                        <v-col cols="12" sm="5" class="detail-img">
                            <v-img height="230" :src="require(`@/assets/${d.img}.png`)" position="left top"></v-img>
                        </v-col>
                        <v-col cols="12" sm="7" :class="$vuetify.breakpoint.xs ? 'mb-5' : 'mb-0'">
                            <p class="subtitle-1 grey--text text--darken-3 font-weight-medium">{{ d.title }}</p>
                            <div v-html="d.description"></div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
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
    box-shadow: 5px 5px 20px rgba(#000, 0.1) !important;
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
                title: 'LINC+ 종합성과관리 시스템',
                img: '2020/lincplus_01',
                type: '분석<i>/</i>설계<i>/</i>개발<i>/</i>디자인',
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
                        title: '제목',
                        description: '...',
                    },
                    {
                        id: 5,
                        img: '2020/lincplus_06',
                        title: '제목',
                        description: '...',
                    },
                ],
            },
            {
                id: 2,
                year: '2020.08 - 10',
                title: 'KISTI 머신러닝 데이터구축사업',
                img: '2020/kistimldms_01',
                type: '설계<i>/</i>개발',
                description: '1LINC+ 선정대학 정량/정성 평가, 평가위원풀 관리 및 추출, 업무지원 시스템, CMSLINC+ 선정대학 정량/정성 평가, 평가위원풀 관리 및 추출, 업무지원 시스템, CMS',
                details: [
                    {
                        id: 1,
                        img: '2020/kistimldms_02',
                        title: '평가위원 평가지원',
                        description: '대학이 제출한 자료로 평가위원들이 검토후 정량/정성 평가를 하도록 지원<br/> 보고관리/평가현황',
                    },
                    {
                        id: 2,
                        img: '2020/kistimldms_03',
                        title: '대학 평가자료 제출',
                        description: '100여개 선정대학이 접속 후 평가를 위한 자료 업로드<br/> LINC+ 홈페이지에 게재될 대학정보 편집<br/>사업관리 / 예산변경신청 / 성과관리 / 행사정보',
                    },
                    {
                        id: 3,
                        img: '2020/kistimldms_04',
                        title: '연구재단 실무자 업무지원 및 관리',
                        description: '웹사이트 컨텐츠 관리및 평가를 위한 기반 업무처리<br/>사업관리 / 평가관리 / 평가위원 관리 / 회원관리 / 홈페이지 관리',
                    },
                    {
                        id: 4,
                        img: '2020/kistimldms_05',
                        title: '제목',
                        description: '...',
                    },
                ],
            },
            {
                id: 3,
                year: '2020.10',
                title: '음식주문관리 앱',
                img: '2020/ocms_01',
                type: '개발<i>/</i>IOS<i>/</i>ANDROID<i>/</i>APP',
                description: '1LINC+ 선정대학 정량/정성 평가, 평가위원풀 관리 및 추출, 업무지원 시스템, CMSLINC+ 선정대학 정량/정성 평가, 평가위원풀 관리 및 추출, 업무지원 시스템, CMS',
                details: [
                    {
                        id: 1,
                        img: '2020/ocms_02',
                        title: '평가위원 평가지원',
                        description: '대학이 제출한 자료로 평가위원들이 검토후 정량/정성 평가를 하도록 지원<br/> 보고관리/평가현황',
                    },
                    {
                        id: 2,
                        img: '2020/ocms_03',
                        title: '대학 평가자료 제출',
                        description: '100여개 선정대학이 접속 후 평가를 위한 자료 업로드<br/> LINC+ 홈페이지에 게재될 대학정보 편집<br/>사업관리 / 예산변경신청 / 성과관리 / 행사정보',
                    },
                    {
                        id: 3,
                        img: '2020/ocms_04',
                        title: '연구재단 실무자 업무지원 및 관리',
                        description: '웹사이트 컨텐츠 관리및 평가를 위한 기반 업무처리<br/>사업관리 / 평가관리 / 평가위원 관리 / 회원관리 / 홈페이지 관리',
                    },
                    {
                        id: 4,
                        img: '2020/ocms_05',
                        title: '제목',
                        description: '...',
                    },
                ],
            },
            {
                id: 4,
                year: '2020.10 - 11',
                title: '중소벤처기업부 DW프로젝트',
                img: '2020/dw_01',
                type: '분석<i>/</i>설계<i>/</i>개발',
                description: '1LINC+ 선정대학 정량/정성 평가, 평가위원풀 관리 및 추출, 업무지원 시스템, CMSLINC+ 선정대학 정량/정성 평가, 평가위원풀 관리 및 추출, 업무지원 시스템, CMS',
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
