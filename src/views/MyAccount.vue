<template>
    <div>
        <h3>My Account</h3>
        <p>{{account.data.data.id}} | {{account.data.data.name}} | {{account.data.data.balance}}</p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "MyAccount",
        components: {
        },
        data() {
          return {
              account : [],
              accountId
          }
        },
        created() {
            axios.get("http://localhost:8080/accounts/" + accountId)
                .then(res => this.account = res.data)
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>