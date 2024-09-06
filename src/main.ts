import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const assetsArr = [
  '/img/about-1.png',
  '/img/about-2.png',
  '/img/hot-americano.png',
  '/img/hot-cappuccino.png',
  '/img/hot-espresso.png',
  '/img/hot-latte.png',
  '/img/iced-americano.png',
  '/img/iced-cappuccino.png',
  '/img/iced-espresso.png',
  '/img/iced-latte.png',
  '/img/smoothie-1.png',
  '/img/smoothie-2.png',
  '/img/smoothie-3.png',
  '/img/smoothie-4.png',
  '/img/special-01.jpg',
  '/img/special-02.jpg',
  '/img/special-03.jpg',
  '/img/special-04.jpg',
  '/img/special-05.jpg',
  '/img/special-06.jpg',
  '/video/wave-cafe-video-bg.mp4'
]

async function fetchAllAssets(assetsArr: Array<string>) {
  const res = await Promise.all(
    assetsArr.map(async (asset) => {
      const res = await fetch(asset)
      return res
    })
  )
}

// IIFE to run only on the first visit
;(async () => {
  const hasVisited = localStorage.getItem('hasVisited')

  if (!hasVisited) {
    // This code block will only execute if the user is visiting for the first time

    setTimeout(() => {
      const ratio = document.getElementById('ratio')
      console.log(ratio)
      ratio?.classList.remove('aspect-ratio-box')
    }, 10000)

    setTimeout(async () => {
      await fetchAllAssets(assetsArr)
    }, 5000) // 5s

    // Mark that the user has visited the site
    localStorage.setItem('hasVisited', 'true')
  }
})()

//remove aspect-ratio-box class after 0s
setTimeout(() => {
  const ratio = document.getElementById('ratio')
  console.log(ratio)
  ratio?.classList.remove('aspect-ratio-box')
}, 0)

app.mount('#app')
