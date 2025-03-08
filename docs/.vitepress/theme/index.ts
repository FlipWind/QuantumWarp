import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";
import "./style/index.css";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // ...
    },
    setup() {
//         <script src="https://giscus.app/client.js"
//         data-repo="FlipWind/qw-comment"
//         data-repo-id="R_kgDOOFS5hQ"
//         data-category="Announcements"
//         data-category-id="DIC_kwDOOFS5hc4CntzZ"
//         data-mapping="pathname"
//         data-strict="1"
//         data-reactions-enabled="1"
//         data-emit-metadata="0"
//         data-input-position="top"
//         data-theme="dark"
//         data-lang="zh-CN"
//         data-loading="lazy"
//         crossorigin="anonymous"
//         async>
// </script>
        // Get frontmatter and route
        const { frontmatter } = toRefs(useData());
        const route = useRoute();
        
        // Obtain configuration from: https://giscus.app/
        giscusTalk({
            repo: 'FlipWind/qw-comment',
            repoId: 'R_kgDOOFS5hQ',
            category: 'Announcements', // default: `General`
            categoryId: 'DIC_kwDOOFS5hc4CntzZ',
            mapping: 'pathname', // default: `pathname`
            inputPosition: 'top', // default: `top`
            lang: 'zh-CN', // default: `zh-CN`
            // i18n setting (Note: This configuration will override the default language set by lang)
            // Configured as an object with key-value pairs inside:
            // [your i18n configuration name]: [corresponds to the language pack name in Giscus]
            locales: {
                'zh-Hans': 'zh-CN',
                'en-US': 'en'
            },
            homePageShowComment: false, // Whether to display the comment area on the homepage, the default is false
            lightTheme: 'light', // default: `light`
            darkTheme: 'transparent_dark', // default: `transparent_dark`
            // ...
        }, {
            frontmatter, route
        },
            // Whether to activate the comment area on all pages.
            // The default is true, which means enabled, this parameter can be ignored;
            // If it is false, it means it is not enabled.
            // You can use `comment: true` preface to enable it separately on the page.
            true
        );
    }
};