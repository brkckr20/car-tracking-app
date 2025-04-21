<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 mb-lg-0 mb-4">
                <h3 class="mb-0 h4 font-weight-bolder">Kartlar ve Tanımlamalar</h3>
                <div class="card">
                    <div class="card-header pb-0 p-3">
                        <div class="row">
                            <div class="col-12 text-end">
                                <a class="btn bg-gradient-dark mb-0" href="javascript:;"><i
                                        class="material-symbols-rounded text-sm">add</i>&nbsp;&nbsp;Yeni Araç Ekle</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-3">
                        <div class="row">
                            <div class="col-12">
                                <div class="card my-4">
                                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div class="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                            <h6 class="text-white text-capitalize ps-3">Araçlarım tablosu</h6>
                                        </div>
                                    </div>
                                    <div class="card-body px-0 pb-2">
                                        <div class="table-responsive p-0">
                                            <table class="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                            Marka</th>
                                                        <th
                                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                            Model</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Plaka</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Yıl</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Renk</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            KM</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            İşlemler</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="">
                                                            <p class="text-xs font-weight-bold mb-0">
                                                                Opel</p>
                                                        </td>
                                                        <td>
                                                            <p class="text-xs font-weight-bold mb-0">Manager</p>
                                                        </td>
                                                        <td class="align-middle text-center text-sm">
                                                            <span class="badge badge-sm bg-gradient-success">20 AGC
                                                                293</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span
                                                                class="text-secondary text-xs font-weight-bold">2006</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span
                                                                class="text-secondary text-xs font-weight-bold">Mavi</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span
                                                                class="text-secondary text-xs font-weight-bold">305.000</span>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="javascript:;"
                                                                class="text-secondary font-weight-bold text-xs"
                                                                data-toggle="tooltip" data-original-title="Edit user">
                                                                Düzenle
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-lg-0 mb-4">
                <div class="card mt-2">
                    <div class="card-header pb-0 p-3">
                        <div class="row">
                            <div class="col-12 text-end">
                                <a class="btn bg-gradient-dark mb-0" href="javascript:;"><i
                                        class="material-symbols-rounded text-sm">add</i>&nbsp;&nbsp;İşlem Tipi Ekle</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-3">
                        <div class="row">
                            <div class="col-12">
                                <div class="card my-4">
                                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div class="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                            <h6 class="text-white text-capitalize ps-3">İşlemler tablosu</h6>
                                        </div>
                                    </div>
                                    <div class="card-body px-0 pb-2">
                                        <div class="table-responsive p-0">
                                            <table class="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                            İşlem Adı</th>
                                                        <th
                                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                            İşlem Grubu</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            İşlemler</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="">
                                                            <p class="text-xs font-weight-bold mb-0">
                                                                Vize</p>
                                                        </td>
                                                        <td>
                                                            <p class="text-xs font-weight-bold mb-0">Zorunlu Gider</p>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="javascript:;"
                                                                class="text-secondary font-weight-bold text-xs"
                                                                data-toggle="tooltip" data-original-title="Edit user">
                                                                Düzenle
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="">
                                                            <p class="text-xs font-weight-bold mb-0">
                                                                Sigorta</p>
                                                        </td>
                                                        <td>
                                                            <p class="text-xs font-weight-bold mb-0">Zorunlu Gider</p>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="javascript:;"
                                                                class="text-secondary font-weight-bold text-xs"
                                                                data-toggle="tooltip" data-original-title="Edit user">
                                                                Düzenle
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="">
                                                            <p class="text-xs font-weight-bold mb-0">
                                                                Yağ Değişimi</p>
                                                        </td>
                                                        <td>
                                                            <p class="text-xs font-weight-bold mb-0">Periyodik Bakım</p>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="javascript:;"
                                                                class="text-secondary font-weight-bold text-xs"
                                                                data-toggle="tooltip" data-original-title="Edit user">
                                                                Düzenle
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import axios from 'axios';
    import { onMounted } from 'vue';
    import { ref } from 'vue';
    const carList = ref([]);

    onMounted(() => {
        axios.get('http://localhost:3001/cards').then(response => carList.value = response.data.car).catch(error => console.log(error));
        
    });
</script>
<style lang="">

</style>