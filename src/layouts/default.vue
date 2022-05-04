<script setup lang="ts">
const mobileMenuCollapsed = ref(true);
const toggleMobileMenu = () => (mobileMenuCollapsed.value = !mobileMenuCollapsed.value);
const scrollIntoView = (elementId: string) => {
    document.getElementById(elementId).scrollIntoView();
    mobileMenuCollapsed.value = true;
};
</script>

<template>
    <div bg="[#ffffff]" flex flex-col min-h-screen h-screen>
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
                            <div mb-5px i-carbon-phone-voice-filled />
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
            <div
                class="absolute block xl:hidden bg-[#fff] rounded top-74px shadow-lg w-full transition duration-300 -z-1"
                :class="[mobileMenuCollapsed ? '-translate-y-120%' : '-translate-y-0']">
                <div flex flex-col py-20px text-18px w="full xl:1024px" px="20px sm:10px lg:0" relative mx-auto h-full>
                    <div my-30px>тута еще не сделал</div>
                </div>
            </div>
        </header>

        <main flex="grow shrink-0" basis-auto pt-64px h-full>
            <div class="absolute left-10px right-10px top-10px bottom-10px overflow-y-auto pr-10px mt-64px">
                <slot />
            </div>
        </main>

        <footer border="t [#e7e7e7]" h-full>
            <div w="full xl:1024px" px="20px sm:10px lg:0" relative mx-auto h-full>
                <div py-5px text="2px lg:14px" fw500>
                    <QLink>Не является публичной оффертой</QLink>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
</style>
