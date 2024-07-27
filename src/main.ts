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

;(async () => {
  setTimeout(() => {
    const ratio = document.getElementById('ratio')
    console.log(ratio)
    ratio?.classList.remove('aspect-ratio-box')
  }, 2000)

  setTimeout(async () => {
    await fetchAllAssets(assetsArr)
  }, 10000)
})()

app.mount('#app')
