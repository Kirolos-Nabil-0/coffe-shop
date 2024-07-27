<template>
    <div :id="props.type" class="tm-tab-content">

        <CoffeItem v-for="item in props.items" :key="item.name" :item="item" />

    </div>
</template>
<script setup lang="ts">
import type { item } from '../types';
import CoffeItem from './CoffeItem.vue';

const props = defineProps({
    items: {
        type: Array<item>,
        defult: []
    },
    type: {
        type: String
    }

})

</script>