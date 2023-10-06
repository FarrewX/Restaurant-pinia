<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <div>
        <div class="container">

            <div class="nav-scroller py-1 mb-3 border-bottom" style="background-color: antiquewhite;">
                <nav class="nav nav-underline justify-content-between">
                    &nbsp;<RouterLink class="nav-item nav-link link-body-emphasis" style="font-size: 24px;" to="/">สินค้าทั้งหมด</RouterLink>

                    <RouterLink class="nav-item nav-link link-body-emphasis" style="margin-left: auto;" to="/">Home</RouterLink>

                    <RouterLink class="nav-item nav-link link-body-emphasis" style="margin-left: 30px;" to="/cart">CART 🛒</RouterLink>&nbsp;

                </nav>
            </div>
        </div>
    </div>



</template>
