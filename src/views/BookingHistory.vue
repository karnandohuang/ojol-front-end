<template>
    <div>
        <h3>Booking History</h3>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: "BookingHistory",
        components: {

        },
        data() {
            return {
                bookingHistory : []
            }
        },
        created() {
            axios.get("http://localhost:8080/bookings/history/{accountId}/{status}")
                .then(res => this.bookingHistory = res.data)
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>