<template>
    <div class="footer">
        <router-link to="/" style="text-decoration: none; color: inherit;"><img src="../assets/violence-tracker-logo.png" width="108" height="82"/></router-link>
        <router-link to="/about" style="text-decoration: none; color: inherit;"><p class="footer-text">About</p></router-link>
        <p class="footer-text">&copy; 2022 Jamaica Violence Tracker</p>
    </div>
</template>
<style scoped>
.footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0E1E32;
    height: 174px;
}
.footer-text{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 31px;
    color: white;
    margin-top: -2px;
    margin-bottom: -0.05px;
}
.content{
    height: 150px;
}
</style>
