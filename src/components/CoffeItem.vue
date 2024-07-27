<template>
    <div class="tm-list-item">
        <img loading="lazy" width="160" height="160" :src="props.item.image" alt="Image" class="tm-list-item-img">
        <div class="tm-black-bg tm-list-item-text">
            <h3 class="tm-list-item-name">{{ props.item.name }}<span class="tm-list-item-price">${{ props.item.price
                    }}</span>
            </h3>
            <p class="tm-list-item-description"> {{ props.item.description }} </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import type { item } from '../types';

const props = defineProps(
    {
        item: {
            type: Object as () => item,
            required: true
        }
    }

);

</script>