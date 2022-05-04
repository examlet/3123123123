import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // Nuxt App configuration.
    app: {
        // The base path of your Nuxt application.
        baseURL: "/",
        // The folder name for the built site assets, relative to baseURL (or cdnURL if set). 
        // This is set at build time and should not be customized at runtime.
        buildAssetsDir: "/_nuxt/",
        // An absolute URL to serve the public folder from (production-only).
        cdnURL: "",
        // Set default configuration for <head> on every page.
        head: {
            "title": "Уроки по шахматам - chessedu",
            "meta": [
                { name: "charset", content: "utf-8" },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            "link": [],
            "style": [],
            "script": []
        }
    },
    // Configure Nuxt component auto-registration.
    components: {
        "dirs": ["~/components"]
    },
    // You can define the CSS files/modules/libraries you want to set globally (included in every page).
    css: ["@/assets/css/index.css", "@/assets/css/chessboard.css"],
    modules: [
        "@vueuse/nuxt",
        "@unocss/nuxt",
        "@pinia/nuxt",
    ],
    // Define the source directory of your Nuxt application.
    srcDir: "src/",
    // 
    unocss: {
        uno: true,
        attributify: true,
        preflight: true,
        icons: {
            scale: 1.2,
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle'
            }
        },
        shortcuts: [
            ['btn', 'inline-block rounded-sm text-12px tracking-wide transition-all h-32px px-20px leading-32px items-center'],
            ['btn-basic', 'fw700 bg-[#26bcf1] hover:bg-[#7dd6f6] active:bg-[#93dcf7] text-[#ffffff]'],
            ['btn-bordered', 'fw600 bg-transparent border bg-[#ffffff] border-[#26bcf1] hover:bg-[#fbfbfb] active:bg-[#f2f4f7] text-[#26bcf1]'],
            ['btn-secondary', ''],
            

            ['lnk', 'cursor-pointer inline text-12px tracking-wide transition-colors duration-300'],
            ['lnk-basic', 'fw400 text-[#8a959b] decoration-[#8a959b] hover:text-[#121921] hover:decoration-[#121921] underline decoration-dotted underline-offset-5'],
            ['lnk-primary', 'fw-500 decoration-2 underline-offset-3 text-[#26bcf1] underline decoration-transparent active:text-[#9bdff7] hover:decoration-[#26bcf1] !active:decoration-[#93dcf7]'],
            ['lnk-secondary', 'fw-500 text-[#8a959b] hover:text-[#424951] active:text-[#26bcf1]']
        ],
        rules: [],
    },
    // 
    vueuse: {
        ssrHandlers: true,
    },
    //
    typescript: {
        strict: true
    }
})
