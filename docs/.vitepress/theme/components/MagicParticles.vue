<template>
  <canvas ref="canvasEl" class="magic-particles" :class="{ faint }"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  faint: { type: Boolean, default: false }
})

const canvasEl = ref(null)
let ctx = null, particles = [], ripples = [], animationId = null
let clickHandler = null

onMounted(() => {
  const cvs = canvasEl.value
  cvs.width = window.innerWidth
  cvs.height = window.innerHeight
  ctx = cvs.getContext('2d')

  for (let i = 0; i < 30; i++) {
    particles.push({
      x: Math.random() * cvs.width,
      y: Math.random() * cvs.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.2
    })
  }

  // 点击涟漪
  clickHandler = (e) => {
    const cx = e.clientX, cy = e.clientY
    for (let i = 0; i < 20; i++) {
      const angle = (Math.PI * 2 / 20) * i + (Math.random() - 0.5) * 0.3
      ripples.push({
        x: cx, y: cy,
        vx: Math.cos(angle) * (1 + Math.random() * 1.5),
        vy: Math.sin(angle) * (1 + Math.random() * 1.5),
        size: 0.8 + Math.random() * 1.5,
        opacity: 0.6 + Math.random() * 0.3,
        life: 1
      })
    }
  }
  window.addEventListener('mousedown', clickHandler)

  function animate() {
    ctx.clearRect(0, 0, cvs.width, cvs.height)
    // 绘制背景粒子
    particles.forEach(p => {
      p.x += p.speedX; p.y += p.speedY
      if (p.x < 0) p.x = cvs.width
      if (p.x > cvs.width) p.x = 0
      if (p.y < 0) p.y = cvs.height
      if (p.y > cvs.height) p.y = 0
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(201, 169, 110, ${p.opacity})`
      ctx.fill()
    })
    // 绘制涟漪
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i]
      r.x += r.vx; r.y += r.vy
      r.vx *= 0.985; r.vy *= 0.985
      r.size += 0.03
      r.life -= 0.008
      if (r.life <= 0) { ripples.splice(i, 1); continue }
      ctx.beginPath()
      ctx.arc(r.x, r.y, r.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(201, 169, 110, ${r.opacity * r.life})`
      ctx.fill()
    }
    animationId = requestAnimationFrame(animate)
  }
  animate()

  const onResize = () => { cvs.width = window.innerWidth; cvs.height = window.innerHeight }
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  if (clickHandler) window.removeEventListener('mousedown', clickHandler)
})
</script>

<style scoped>
.magic-particles { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
.magic-particles.faint { opacity: 0.3; }
</style>
