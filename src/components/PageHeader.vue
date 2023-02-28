<template>
    <header>
        <nav class="navbar bg-dark d-flex justify-content-between header_title" data-bs-theme="dark">
            <div class="d-flex">
                <li><router-link to="/emp">사원등록</router-link></li> 
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
li {
    padding: 5px 10px 5px 10px;
    list-style: none;
}

.header_title {
    font-weight: bold;
}
</style>