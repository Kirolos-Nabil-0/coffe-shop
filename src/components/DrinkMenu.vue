<script setup lang="ts">
import { ref, computed } from 'vue';
import type { item } from '../types';
import coffeItemList from './coffeItemList.vue';

const drinks = ref<item[]>([
    { type: "cold", name: "Iced Americano", price: "10.25", description: "Here is a short description for the first item. Wave Cafe Template is provided by Tooplate.", image: "/img/iced-americano.png" },
    { type: "cold", name: "Iced Cappuccino", price: "12.50", description: "Here is a list of 4 items or add more. You can use this template for commercial purposes.", image: "/img/iced-cappuccino.png" },
    { type: "cold", name: "Iced Espresso", price: "14.25", description: "You are not permitted to redistribute this template ZIP file on any other template websites.", image: "/img/iced-espresso.png" },
    { type: "cold", name: "Iced Latte", price: "11.50", description: "Contents are organized into 3 tabs. Please contact Tooplate if you have anything to ask.", image: "/img/iced-latte.png" },
    { type: "hot", name: "Hot Americano", price: "8.50", description: "Here is a short description for the item along with a squared thumbnail.", image: "/img/hot-americano.png" },
    { type: "hot", name: "Hot Cappuccino", price: "9.50", description: "Here is a list of 4 items that can add more as you need. Only content area will be scrolling.", image: "/img/hot-cappuccino.png" },
    { type: "hot", name: "Hot Espresso", price: "7.50", description: "Left side logo and main menu are fixed. The video background is fixed.", image: "/img/hot-espresso.png" },
    { type: "hot", name: "Hot Latte", price: "6.50", description: "Page contents are organized into 3 tabs to show different lists of items.", image: "/img/hot-latte.png" },
    { type: "juice", name: "Strawberry Smoothie", price: "12.50", description: "Here is a short description for the item along with a squared thumbnail.", image: "/img/smoothie-1.png" },
    { type: "juice", name: "Red Berry Smoothie", price: "14.50", description: "Here is a list of 4 items or add more. You can use this template for commercial purposes.", image: "/img/smoothie-2.png" },
    { type: "juice", name: "Pineapple Smoothie", price: "16.50", description: "Left side logo and main menu are fixed. The video background is fixed.", image: "/img/smoothie-3.png" },
    { type: "juice", name: "Spinach Smoothie", price: "18.50", description: "You are not allowed to redistribute the template ZIP file on other template sites.", image: "/img/smoothie-4.png" }
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
}
</script>

<template>
    <div id="drink" class="tm-page-content">
        <!-- Drink Menu Page -->
        <nav class="tm-black-bg tm-drinks-nav">
            <ul>
                <li>
                    <a @click="show('cold')" href="#" :class="['tm-tab-link', { 'active': currentType === 'cold' }]"
                        data-id="cold">Iced Coffee</a>
                </li>
                <li>
                    <a @click="show('hot')" href="#" :class="['tm-tab-link', { 'active': currentType === 'hot' }]"
                        data-id="hot">Hot Coffee</a>
                </li>
                <li>
                    <a @click="show('juice')" href="#" :class="['tm-tab-link', { 'active': currentType === 'juice' }]"
                        data-id="juice">Fruit Juice</a>
                </li>
            </ul>
        </nav>

        <coffe-item-list :items="showDrinks" :type="currentType" />

        <!-- end Drink Menu Page -->
    </div>
</template>
