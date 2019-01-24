<template>
    <div class="list">
        <div>
            <p><slot></slot></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        props: ["driver"]
    }
</script>

<style scoped>

</style>