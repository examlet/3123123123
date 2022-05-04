<script setup lang="ts">
const mobileMenuCollapsed = ref(true);
const toggleMobileMenu = () => (mobileMenuCollapsed.value = !mobileMenuCollapsed.value);
const scrollIntoView = (elementId: string) => {
    document.getElementById(elementId).scrollIntoView();
    mobileMenuCollapsed.value = true;
};
</script>

<template>
    <div bg="[#ffffff]" flex flex-col h-screen>
        <header fixed top-0 left-0 right-0 h-64px z-99>
            <div bg="[#ffffff]" border="b [#e7e7e7]" w-full h-full z-100 absolute>
                <div h-full w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <div flex flex-row justify-between items-center h-full>
                        <div flex items-center>
                            <div cursor-pointer flex xl:hidden items-center mr-20px @click="toggleMobileMenu">
                                <div relative inline-block w-20px h-24px space-y-1 h-full>
                                    <div bg="[#35495e]" top="-6px" w-20px h-2px rounded-4px />
                                    <div bg="[#35495e]" w-20px h-2px rounded-4px />
                                    <div bg="[#35495e]" bottom="-6px" w-20px h-2px rounded-4px />
                                </div>
                            </div>
                            <div cursor-pointer fw500 inline-flex items-center text="16px"
                                @click="scrollIntoView('start')">
                                <img src="https://pinia.vuejs.org/logo.svg" w-24px h-24px>
                                <div ml-5px>chessedu<span fw400>cation</span></div>
                            </div>
                            <div hidden sm:block>
                                <QLink secondary @click="scrollIntoView('about')" ml-40px>О ЗАНЯТИЯХ</QLink>
                                <QLink secondary @click="scrollIntoView('trener')" ml-20px>ПРЕПОДАВАТЕЛЬ</QLink>
                                <QLink secondary @click="scrollIntoView('reviews')" ml-20px>ОТЗЫВЫ</QLink>
                                <QLink secondary @click="scrollIntoView('price')" ml-20px>СТОИМОСТЬ</QLink>
                                <QLink primary @click="scrollIntoView('action')" ml-20px>ПРОБНЫЙ УРОК</QLink>
                            </div>
                        </div>
                        <QButton bordered lg:hidden>
                            <div mb-3px i-carbon-phone-voice-filled />
                        </QButton>
                        <div leading-snug hidden lg:block>
                            +7 (987) 189-88-88
                            <div text-12px text-center>
                                <span underline underline-offset-4 underline-opacity-50 decoration-gray-500 decoration-1
                                    decoration-solid>whatsapp</span>
                                или
                                <span underline underline-offset-4 underline-opacity-50 decoration-gray-500 decoration-1
                                    decoration-solid>telegram</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="absolute block xl:hidden bg-[#fff] rounded top-64px shadow-lg w-full transition duration-300 -z-1"
                :class="[mobileMenuCollapsed ? '-translate-y-120%' : '-translate-y-0']">
                <div flex flex-col py-14px text-18px w="full xl:1024px" px="20px sm:10px lg:0" relative mx-auto h-full>
                    <div class="h-28px">
                        <button @click="scrollIntoView('about')" class="flex items-center justify-start">
                            <div class="i-carbon-devices" />
                            <div class="ml-10px">О ЗАНЯТИЯХ</div>
                        </button>
                    </div>
                    <div class="h-28px mt-14px">
                        <button @click="scrollIntoView('trener')" class="flex items-center justify-start">
                            <div class="i-carbon-education" />
                            <div class="ml-10px">ПРЕПОДАВАТЕЛЬ</div>
                        </button>
                    </div>
                    <div class="h-28px mt-14px">
                        <button @click="scrollIntoView('reviews')" class="flex items-center justify-start">
                            <div class="i-carbon-chat" />
                            <div class="ml-10px">ОТЗЫВЫ О НАС</div>
                        </button>
                    </div>
                    <div class="h-28px mt-14px">
                        <button @click="scrollIntoView('price')" class="flex items-center justify-start">
                            <div class="i-carbon-calculator-check" />
                            <div class="ml-10px">СТОИМОСТЬ</div>
                        </button>
                    </div>
                    <div class="h-28px mt-14px">
                        <button @click="scrollIntoView('action')" class="flex items-center justify-start">
                            <div class="i-carbon-star-review" fw-600/>
                            <div class="ml-10px" fw-600>ПРОБНЫЙ УРОК</div>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <main class="fixed left-10px right-10px top-74px bottom-43px overflow-y-auto pr-10px">
            <slot />
        </main>

        <footer fixed h-33px bottom-0 left-0 right-0 border="t [#e7e7e7]">
            <div w="full xl:1024px" px="20px sm:10px lg:0" relative mx-auto h-full>
                <div py-5px text="2px lg:14px" fw500>
                    <QLink>Не является публичной офертой</QLink>
                </div>
            </div>
        </footer>
    </div>
</template>