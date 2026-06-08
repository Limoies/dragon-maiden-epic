<template>
  <div class="relation-graph">
    <canvas ref="canvasEl" class="graph-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasEl = ref(null)
let ctx = null
let dragging = null, offsetX = 0, offsetY = 0
let scale = 1

const nodes = [
  { id: '原初魔女', x: 500, y: 100, color: '#b08fcb', r: 22, size: 22 },
  { id: '第二魔女', x: 500, y: 240, color: '#8fafcf', r: 20, size: 20 },
  { id: '夏伊',     x: 500, y: 420, color: '#e8c86a', r: 32, size: 32 },
  { id: '莉莉丝',   x: 240, y: 400, color: '#7aacbf', r: 22, size: 22 },
  { id: '莉娅',     x: 360, y: 560, color: '#cf9f7a', r: 20, size: 20 },
  { id: '莉姆',     x: 640, y: 560, color: '#cf9f7a', r: 18, size: 18 },
  { id: '露曦莉娅', x: 760, y: 340, color: '#d47a5a', r: 26, size: 26 },
  { id: '格雷曦斯', x: 860, y: 240, color: '#8a8aaa', r: 22, size: 22 },
  { id: '司康顿尔', x: 760, y: 440, color: '#b08a5a', r: 20, size: 20 },
  { id: '莱昂',     x: 500, y: 680, color: '#8aaa7a', r: 18, size: 18 },
]

const edges = [
  { from: '原初魔女', to: '第二魔女', label: '传承' },
  { from: '第二魔女', to: '夏伊',     label: '预言', dash: true },
  { from: '第二魔女', to: '莉莉丝',   label: '使命' },
  { from: '夏伊',     to: '莉莉丝',   label: '同伴', color: '#e8c86a' },
  { from: '夏伊',     to: '莉娅',     label: '同伴', color: '#e8c86a' },
  { from: '夏伊',     to: '莉姆',     label: '同伴', color: '#e8c86a' },
  { from: '莉娅',     to: '莉姆',     label: '姐妹' },
  { from: '莉娅',     to: '莱昂',     label: '父女' },
  { from: '莉姆',     to: '莱昂',     label: '父女' },
  { from: '夏伊',     to: '露曦莉娅', label: '宿命', color: '#d47a5a', dash: true },
  { from: '露曦莉娅', to: '格雷曦斯', label: '同阶' },
  { from: '露曦莉娅', to: '司康顿尔', label: '同阶' },
]

function getNode(id) { return nodes.find(n => n.id === id) }

function draw() {
  const cvs = canvasEl.value
  if (!ctx) return
  ctx.clearRect(0, 0, cvs.width, cvs.height)
  
  // 连线
  edges.forEach(e => {
    const from = getNode(e.from), to = getNode(e.to)
    if (!from || !to) return
    ctx.beginPath()
    ctx.moveTo(from.x, from.y)
    ctx.lineTo(to.x, to.y)
    ctx.strokeStyle = e.color || 'rgba(160,160,144,0.35)'
    ctx.lineWidth = e.dash ? 1.5 : 2
    ctx.setLineDash(e.dash ? [5, 5] : [])
    ctx.stroke()
    ctx.setLineDash([])
    const mx = (from.x + to.x) / 2, my = (from.y + to.y) / 2
    ctx.fillStyle = 'rgba(200,195,180,0.7)'
    ctx.font = '12px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(e.label, mx, my - 8)
  })
  
  // 节点
  nodes.forEach(n => {
    // 光晕（极淡）
    const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 1.8)
    grad.addColorStop(0, n.color + '30')
    grad.addColorStop(1, n.color + '00')
    ctx.beginPath()
    ctx.arc(n.x, n.y, n.r * 1.8, 0, Math.PI * 2)
    ctx.fillStyle = grad
    ctx.fill()
    // 圆点
    ctx.beginPath()
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
    ctx.fillStyle = n.color
    ctx.fill()
    ctx.strokeStyle = 'rgba(255,255,255,0.15)'
    ctx.lineWidth = 1.5
    ctx.stroke()
    // 标签
    ctx.fillStyle = '#e8e0d0'
    ctx.font = n.r > 24 ? 'bold 13px "Microsoft YaHei", sans-serif' : '12px "Microsoft YaHei", sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(n.id, n.x, n.y + n.r + 16)
  })
}

function getPos(e) {
  const rect = canvasEl.value.getBoundingClientRect()
  return {
    x: (e.clientX - rect.left) * scale,
    y: (e.clientY - rect.top) * scale
  }
}

function handleDown(e) {
  const p = getPos(e)
  const hit = nodes.find(n => Math.hypot(p.x - n.x, p.y - n.y) < n.r + 8)
  if (hit) {
    dragging = hit
    offsetX = p.x - hit.x
    offsetY = p.y - hit.y
    canvasEl.value.style.cursor = 'grabbing'
  }
}

function handleMove(e) {
  if (!dragging) return
  const p = getPos(e)
  dragging.x = Math.max(50, Math.min(950, p.x - offsetX))
  dragging.y = Math.max(50, Math.min(730, p.y - offsetY))
  draw()
}

function handleUp() {
  dragging = null
  if (canvasEl.value) canvasEl.value.style.cursor = 'grab'
}

onMounted(() => {
  const cvs = canvasEl.value
  // 高清绘图
  const dpr = window.devicePixelRatio || 1
  const w = 1000, h = 780
  cvs.width = w * dpr
  cvs.height = h * dpr
  cvs.style.width = w + 'px'
  cvs.style.height = h + 'px'
  ctx = cvs.getContext('2d')
  ctx.scale(dpr, dpr)
  scale = w / cvs.getBoundingClientRect().width
  
  draw()
  cvs.addEventListener('mousedown', handleDown)
  window.addEventListener('mousemove', handleMove)
  window.addEventListener('mouseup', handleUp)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMove)
  window.removeEventListener('mouseup', handleUp)
})
</script>

<style scoped>
.relation-graph {
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  overflow-x: auto;
}
.graph-canvas {
  max-width: 1000px;
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid rgba(201,169,110,0.1);
  cursor: grab;
  background: transparent;
}
</style>
