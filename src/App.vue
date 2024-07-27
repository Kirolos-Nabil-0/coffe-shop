<script setup>
import BaseHeader from '@/components/BaseHeader.vue';
import { watch } from 'vue';

import { RouterLink, RouterView } from 'vue-router'
function setVideoSize() {
  const vidWidth = 1920;
  const vidHeight = 1080;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const tempVidWidth = (windowHeight * vidWidth) / vidHeight;
  const tempVidHeight = (windowWidth * vidHeight) / vidWidth;
  const newVidWidth = tempVidWidth > windowWidth ? tempVidWidth : windowWidth;
  const newVidHeight = tempVidHeight > windowHeight ? tempVidHeight : windowHeight;

  const tmVideo = document.getElementById('tm-video'); // Assuming 'tm-video' is the ID of your video element

  tmVideo.style.width = `${newVidWidth}px`; // Set width in pixels
  tmVideo.style.height = `${newVidHeight}px`; // Set height in pixels
}

watch(() => window.innerWidth, () => {
  setVideoSize();
  console.log('Window width changed');
});

</script>
<template>
  <div class="tm-container">
    <div class="tm-row">
      <!-- Site Header -->
      <div class="tm-left">

        <BaseHeader />
      </div>
      <div class="tm-right">
        <main class="tm-main">
          <RouterView />

        </main>
      </div>
    </div>
    <footer class="tm-site-footer">
      <p class="tm-black-bg tm-footer-text">Copyright 2024 Wave Cafe | Created By Kirolos |Cyril

      </p>
    </footer>
  </div>
  <!-- Background video -->
  <div class="tm-video-wrapper">
    <div id="ratio" class="aspect-ratio-box">
      <video autoplay muted loop id="tm-video">
        <source src="/video/wave-cafe-video-bg.mp4" type="video/mp4">
      </video>
    </div>
  </div>


</template>
