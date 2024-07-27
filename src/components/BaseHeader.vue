<template>
    <div class="tm-left-inner">
        <div class="tm-site-header">
            <i class="fas fa-coffee fa-3x tm-site-logo"></i>
            <h1 class="tm-site-name">Wave Cafe</h1>
        </div>
        <nav class="tm-site-nav">
            <ul class="tm-site-nav-ul">
                <li class="tm-page-nav-item">
                    <RouterLink to="/" :class="`tm-page-link` + getClassFor('/').value">
                        <i class="fas fa-mug-hot tm-page-link-icon"></i>
                        <span>Drink Menu</span>
                    </RouterLink>
                </li>
                <li class="tm-page-nav-item">
                    <RouterLink to="/about" :class="'tm-page-link' + getClassFor('/about').value">
                        <i class="fas fa-users tm-page-link-icon"></i>
                        <span>About Us</span>
                    </RouterLink>
                </li>
                <li class="tm-page-nav-item">
                    <RouterLink to="/special-items" :class="'tm-page-link' + getClassFor('/special-items').value">
                        <i class="fas fa-glass-martini tm-page-link-icon"></i>
                        <span>Special Items</span>
                    </RouterLink>
                </li>
                <li class="tm-page-nav-item">
                    <RouterLink to="/contact" :class="'tm-page-link' + getClassFor('/contact').value">
                        <i class="fas fa-comments tm-page-link-icon"></i>
                        <span>Contact</span>
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const getClassFor = (path: string) => {
    return computed(() => {
        // Check if the current route's path matches the given path
        return route.path === path ? ' active' : '';
    });
}
</script>
