<script lang="ts" setup>
import { BORDER_TYPE, COLOR, Chessboard } from "@/assets/js/Chessboard.js"

const a = ref()
const b = ref()
const c = ref()
onMounted(async () => {
    new Chessboard(a.value, {
        position: "rn2k1r1/ppp1pp1p/3p2p1/5bn1/P7/2N2B2/1PPPPP2/2BNK1RR",
        sprite: { url: "/img/chessboard-sprite.svg" },
        style: {
            cssClass: "blue",
            borderType: BORDER_TYPE.frame
        },
        orientation: COLOR.white
    })

    new Chessboard(b.value, {
        position: "rn2k1r1/ppp1pp1p/3p2p1/5bn1/P7/2N2B2/1PPPPP2/2BNK1RR",
        sprite: { url: "/img/chessboard-sprite.svg" },
        style: {
            cssClass: "green",
            borderType: BORDER_TYPE.frame
        },
        orientation: COLOR.white
    })

    new Chessboard(c.value, {
        position: "rn2k1r1/ppp1pp1p/3p2p1/5bn1/P7/2N2B2/1PPPPP2/2BNK1RR",
        sprite: { url: "/img/chessboard-sprite.svg" },
        style: {
            cssClass: "chessboard-js",
            borderType: BORDER_TYPE.frame
        },
        orientation: COLOR.white
    })
})
</script>

