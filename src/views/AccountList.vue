<template>
    <div>
        <div class="table">
            <h3>Account List</h3>
            <b-table
                    striped
                    hover
                    selectable
                    responsive
                    @row-clicked="viewProfile"
                    @select="selected"
                    :items="accountList.data.data"></b-table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import router from '../router';

    export default {
        name: "AccountList",
        components: {
        },
        props : ["accountId"],
        data() {
            return {
                accountIdFromList: '',
                accountList : [],
            }
        },
        created() {
            axios.get("http://localhost:8080/accounts")
                .then(res => this.accountList = res.data)
                .catch(err => console.log(err));
        },
        methods : {
            viewProfile(){
                this.accountIdFromList = ':id';
                alert(this.accountIdFromList);
                router.push('/account/info');
            }
        }
    }



</script>

<style scoped>
    .table{
        padding: 50px 100px 50px 100px;
        /*padding-left: 100px;*/
        /*padding-right: 100px;*/
    }

    h3 {
        padding-bottom: 10px;
    }

</style>