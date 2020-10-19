<template>
    <div class="graphic">
        <h1>Аналитика по визитам</h1>
        <line-chart/>
    </div>
</template>

<script>
import LineChart from './graphicDraw'
export default {
    components: {
        LineChart
    },
    mounted() {
        setTimeout(() => {
            if (localStorage.getItem('leadhit-site-id') === null ){
                this.$router.push('/');}
            }, 400);
    }
}
</script>

<style scoped>

    .graphic {
        width: 50%;
        height: 5rem;
    }

</style>