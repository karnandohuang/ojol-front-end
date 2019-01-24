<template>
    <div class="driver-list">
        <h3>Driver List</h3>
        <div v-bind:key="driver.id" v-for="driver in driverList.data.data">
            <list v-bind:driver="driver">{{driver.id}} | {{driver.name}} | ( X )</list>
        </div>

    </div>
</template>

<script>
    import list from '../components/List';
    import axios from 'axios';

    export default {
        name: "DriverList",
        components: {
            list
        },
        data() {
            return {
                driverList: []
            }
        },
        created() {
            axios.get('http://localhost:8080/drivers')
                .then(res => this.driverList = res.data)
                .catch(err => console.log(err));
        }

    }
</script>

<style scoped>

</style>