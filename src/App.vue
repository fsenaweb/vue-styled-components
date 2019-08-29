<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>Styled Components no Vue.js</h1>
        <div>
            <c-button>Clique Aqui</c-button>
            <c-button-props primary>Clique Aqui</c-button-props>
            <c-button-props-cond>Clique Aqui Condicional</c-button-props-cond>
        </div>
    </div>
</template>

<script>
    import CButton from '@/components/elements/Button'
    import CButtonProps from '@/components/elements/ButtonProps'
    import CButtonPropsCond from '@/components/elements/ButtonPropsCond'
    export default {
        name: 'app',
        components: {
            CButton, CButtonProps, CButtonPropsCond
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
