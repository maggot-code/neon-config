<!--
 * @FilePath: /neon-config/eslint/test/index.vue
 * @Author: maggot-code
 * @Date: 2022-06-27 20:38:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-28 00:12:13
 * @Description: 
-->
<template>
    <div class=""></div>
</template>

<script>
export default {
    name: '',
    components: {},
    mixins: [],
    props: {},
    data() {
        //这里存放数据
        return {
            value: true
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {
        value: (newVal) => {
            console.log(newVal);
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() { },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeUnmount() { }, //生命周期 - 销毁之前
    unmounted() { }, //生命周期 - 销毁完成
    activated() { },
    //方法集合
    methods: {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
</style>
