import {defineConfig} from 'umi';

export default defineConfig({
    singular: true,
    antd: {},
    routes: [{path: '/', component: '@/pages/index'}],
});