<template>
    <div h-full w-full>
        <section id="start" pt="26px lg:100px">
            <div w="full xl:1024px" px="10px lg:0" relative mx-auto>
                <div grid grid-cols="[auto_1fr]" grid-rows-1>
                    <div>
                        <h1 text="[#222222] 24px xl:64px" fw-500 leading="120%">
                            Индивидуальные уроки<br> по шахматам — онлайн
                        </h1>
                        <h2 text="[#222222] 17px xl:36px" mt-20px fw-500 leading="110%">
                            для подростков и детей от 4-х лет
                        </h2>

                        <div hidden lg:grid grid-cols="[auto_1fr]">
                            <div text="16px xl:20px" pt="20px lg:100px">
                                <div text="12px lg:18px [#6d7885]" mb="5px lg:20px">
                                    Занятия с профессиональным тренером от 600₽,<br>
                                    познакомьтесь с нами на первом бесплатном уроке!
                                </div>
                                <QButton block h="lg:46px" text="16px" leading="lg:46px" w="full xl:300px">
                                    Записаться на пробный урок
                                </QButton>
                                <button mt="30px" onclick="document.getElementById('about').scrollIntoView();">
                                    <div i-carbon-sort-descending w-40px />
                                    <span>Подробнее о занятиях</span>
                                </button>
                            </div>
                            <div px-100px pt-50px>
                                <video rounded-xl preload="auto" playsinline autoplay loop muted>
                                    <source src="/img/video.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>

                        <div grid lg:hidden grid-rows="[auto_1fr]">
                            <div mt-60px>
                                <video rounded-xl preload="auto" playsinline autoplay loop muted>
                                    <source src="/img/video.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div text="16px xl:20px" pt="20px lg:100px">
                                <div text="12px lg:16px [#6d7885]" my="10px" fw-600>
                                    Занятия с профессиональным тренером от 600₽,<br>
                                    познакомьтесь с нами на бесплатном уроке!
                                </div>
                                <QButton block h="lg:46px" text="16px" leading="lg:46px" w="full xl:300px">
                                    Записаться на пробный урок
                                </QButton>
                                <button mt="30px" onclick="document.getElementById('about').scrollIntoView();">
                                    <div i-carbon-sort-descending w-40px />
                                    <span>Подробнее о занятиях</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div absolute right-20px top-20px hidden lg:block rotate-6>
                        <img src="https://pinia.vuejs.org/logo.svg" alt="" width="200" height="200">
                    </div>
                    <div absolute right-0 top-100px lg:hidden rotate-6>
                        <img src="https://pinia.vuejs.org/logo.svg" alt="" width="80" height="80">
                    </div>
                </div>
                <div mt="44px lg:100px" h="240px lg:120px" w="100% lg:90%" grid grid-cols="2 lg:4" gap="20px lg:20px"
                    text="18px" fw500 leading-snug>
                    <div gap-10px>
                        <div block text="[#0077ff] xl" mt="5px lg:0" i-carbon-game-console></div>
                        <div text="12px lg:18px">Занятия в игровом формате</div>
                        <div text="12px lg:14px [#6d7885]" mt="5px lg:10px">
                            От игры с пешкой до партии в слепую
                        </div>
                    </div>
                    <div gap-10px>
                        <div text="[#0077ff] xl" mt="5px lg:0" i-carbon-star-review></div>
                        <div text="12px lg:18px">Решение интересных задач</div>
                        <div col-span="2 lg:1" text="12px lg:14px [#6d7885]" mt="5px lg:10px">
                            Тактический штурм, задания на логику
                        </div>
                    </div>
                    <div gap-10px>
                        <div text="[#0077ff] xl" mt="5px lg:0" i-carbon-cloud-logging></div>
                        <div text="12px lg:18px">Материал сохраняется на платформе</div>
                        <div col-span="2 lg:1" text="12px lg:14px [#6d7885]" mt="5px lg:10px">
                            Домашние задания и видео с теорией
                        </div>
                    </div>
                    <div gap-10px>
                        <div text="[#0077ff] xl" mt="5px lg:0" i-carbon-pedestrian-child></div>
                        <div text="12px lg:18px">Практика и результат на турнирах</div>
                        <div text="12px lg:14px [#6d7885]" mt="5px lg:10px">
                            Поиск турниров и получение разряда
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" pt="44px xl:94px">
            <div w="full xl:1024px" px="10px lg:0" relative mx-auto>
                <div text="24px lg:36px [#222222]" fw600 mb="20px lg:40px">Как проходят занятия?</div>

                <div grid grid-cols="1 lg:[1fr_1fr_1fr]" gap-30px>
                    <div grid grid-rows="[auto_1fr]" gap-20px>
                        <div items-center flex-inline>
                            <div text="42px [#0077ff]" fw800>1</div>
                            <div text="20px lg:24px [#222222]" fw600 ml-20px>Подготовка к уроку</div>
                        </div>
                        <div text="16px lg:20px" fw400 leading-tight w="100% lg:80%" pl="lg:10px">
                            Подключаемся к Zoom по ссылке, настраиваемся на продуктивный час
                        </div>
                    </div>

                    <div grid grid-rows="[auto_1fr]" gap-20px>
                        <div items-center flex-inline>
                            <div text="42px [#60d471]" fw800>2</div>
                            <div text="20px lg:24px [#222222]" fw600 ml-20px>Теоретическая часть</div>
                        </div>
                        <div text="16px lg:20px" fw400 leading-tight w="100% lg:80%" pl="lg:10px">
                            Презентация новой темы
                            с интерактивными примерами
                        </div>
                    </div>

                    <div grid grid-rows="[auto_1fr]" gap-20px>
                        <div items-center flex-inline>
                            <div text="42px [#ffcc44]" fw800>3</div>
                            <div text="20px lg:24px [#222222]" fw600 ml-20px>Практическая часть</div>
                        </div>
                        <div text="16px lg:20px" fw400 leading-tight w="100% lg:80%" pl="lg:10px">
                            Решаем задачи, а также упражнения
                            на развитие логического мышления
                        </div>
                    </div>

                    <div grid grid-rows="[auto_1fr]" gap-20px>
                        <div items-center flex-inline>
                            <div text="42px [#60d471]" fw800>4</div>
                            <div text="20px lg:24px [#222222]" fw600 ml-20px>Физкультминутка</div>
                        </div>
                        <div text="16px lg:20px" fw400 leading-tight w="100% lg:80%" pl="lg:10px">
                            Небольшая разминка для зрения
                            и комплекс упражнений для рагрузки
                        </div>
                    </div>

                    <div grid grid-rows="[auto_1fr]" gap-20px>
                        <div items-center flex-inline>
                            <div text="42px [#ffcc44]" fw800>5</div>
                            <div text="20px lg:24px [#222222]" fw600 ml-20px>Игровая часть</div>
                        </div>
                        <div text="16px lg:20px" fw400 leading-tight w="100% lg:80%" pl="lg:10px">
                            Игра с компьютером по уровню,
                            тренером и реальными соперниками
                        </div>
                    </div>

                    <div grid grid-rows="[auto_1fr]" gap-20px>
                        <div items-center flex-inline>
                            <div text="42px [#0077ff]" fw800>6</div>
                            <div text="20px lg:24px [#222222]" fw600 ml-20px>Заключительная часть</div>
                        </div>
                        <div text="16px lg:20px" fw400 leading-tight w="100% lg:80%" pl="lg:10px">
                            Подведение итогов урока,
                            задание на дом, а также
                            обратная связь родителям
                        </div>
                    </div>
                </div>
            </div>

            <div bg="[#f2f4f7]" rounded w-full h-100px mt="44px lg:94px">
                <div h-full w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <div h-full items-center grid grid-cols="[4fr_1fr] lg:[2fr_1fr_1fr]" grid-rows="[1fr_3fr] lg:1"
                        gap="10px lg:20px">
                        <div col-span="2 lg:1" text="16px lg:24px" fw800 mt="10px lg:0">Нужна личная консультация?</div>
                        <QButton w="full lg:300px" bordered mb="15px lg:0"></QButton>
                        <QButton bordered mb="15px lg:0">ПОЛУЧИТЬ</QButton>
                    </div>
                </div>
            </div>
        </section>

        <section id="game" pt="44px xl:94px">
            <div h-full w="full xl:1024px" px="10px lg:0" relative mx-auto>
                <div bg="[#ffe56c]" rounded-2xl w-full h-full p="10px lg:40px">
                    <div grid grid-cols="1 lg:[4fr_3fr]" gap="20px lg:40px">
                        <div grid grid-rows="[1fr_auto]">
                            <div mt="lg:40px">
                                <p text="14px lg:16px" fw-700>
                                    Как называются эти дебюты?
                                    <span fw-600> Ваш ребенок будет знать уже через 4 занятия</span>
                                </p>
                                <QButton w-full mt-20px>НАЧАТЬ ЗАНЯТИЯ</QButton>
                            </div>
                        </div>
                        <div inline-flex gap-20px>
                            <div ref="a" w-230px h-230px />
                            <div ref="b" w-230px h-230px />
                            <div ref="c" w-230px h-230px />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="trener" pt="44px xl:94px">
            <div w="full xl:1024px" px="10px lg:0" relative mx-auto>
                <div text="24px lg:36px [#222222]" fw600 mb="40px">Наш преподаватель</div>

                <div rounded-32px bg="[#fffff]" border="2px [#60d471]" h-full w-full py-7px px-7px grid
                    grid-cols="1 lg:[2fr_3fr]">
                    <img rounded-24px src="/img/trener.jpg" alt="" width="300" height="300">
                    <div text="16px" pr="lg:20px" fw-400>
                        <div text="24px lg:32px" fw-700 my-10px>Эльза Галиева</div>
                        <div fw-700 mb="20px">
                            Победительница, призер всероссийских и региональных соревнований<br><br lg:hidden>
                            Опыт преподавания с 2019 года, в 3-х школах и 2-х детских центрах<br><br lg:hidden>
                            Более 20-ти учеников за 2 года преподавания онлайн
                        </div>
                        <div grid grid-cols="1 lg:3" gap-10px mb="20px" text="[#ffffff] 18px">
                            <div bg="[#26bcf1]" rounded h-30px px-10px fw-600>1 взрослый разряд</div>
                            <div bg="[#26bcf1]" rounded h-30px px-10px fw-600>12 лет стаж игры</div>
                            <div bg="[#26bcf1]" rounded h-30px px-10px fw-600>судья, арбитр 3 категории
                            </div>
                        </div>

                        <div h-full w-full pr="lg:40px" px="10px lg:0">
                            <div text="24px lg:32px [#c2c2c2]" i-carbon-quotes />
                            <div text="14px lg:16px [#c2c2c2]" italic fw-600>
                                Шахматы для меня - инструмент для развития личности.<br>
                                Я ставлю на первое место работу с мышлением ребенка!<br>
                                Моя задача - научить выбирать лучшие варианты
                                и не бояться<br>
                                принимать окончательное решение, видеть дальше и шире других
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="reviews" pt="44px xl:94px">
            <div w="full xl:1024px" px="10px lg:0" relative mx-auto>
                <p text="20px lg:24px center" w-full fw-600>ЧТО ГОВОРЯТ РОДИТЕЛИ НАШИХ УЧЕНИКОВ?</p>
                <p text="14px lg:18px center" mb-10px>
                    Еще больше отзывов вы можете найти в блоке «Актуальное» в нашем инстаграме @chessedu.ru
                </p>
                <div p-10px pt-15px flex items-center justify-between overflow-x-scroll lg:overflow-hidden gap-40px>
                    <div rounded min-w-200px w-200px h-400px style="box-shadow: 2px 4px 12px rgb(0 0 0 / 25%);" p-20px>
                        <img rounded src="/img/review1.png" alt="" width="160" height="160">
                        <p text="16px lg:20px center" fw-700 mt-5px>Глеб</p>
                        <p text="12px lg:16px center" fw-600 mb-10px>7 лет, играет более полугода</p>
                        <p text="10px center">
                            Ребёнок занимается с радостью, всегда с интересом рассказывает, как прошёл урок🙈
                            Занятия начались с сентября и уже есть первая победа - выполнили 3 разряд и 1 место!
                            С удовольствием продолжим шахматы с Эльзой Маратовной😊
                        </p>
                    </div>
                    <div rounded min-w-200px w-200px h-400px style="box-shadow: 2px 4px 12px rgb(0 0 0 / 25%);" p-20px>
                        <img rounded src="/img/review2.png" alt="" width="160" height="160">
                        <p text="16px lg:20px center" fw-700 mt-5px>Ирлан</p>
                        <p text="12px lg:16px center" fw-600 mb-10px>9 лет, занимается год</p>
                        <p text="10px center">
                            Решили отдать сына на занятия онлайн и не пожалели: выполнил норму
                            разряда, а самое главное - у ребёнка горят глаза, он занят полезным делом!🤩
                            Даже оценки в школе подтянулись, мы очень довольны✅
                        </p>
                    </div>
                    <div rounded min-w-200px w-200px h-400px style="box-shadow: 2px 4px 12px rgb(0 0 0 / 25%);" p-20px>
                        <img rounded src="/img/review3.png" alt="" width="160" height="160">
                        <p text="16px lg:20px center" fw-700 mt-5px>Кирилл</p>
                        <p text="12px lg:16px center" fw-600 mb-10px>8 лет, учится полтора года</p>
                        <p text="10px center">
                            Проявил желание заниматься именно онлайн индивидуально🙆‍♂️
                            Такой подход помог достичь нам отличных результатов - за плечами серьёзный опыт,
                            норма разряда и призерство в турнирах👍
                            Ребёнку нравится - и игра, и мозговая активность!
                        </p>
                    </div>
                    <div rounded min-w-200px w-200px h-400px style="box-shadow: 2px 4px 12px rgb(0 0 0 / 25%);" p-20px>
                        <img rounded src="/img/review4.png" alt="" width="160" height="160">
                        <p text="16px lg:20px center" fw-700 mt-5px>Ранель</p>
                        <p text="12px lg:16px center" fw-600 mb-10px>9 лет, занимается год</p>
                        <p text="10px center">
                            Благодаря занятиям обыгрывает всех в семье 👍
                            Онлайн-уроки любит и ждет с нетерпением 🥰
                            Главное, что есть желание у ребёнка, а у тренера индивидуальный подход, нам нравится!
                        </p>
                    </div>
                </div>
            </div>
            <div bg="[#f2f4f7]" rounded w-full h-100px mt="44px">
                <div h-full w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <div h-full items-center grid grid-cols="[4fr_1fr] lg:[2fr_1fr_1fr]" grid-rows="[1fr_3fr] lg:1"
                        gap="10px lg:20px">
                        <div col-span="2 lg:1" text="16px lg:24px" fw800 mt="10px lg:0">Ого! Вдохновляет, хотим также
                        </div>
                        <QButton w="full lg:300px" bordered mb="15px lg:0"></QButton>
                        <QButton bordered mb="15px lg:0">ЗАПИСАТЬСЯ</QButton>
                    </div>
                </div>
            </div>
        </section>

        <section id="price" pt="44px xl:94px">
            <div w="full xl:1024px" px="10px lg:0" relative mx-auto>
                <div text="24px lg:36px [#222222]" fw600 mb="40px">Какая стоимость?</div>
                <div grid gap="20px">
                    <div gap="10px lg:0" grid grid-cols="1 lg:[4fr_3fr_2fr_3fr_3fr]" items-center w-full h="lg:60px"
                        rounded style="box-shadow: 0 10px 56px rgb(0 0 0 / 7%); border-left: 6px solid #26bcf1;">
                        <div ml-20px mt="5px lg:0" fw-700>Пробное занятие</div>
                        <div ml="20px lg:0">0₽ (<span fw-600>бесплатно</span>)</div>
                        <div ml="20px lg:0"><span fw-600>1</span> занятие</div>
                        <div ml="20px lg:0">Длительность <span fw-600>30 минут</span></div>
                        <QButton ml="20px" w="80%" mb="10px lg:0">ЗАПИСАТЬСЯ</QButton>
                    </div>

                    <div gap="10px lg:0" grid grid-cols="1 lg:[4fr_3fr_2fr_3fr_3fr]" items-center w-full h="lg:60px"
                        rounded style="box-shadow: 0 10px 56px rgb(0 0 0 / 7%); border-left: 6px solid #0077ff;">
                        <div ml-20px mt="5px lg:0" fw-700>Индивидуальное занятие</div>
                        <div ml="20px lg:0">800₽ (<span fw-600>800₽ за урок</span>)</div>
                        <div ml="20px lg:0"><span fw-600>1</span> занятие</div>
                        <div ml="20px lg:0">Длительность <span fw-600>55 минут</span></div>
                        <QButton ml="20px" w="80%" mb="10px lg:0">ЗАПИСАТЬСЯ</QButton>
                    </div>

                    <div gap="10px lg:0" grid grid-cols="1 lg:[4fr_3fr_2fr_3fr_3fr]" items-center w-full h="lg:60px"
                        rounded style="box-shadow: 0 10px 56px rgb(0 0 0 / 7%); border-left: 6px solid #60d471;">
                        <div ml-20px mt="5px lg:0" fw-700>x4 Индивидуальное занятие</div>
                        <div ml="20px lg:0">2800₽ (<span fw-600>700₽ за урок</span>)</div>
                        <div ml="20px lg:0"><span fw-600>4</span> занятия</div>
                        <div ml="20px lg:0">Длительность <span fw-600>60 минут</span></div>
                        <QButton ml="20px" w="80%" mb="10px lg:0">ЗАПИСАТЬСЯ</QButton>
                    </div>

                    <div gap="10px lg:0" grid grid-cols="1 lg:[4fr_3fr_2fr_3fr_3fr]" items-center w-full h="lg:60px"
                        rounded style="box-shadow: 0 10px 56px rgb(0 0 0 / 7%); border-left: 6px solid #ffcc44;">
                        <div ml-20px mt="5px lg:0" fw-700>x8 Индивидуальное занятие</div>
                        <div ml="20px lg:0">4800₽ (<span fw-600>600₽ за урок</span>)</div>
                        <div ml="20px lg:0"><span fw-600>8</span> занятий</div>
                        <div ml="20px lg:0">Длительность <span fw-600>60 минут</span></div>
                        <QButton ml="20px" w="80%" mb="10px lg:0">ЗАПИСАТЬСЯ</QButton>
                    </div>

                    <div text="18px center">Занятия дешевле, чем в онлайн-школах. Работа напрямую с
                        преподавателем!</div>
                </div>
            </div>

            <div bg="[#f2f4f7]" rounded w-full h-100px mt="44px lg:94px">
                <div h-full w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <div h-full items-center grid grid-cols="[4fr_1fr] lg:[2fr_1fr_1fr]" grid-rows="[1fr_3fr] lg:1"
                        gap="10px lg:20px">
                        <div col-span="2 lg:1" text="16px lg:24px" fw800 mt="10px lg:0">Вопросы по оплате?</div>
                        <QButton w="full lg:300px" bordered mb="15px lg:0"></QButton>
                        <QButton bordered mb="15px lg:0">ЗАДАТЬ</QButton>
                    </div>
                </div>
            </div>
        </section>

        <section id="faq" pt="44px xl:94px">
            <div w="full xl:1024px" px="10px lg:0" relative mx-auto>
                <div text="24px lg:36px [#222222]" fw600 mb="40px">Остались вопросы?</div>
                <hr w-full text="[#e7e8ec]" block mb-10px>
                <QSpoiler title="С какого возраста лучше начать?">
                    <p>
                        Согласно возрастной психологии, в 5-6 лет игровая деятельность у ребёнка переходит в
                        учебную.<br>
                        Уже в этом возрасте активно развивается мышление и улучшается память.<br>
                        Так что смело можно начинать обучаться шахматам.
                    </p>
                </QSpoiler>
                <hr w-full text="[#e7e8ec]" block my-10px>
                <QSpoiler title="Как быстро ребенок начнет играть?">
                    <p>
                        Согласно возрастной психологии, в 5-6 лет игровая деятельность у ребёнка переходит в
                        учебную.<br>
                        Уже в этом возрасте активно развивается мышление и улучшается память.<br>
                        Так что смело можно начинать обучаться шахматам.
                    </p>
                </QSpoiler>
                <hr w-full text="[#e7e8ec]" block my-10px>
                <QSpoiler title="Почему онлайн эффективнее?">
                    <p>
                        При интенсивных занятиях (2 раза в неделю) через месяц ребёнок освоит азы игры,<br>
                        ходы фигур и шахматные термины, что позволит ему начать полноценную игру.
                    </p>
                </QSpoiler>
                <hr w-full text="[#e7e8ec]" block my-10px>
                <QSpoiler title="Как я могу контролировать обучение?">
                    <p>
                        Все занятия записываются и высылаются вам в еженедельном отчете.<br>
                        Такой подход помогает отслеживать активность ребёнка и его прогресс.
                    </p>
                </QSpoiler>
                <hr w-full text="[#e7e8ec]" block my-10px>
                <QSpoiler title="Можно отменить или перенести урок?">
                    <p>
                        Если обучение проходит по системе абонемента 4,8 или более.<br>
                        Занятие можно отменить или перенести за сутки, сообщив тренеру.<br>
                        В таком случае тренер подбирает альтернативное и удобное для вас и ребёнка время.
                    </p>
                </QSpoiler>
                <hr w-full text="[#e7e8ec]" block my-10px>
                <QSpoiler title="Приглашу друзей, получу бонусы?">
                    <p>
                        Приведите на урок друга и получите скидку в 300₽ на последующее занятие.<br>
                        Несколько человек - больше сумма!
                    </p>
                </QSpoiler>
                <hr w-full text="[#e7e8ec]" block my-10px>
                <QSpoiler title="Длинный вопрос, еще один?">
                    <p>
                        Приведите на урок друга и получите скидку в 300₽ на последующее занятие.<br>
                        Несколько человек - больше сумма!
                    </p>
                </QSpoiler>
                <hr w-full text="[#e7e8ec]" block my-10px>
            </div>
            <div bg="[#f2f4f7]" rounded w-full h-100px mt="44px lg:64px">
                <div h-full w="full xl:1024px" p="x-20px lg:0" relative mx-auto>
                    <div h-full items-center grid grid-cols="[4fr_1fr] lg:[2fr_1fr_1fr]" grid-rows="[1fr_3fr] lg:1"
                        gap="10px lg:20px">
                        <div col-span="2 lg:1" text="16px lg:24px" fw800 mt="10px lg:0">Не нашли здесь ответ?</div>
                        <QButton w="full lg:300px" bordered mb="15px lg:0"></QButton>
                        <QButton bordered mb="15px lg:0">СПРОСИТЬ</QButton>
                    </div>
                </div>
            </div>
        </section>

        <section id="action" pt="44px xl:94px">
            <div w="full xl:1024px" px="10px lg:0" relative mx-auto>
                <div grid grid-cols="1 xl:[1fr_1fr]" gap-20px>
                    <div flex flex-culumn items-start>
                        <h2 text="16px xl:24px [#222222]" fw-500 my="lg:20px">
                            <div mb-20px>
                                Запишите ребенка на пробный урок,
                                <br />где мы определим его уровень
                                <br />и составим план обучения
                            </div>
                            <QButton w="full lg:220px">ОСТАВИТЬ ЗАЯВКУ</QButton>
                        </h2>
                    </div>
                    <div relative flex justify-center>
                        <img src="https://thumb.tildacdn.com/tild3736-6661-4962-b430-366336306132/-/format/webp/a8c62a58f44667b63f15.png"
                            alt="Действие" width="300" height="300">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>