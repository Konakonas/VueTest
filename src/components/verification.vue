<template>
    <form @submit.prevent="onSubmit">
        <h1>LeadHit</h1>
        <input type="text" v-model="siteId">
        <button>Войти</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            siteId: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.siteId.length === 24) {
                data();
                this.$router.push('/graphic');
            }
            else {
                alert("id сайта должен содержать 24 символа");
            }
        }
    },

};
async function data() {
    let response = await fetch('https://track-api.leadhit.io/client/test_auth', 
        {
            headers: {
                'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
                'Leadhit-Site-Id': '5f8475902b0be670555f1bb3'}}
        );
    if (response.ok) {
        setToLocalStorage();
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}
function setToLocalStorage() {
    if (localStorage.getItem('leadhit-site-id') === null ){
        localStorage.setItem('leadhit-site-id', '5f8475902b0be670555f1bb3');
    }   
}
</script>