<template>
  <div class="timeline">
    <div class="timeline-line"></div>
    <div 
      v-for="(evt, i) in events" 
      :key="evt.year"
      class="timeline-item"
      :class="{ left: i % 2 === 0, right: i % 2 !== 0, visible: evt.visible }"
      :ref="el => { if (el) registerItem(el, i) }"
    >
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="year">{{ evt.year }}</span>
        <h3>{{ evt.title }}</h3>
        <p>{{ evt.desc }}</p>
        <a v-if="evt.link" :href="evt.link" class="read-more">阅读详情 →</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const events = reactive([
  {
    year: '起源', title: '神话与创世',
    desc: '原初魔女降临，以自身为代价驱散灰雾，创造了生态与魔法粒子。她被龙族分食，腐败由此诞生。',
    link: '/mythology/the-first-witch', visible: false
  },
  {
    year: '第一纪元', title: '人创时代',
    desc: '第二位魔女以龙血与自身血脉创造人类。人类成为龙族的祭司与文明代言者，建立了最早的国家。腐败开始侵蚀龙族的精神。',
    link: '/mythology/the-first-witch', visible: false
  },
  {
    year: '第二纪元', title: '神战时代',
    desc: '真龙种间的文明冲突与腐败蔓延导致诸神混战。最终以神阶真龙的诞生终止战争，黄昏之国被永恒隔绝。',
    link: '/history/era-2', visible: false
  },
  {
    year: '第三纪元', title: '腐蚀纪元',
    desc: '真龙也逐渐受到腐蚀。夏伊斯岛的君王露曦莉娅意图以"重启"净化世界。第三魔女夏伊降临，带来三种抉择。',
    link: '/history/era-3', visible: false
  }
])

const itemRefs = []
let observer = null

function registerItem(el, index) {
  itemRefs[index] = el
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = itemRefs.indexOf(entry.target)
        if (idx !== -1) events[idx].visible = true
      }
    })
  }, { threshold: 0.3 })

  itemRefs.forEach(el => { if (el) observer.observe(el) })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.timeline { position: relative; padding: 3rem 0; max-width: 800px; margin: 0 auto; }
.timeline-line { position: absolute; left: 50%; transform: translateX(-50%); width: 2px; height: 100%; background: linear-gradient(180deg, transparent, rgba(201,169,110,0.3), rgba(201,169,110,0.3), transparent); }
.timeline-item { position: relative; width: 45%; margin-bottom: 3rem; opacity: 0; transition: all 0.8s cubic-bezier(0.4,0,0.2,1); }
.timeline-item.left { left: 0; transform: translateX(-30px); }
.timeline-item.right { left: 55%; transform: translateX(30px); }
.timeline-item.visible { opacity: 1; transform: translateX(0); }
.timeline-dot { position: absolute; top: 20px; width: 12px; height: 12px; background: #c9a96e; border-radius: 50%; box-shadow: 0 0 10px rgba(201,169,110,0.5); }
.timeline-item.left .timeline-dot { right: -36px; }
.timeline-item.right .timeline-dot { left: -36px; }
.timeline-content { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 1.5rem; transition: border-color 0.3s; }
.timeline-content:hover { border-color: rgba(201,169,110,0.3); }
.year { color: #c9a96e; font-size: 0.85rem; letter-spacing: 2px; }
.timeline-content h3 { color: #f0ead8; font-size: 1.3rem; margin: 0.3rem 0 0.5rem; font-family: 'Cinzel','Georgia',serif; font-weight: normal; }
.timeline-content p { color: #a0a090; font-size: 0.9rem; line-height: 1.6; }
.read-more { color: #4a7b9d; font-size: 0.85rem; text-decoration: none; display: inline-block; margin-top: 0.5rem; transition: color 0.3s; }
.read-more:hover { color: #c9a96e; }
@media (max-width: 768px) { .timeline-line { left: 20px; } .timeline-item { width: 85%; left: 50px !important; } .timeline-item .timeline-dot { left: -26px !important; } }
</style>
