<template>
    <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2  bg-white my-2"
        id="sidenav-main">
        <div class="sidenav-header">
            <i class="fas fa-times p-3 cursor-pointer text-dark opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                aria-hidden="true" id="iconSidenav"></i>
            <a class="navbar-brand px-4 py-3 m-0"
                href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                <img src="../assets/img/logo-ct-dark.png" class="navbar-brand-img" width="26" height="26"
                    alt="main_logo">
                <span class="ms-1 text-sm text-dark">Burak Cakir</span>
            </a>
        </div>
        <hr class="horizontal dark mt-0 mb-2">
        <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
            <ul class="navbar-nav d-flex flex-column">
                <li class="nav-item">
                    <RouterLink class="nav-link bg-gradient-dark text-white" to="/dashboard">
                        <i class="material-symbols-rounded opacity-5">dashboard</i>
                        <span class="nav-link-text ms-1">Yönetim Paneli</span>
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link bg-success text-white" to="/car">
                        <i class="material-symbols-rounded opacity-5">cards</i>
                        <span class="nav-link-text ms-1">Araç Kartı</span>
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link bg-danger text-white" to="/logout">
                        <i class="material-symbols-rounded opacity-5">logout</i>
                        <span class="nav-link-text ms-1">Çıkış</span>
                    </RouterLink>
                </li>
            </ul>

        </div>
    </aside>
</template>
<script setup lang="ts">

</script>
<style lang="">

</style>