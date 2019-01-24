<template>
    <div>
        <h3>Payment Methods</h3>
        <div v-bind:key="payment.id" v-for="payment in paymentMethods.data.data">
            <list v-bind:payment="payment">{{payment.id}} || {{payment.name}}</list>
        </div>
    </div>
</template>

<script>
    import List from "../components/List";
    import axios from "axios";
    export default {
        name: "PaymentMethod",
        components: {List},
        data(){
            return{
                paymentMethods: []
            }
        },
        created() {
            axios.get("http://localhost:8080/payments/list")
                .then(res => this.paymentMethods = res.data)
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>