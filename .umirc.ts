import {defineConfig} from 'umi';

export default defineConfig({
    layout: {},
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
    ],
    routes: [
        {path: '/', component: '@/pages/index'},
    ],
});
