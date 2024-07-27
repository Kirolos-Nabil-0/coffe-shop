<script setup lang="ts">
import { ref, computed } from 'vue';
import type { item } from '../types';
import coffeItemList from './coffeItemList.vue';

const drinks = ref<item[]>([
    { type: "cold", name: "Iced Americano", price: "10.25", description: "A refreshing cold brew of rich Americano.", image: "/img/iced-americano.png" },
    { type: "cold", name: "Iced Cappuccino", price: "12.50", description: "Chilled cappuccino with a frothy milk foam.", image: "/img/iced-cappuccino.png" },
    { type: "cold", name: "Iced Espresso", price: "14.25", description: "Intense and bold iced espresso shot.", image: "/img/iced-espresso.png" },
    { type: "cold", name: "Iced Latte", price: "11.50", description: "Smooth iced latte with a hint of sweetness.", image: "/img/iced-latte.png" },
    { type: "hot", name: "Hot Americano", price: "8.50", description: "A strong and robust hot Americano.", image: "/img/hot-americano.png" },
    { type: "hot", name: "Hot Cappuccino", price: "9.50", description: "Classic hot cappuccino with steamed milk.", image: "/img/hot-cappuccino.png" },
    { type: "hot", name: "Hot Espresso", price: "7.50", description: "Rich and aromatic hot espresso.", image: "/img/hot-espresso.png" },
    { type: "hot", name: "Hot Latte", price: "6.50", description: "Creamy hot latte with a smooth finish.", image: "/img/hot-latte.png" },
    { type: "juice", name: "Strawberry Smoothie", price: "12.50", description: "Refreshing strawberry smoothie.", image: "/img/smoothie-1.png" },
    { type: "juice", name: "Red Berry Smoothie", price: "14.50", description: "A mix of berries blended into a smoothie.", image: "/img/smoothie-2.png" },
    { type: "juice", name: "Pineapple Smoothie", price: "16.50", description: "Tropical pineapple smoothie.", image: "/img/smoothie-3.png" },
    { type: "juice", name: "Spinach Smoothie", price: "18.50", description: "Healthy spinach smoothie with a sweet twist.", image: "/img/smoothie-4.png" }
]);

const hotDrinks = computed<item[]>(() => drinks.value.filter((drink) => drink.type === 'hot'));
const coldDrinks = computed<item[]>(() => drinks.value.filter((drink) => drink.type === 'cold'));
const juiceDrinks = computed<item[]>(() => drinks.value.filter((drink) => drink.type === 'juice'));

const drinksTable: Record<string, typeof hotDrinks> = {
    hot: hotDrinks,
    cold: coldDrinks,
    juice: juiceDrinks
};

const showDrinks = ref<item[]>(coldDrinks.value);
const currentType = ref<string>('cold');

function show(type: string) {
    showDrinks.value = drinksTable[type].value;
    currentType.value = type;
    //scroll to bottom little bit
    window.scrollTo(0, 1000);
}
</script>

<template>
    <div id="drink" class="tm-page-content">
        <!-- Drink Menu Page -->
        <nav class="tm-black-bg tm-drinks-nav">
            <ul>
                <li>
                    <a @click.prevent="show('cold')" :class="['tm-tab-link', { 'active': currentType === 'cold' }]"
                        data-id="cold">Iced Coffee</a>
                </li>
                <li>
                    <a @click.prevent="show('hot')" :class="['tm-tab-link', { 'active': currentType === 'hot' }]"
                        data-id="hot">Hot Coffee</a>
                </li>
                <li>
                    <a @click.prevent="show('juice')" :class="['tm-tab-link', { 'active': currentType === 'juice' }]"
                        data-id="juice">Fruit Juice</a>
                </li>
            </ul>
        </nav>

        <coffe-item-list :items="showDrinks" :type="currentType" />

        <!-- end Drink Menu Page -->
    </div>
</template>

<style scoped>
a:hover {
    cursor: pointer;
}
</style>
