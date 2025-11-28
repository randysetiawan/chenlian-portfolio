<script setup></script>
<template>
    <footer class="footer py-5">
        <div class="container z-index-1 position-relative">
            <div class="row">
                <div class="col-lg-4 me-auto mb-lg-0 mb-4 text-lg-start text-center">
                    <h6 class="text-dark font-weight-bolder text-uppercase mb-lg-4 mb-3">
                        {{ $t('fullName') }}
                    </h6>
                    <ul class="nav flex-row ms-n3 justify-content-lg-start justify-content-center mb-4 mt-sm-0">
                        <li class="nav-item">
                            <a class="nav-link text-dark opacity-8" href="#">
                                {{ $t('navbar.home') }}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark opacity-8" href="#experience">
                                {{ $t('navbar.experience') }}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark opacity-8" href="#collections">
                                {{ $t('navbar.collections') }}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark opacity-8" href="#highlights">
                                {{ $t('navbar.highlights') }}
                            </a>
                        </li>
                    </ul>
                    <p class="text-sm text-dark opacity-8 mb-0">
                        {{ $t('footer.copyright1') }} {{ new Date().getFullYear() }} {{ $t('footer.copyright2') }}
                    </p>
                </div>
                <div class="col-lg-6 ms-auto text-lg-end text-center">
                    <p class="mb-5 text-lg text-dark font-weight-bold">
                        {{ $t('footer.quote') }}
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
