<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 mb-lg-0 mb-4">
                <h3 class="mb-0 h4 font-weight-bolder">Yaklaşan İşlemler</h3>
                <div class="card">
                    <div class="card-header pb-0 p-3">
                        <div class="row">
                            <div class="col-12 text-end">
                                <a class="btn bg-gradient-dark mb-0" href="javascript:;"><i
                                        class="material-symbols-rounded text-sm">add</i>&nbsp;&nbsp;Yeni İşlem Ekle</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-3">
                        <div class="row">
                            <div class="col-12">
                                <div class="card my-4">
                                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div class="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                            <h6 class="text-white text-capitalize ps-3">İşlemler Tablosu - Periyodik
                                                Bakım</h6>
                                        </div>
                                    </div>
                                    <div class="card-body px-0 pb-2">
                                        <div class="table-responsive p-0">
                                            <table class="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                            İşlem Tipi</th>
                                                        <th
                                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                            Tarih</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Plaka</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Tutar ₺</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            İşlem Km</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Sonraki Km</th>
                                                            <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Mevcut Km</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Kalan Km</th>
                                                            <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            İşlemler</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="">
                                                            <p class="text-xs font-weight-bold mb-0">
                                                                Yağ Değişimi</p>
                                                        </td>
                                                        <td>
                                                            <p class="text-xs font-weight-bold mb-0">10.04.2025</p>
                                                        </td>
                                                        <td class="align-middle text-center text-sm">
                                                            <span class="badge badge-sm bg-gradient-success">20 AGC
                                                                293</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span
                                                                class="text-secondary text-xs font-weight-bold">  {{ GetDoubleValue("5200")  }}
                                                            </span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span
                                                                class="text-secondary text-xs font-weight-bold">304.000</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span
                                                                class="text-secondary text-xs font-weight-bold">314.000</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span
                                                                class="text-secondary text-xs font-weight-bold">305.000</span>
                                                        </td>
                                                        <td class="align-middle text-center bg-danger">
                                                            <span
                                                                class="text-white text-xs font-weight-bold">9.000</span>
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
                        <div class="row">
                            <div class="col-12">
                                <div class="card my-4">
                                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div class="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                            <h6 class="text-white text-capitalize ps-3">Zorunlu Gider Tablosu - Sigorta
                                                & Vize</h6>
                                        </div>
                                    </div>
                                    <div class="card-body px-0 pb-2">
                                        <div class="table-responsive p-0">
                                            <table class="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                            İşlem Türü</th>
                                                        <th
                                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                            İşlem Tarihi</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Sonraki Tarih</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Yıl</th>
                                                        <th
                                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Renk</th>
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
                                                            <p class="text-xs font-weight-bold mb-0">21.07.2023</p>
                                                        </td>
                                                        <td class="align-middle text-center text-sm">
                                                            <p class="text-xs font-weight-bold mb-0">{{ nextDate }}</p>
                                                        </td>
                                                        <td class="align-middle text-center text-sm">
                                                            <span class="badge badge-sm bg-gradient-success"> 20 AGC 293 </span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span
                                                                class="text-secondary text-xs font-weight-bold">2006</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span
                                                                class="text-secondary text-xs font-weight-bold">Mavi</span>
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
    import {GetDoubleValue,GetTwoDateDiff} from '../utils';
    const nextDate : string = "21.07.2025";
    const dateDiff = GetTwoDateDiff(nextDate);
    console.log(dateDiff);
    
</script>
<style lang="">

</style>