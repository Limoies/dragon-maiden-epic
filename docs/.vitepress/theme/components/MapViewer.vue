<template>
  <div class="map-viewer">
    <div class="map-container">
      <img :src="mapSrc" alt="夏伊斯岛地图" class="map-image" />
      <!-- 城市标记 -->
      <a v-for="mark in markers" :key="mark.id"
        :href="mark.link"
        class="map-marker"
        :style="{ left: mark.x + '%', top: mark.y + '%' }"
        @mouseenter="hovered = mark.id"
        @mouseleave="hovered = null"
      >
        <span class="marker-dot" :class="{ active: hovered === mark.id }"></span>
        <span class="marker-label" :class="{ visible: hovered === mark.id }">{{ mark.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const hovered = ref(null)
const mapSrc = '/map/shiyis-island.png'

const markers = [
  // 以下坐标需根据实际地图手动调整（百分比定位）
  { id: 1, name: '曦日王庭', x: 49, y: 23,  link: '/factions/kingdoms/sol-empire/sol-court' },
  { id: 2, name: '瓦伦迪亚', x: 38, y: 43,  link: '/factions/kingdoms/sol-empire/valendia' },
  { id: 3, name: '奥蕾莉亚', x: 33, y: 68,  link: '/factions/kingdoms/sol-empire/aurelia' },
  { id: 4, name: '贝尔纳斯', x: 67, y: 62,  link: '/factions/kingdoms/sol-empire/bernas' },
  { id: 5, name: '龙巢小镇', x: 67, y: 71,  link: '/geography/dragon-nest' },
  { id: 6, name: '染血草原', x: 80, y: 77,  link: '/geography/bloodgrass-plains/' },
  { id: 7, name: '深渊',    x: 29, y: 80,  link: '/geography/abyss' },
  { id: 8, name: '黄昏之国', x: 10, y: 15, link: '/factions/kingdoms/twilight-realm/' },
]
</script>

<style scoped>
.map-viewer {
  padding: 2rem 0;
}
.map-container {
  position: relative;
  display: inline-block;
  max-width: 100%;
}
.map-image {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
}
.map-marker {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
  text-decoration: none;
}
.marker-dot {
  display: block;
  width: 14px;
  height: 14px;
  background: rgba(201, 169, 110, 0.7);
  border: 2px solid #c9a96e;
  border-radius: 50%;
  margin: 0 auto;
  transition: all 0.3s;
  box-shadow: 0 0 8px rgba(201, 169, 110, 0.3);
}
.marker-dot.active {
  background: #c9a96e;
  box-shadow: 0 0 20px rgba(201, 169, 110, 0.7);
  transform: scale(1.3);
}
.marker-label {
  display: block;
  text-align: center;
  color: #f0ead8;
  font-size: 0.8rem;
  background: rgba(10, 12, 20, 0.85);
  padding: 2px 8px;
  border-radius: 3px;
  white-space: nowrap;
  margin-top: 4px;
  opacity: 0;
  transition: opacity 0.3s;
  border: 1px solid rgba(201, 169, 110, 0.3);
}
.marker-label.visible {
  opacity: 1;
}
</style>
