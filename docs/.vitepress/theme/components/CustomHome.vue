<template>
  <div class="custom-home">
    <!-- 粒子背景容器 -->
    <canvas id="particles-canvas" class="particles-canvas"></canvas>

    <!-- 首屏 -->
    <section class="section hero" id="home">
      <div class="container">
        <h1>当虚无的灰雾吞噬一切<br>她是最初，也是最后的光芒</h1>
        <div class="subtitle">—— 龙与少女的史诗 ——</div>
        <p>欢迎来到龙族群岛。一个众神已死、巨龙尚存、腐败在每一丝空气中低语的世界。跟随第三魔女夏伊的足迹，探索这片被原初之罪诅咒，却又被凡人之勇守护的破碎大地。</p>
        <div class="hero-links">
          <a href="/worldview/overview">探索世界观</a>
          <a href="/history/">穿梭历史</a>
          <a href="/characters/xia-yi">认识夏伊</a>
          <a href="/factions/kingdoms/">了解势力</a>
          <a href="/bestiary/index">浏览图鉴</a>
        </div>
      </div>
      <div class="scroll-hint">
        <p>向下滚动探索</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" class="bounce-arrow">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>
    </section>

    <!-- 创世与原罪 -->
    <section class="section myth" id="myth">
      <div class="container">
        <div class="text">
          <h2>✦ 创世与原罪</h2>
          <p style="margin-top:1.5rem;">在时间开始之前，世界是一片<strong style="color:#8a9ab5;">灰雾</strong>——那不是黑暗，而是连"无"都称不上的混沌。没有方向，没有温度，没有生命，甚至没有死亡。一切都归于无差别的、死寂的同一性。</p>
          <p><strong style="color:#c9a96e;">原初魔女</strong>降临，以自身为代价，将血肉融入大地，第一次定义了"存在"。她的牺牲驱散了灰雾，创造了生态与魔法粒子——万物由此诞生。</p>
          <p>但她被自己创造的<strong>龙族分食殆尽</strong>。</p>
          <p style="margin-top:1rem;">腐败由此诞生。它不是病毒，不是诅咒，而是<strong style="color:#c9a96e;">神的尸骸</strong>——是原初魔女被背叛时，那一声未能发出的尖叫，在被灰雾抓住后，扭曲成的、会自我蔓延的痛。</p>
          <p style="margin-top:1rem;font-size:0.95rem;opacity:0.7;">龙族群岛由此成为"创世之伤"——这里是灰雾第一次被逼退的地方，也是它回潮压力最大的裂口。三位魔女前赴后继，正是因为这处伤口从未愈合。</p>
          <a href="/mythology/the-first-witch" class="inline-link">阅读完整神话 →</a>
        </div>
        <div class="visual">
          <div class="glow-ring" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:200px;height:200px;border:1px solid rgba(201,169,110,0.2);border-radius:50%;"></div>
          <div class="glow-ring" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:150px;height:150px;border:1px solid rgba(201,169,110,0.15);border-radius:50%;"></div>
          <div class="glow-ring" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100px;height:100px;border:1px solid rgba(201,169,110,0.1);border-radius:50%;"></div>
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:4rem;color:#c9a96e;opacity:0.6;">◆</div>
          <p style="position:absolute;bottom:20px;width:100%;text-align:center;font-size:0.8rem;opacity:0.5;letter-spacing:3px;">原 初 的 牺 牲</p>
        </div>
      </div>
    </section>

    <!-- 世界地理 -->
    <section class="section map-section" id="map">
      <div class="container">
        <h2>✦ 夏伊斯岛：龙脊上的大陆</h2>
        <p style="margin-top:1rem;">面积四百万平方公里的巨岛，如同一头侧卧的古龙。北方山脉是它的脊梁，斩风崖是它的怒吼，西南深渊是它永不愈合的伤口。</p>
        <div class="map-grid">
          <a href="/geography/shayis-island" class="map-card">
            <h3>曦日王庭</h3>
            <p style="color:#c9a96e;font-size:0.85rem;">帝都 · 权力心脏</p>
            <p>依熔龙火山而建，帝国面积最大的城市。曦日君王曾在此统御万民，如今王庭腐朽不堪。</p>
          </a>
          <a href="/geography/bloodgrass-plains" class="map-card">
            <h3>染血草原</h3>
            <p style="color:#c9a96e;font-size:0.85rem;">高原猎场 · 风之剧场</p>
            <p>神血洒遍的三千米高原。斩风崖终年乱流咆哮，鸟龙目在此翱翔如海豚戏浪。</p>
          </a>
          <a href="/geography/dragon-nest" class="map-card">
            <h3>龙巢小镇</h3>
            <p style="color:#c9a96e;font-size:0.85rem;">边陲前哨 · 龙骨之城</p>
            <p>建在古龙遗骸上的猎人自治聚落。肋骨为墙，环廊为街，龙心灯长明。</p>
          </a>
          <a href="/geography/abyss" class="map-card">
            <h3>深渊与腐败之地</h3>
            <p style="color:#c9a96e;font-size:0.85rem;">神之伤口 · 虚无入口</p>
            <p>位于西南龙首下颚处。腐败从这道永不愈合的裂缝中渗出，蔓延入海。</p>
          </a>
          <a href="/factions/kingdoms/sol-empire/bernas" class="map-card">
            <h3>贝尔纳斯</h3>
            <p style="color:#c9a96e;font-size:0.85rem;">第三主城 · 蔷薇谷</p>
            <p>伊河流域的商贸之城，蔷薇鸟家族的故乡。城门口贴着刚出炉的《蔷薇谷日报》。</p>
          </a>
        </div>
      </div>
    </section>

    <!-- 龙君即文明 -->
    <section class="section" id="dragons" style="background: linear-gradient(180deg, #111620 0%, #1a1a28 40%, #0f131c 100%); position: relative;">
      <div style="position:absolute;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at 30% 40%, rgba(201,169,110,0.04) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(74,123,157,0.03) 0%, transparent 60%);pointer-events:none;z-index:0;"></div>
      <div class="container">
        <h2>✦ 龙君即文明</h2>
        <p style="margin-top:1rem;">每一位"君王"阶真龙，其存在本身就是一个文明奇点。祂的呼吸改变气候，祂的意志塑造法律，祂的鳞片纹路化为建筑与文字。</p>
        <div class="dragon-cards">
          <a href="/bestiary/true-dragons/king-level/gregithos" class="dragon-card flip-card">
            <div class="flip-inner">
              <div class="flip-front"><h3>格雷曦斯</h3><div class="title">黄昏君王</div><p style="opacity:0.5;margin-top:2rem;">悬停以查看</p></div>
              <div class="flip-back"><h3>永暮国度</h3><p style="color:#c9a96e;font-size:0.85rem;margin-bottom:0.8rem;">权能「黄昏」· 群体绝对停滞</p><p>祂的领域是永恒的黄昏。被拉入者彻底定格，如同凝固在琥珀之中。</p><p style="font-size:0.85rem;opacity:0.7;margin-top:0.5rem;">"永恒的君王永不陨落，永恒的黄昏永不消亡。"</p></div>
            </div>
          </a>
          <a href="/bestiary/true-dragons/king-level/luxelia" class="dragon-card flip-card">
            <div class="flip-inner">
              <div class="flip-front"><h3>露曦莉娅</h3><div class="title">曦日君王</div><p style="opacity:0.5;margin-top:2rem;">悬停以查看</p></div>
              <div class="flip-back"><h3>永昼王庭</h3><p style="color:#c9a96e;font-size:0.85rem;margin-bottom:0.8rem;">权能「曦日」· 单体绝对毁灭</p><p>曾代表绝对秩序与辉煌。如今被腐败扭曲，意图以毁灭一切来"净化"世界。</p><p style="font-size:0.85rem;opacity:0.7;margin-top:0.5rem;">腐败对君王的终极扭曲：不会让她停止守护，只会让她用毁灭的方式去守护。</p></div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- 魔法体系 -->
    <section class="section" id="magic" style="background: linear-gradient(180deg, #0d1117 0%, #151d24 50%, #0d1117 100%); position: relative;">
      <div style="position:absolute;top:0;left:0;width:100%;height:100%;background: linear-gradient(90deg, rgba(201,169,110,0.02) 0%, transparent 50%, rgba(74,123,157,0.02) 100%);pointer-events:none;z-index:0;"></div>
      <div class="container">
        <h2>✦ 力量的天平</h2>
        <div class="magic-balance">
          <a href="/magic/dragon-tongue" class="magic-pan">
            <h3>✦ 龙语魔法 · 血源之道</h3>
            <p style="color:#c9a96e;font-size:0.9rem;margin-bottom:1rem;">—— 铭刻于血脉的古老记忆</p>
            <p>龙语是血脉中的<strong>先天刻印</strong>。吟唱龙语，即是唤醒祖先残留的力量碎片。它如呼吸般本能，如心跳般自然——但你无法选择它，你只能承受它。</p>
            <p style="font-size:0.9rem; opacity:0.7; margin-top:1rem;">—— 恩赐与诅咒同源。血脉越纯，力量越强，离腐败越近。</p>
          </a>
          <a href="/magic/rune-magic" class="magic-pan">
            <h3>✦ 符文魔法 · 认知之道</h3>
            <p style="color:#4a7b9d;font-size:0.9rem;margin-bottom:1rem;">—— 夏伊带来的启蒙火种</p>
            <p>符文魔法是<strong>后天的科学</strong>。通过灵魂场刻印符文结构，将魔力排列为可解析的代码。它打破了血统垄断——<strong>任何人</strong>都可以通过学习掌握它。</p>
            <p style="font-size:0.9rem; opacity:0.7; margin-top:1rem;">—— 在夏伊到来之前，这个世界不存在符文魔法。它代表着理性的启蒙。</p>
          </a>
        </div>
      </div>
    </section>

    <!-- 腐败与净化 -->
    <section class="section corruption" id="corruption">
      <div class="corruption-visual" style="width:100%;height:200px;position:relative;margin:2rem 0;overflow:hidden;">
        <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none">
          <path d="M50 100 Q200 60 400 100 Q600 140 750 100" stroke="#4a3a2a" stroke-width="2" fill="none" opacity="0.5"/>
          <path d="M50 100 Q200 140 400 100 Q600 60 750 100" stroke="#4a3a2a" stroke-width="1.5" fill="none" opacity="0.4"/>
          <path class="corrupt-vein" d="M50 100 Q200 120 400 100 Q600 80 750 100" stroke="#5a1a5a" stroke-width="3" fill="none" opacity="0" stroke-dasharray="800" stroke-dashoffset="800"/>
          <path class="corrupt-vein" d="M50 100 Q200 80 400 100 Q600 120 750 100" stroke="#4a1a4a" stroke-width="2" fill="none" opacity="0" stroke-dasharray="800" stroke-dashoffset="800"/>
          <circle class="corrupt-node" cx="200" cy="100" r="4" fill="#5a1a5a" opacity="0"/>
          <circle class="corrupt-node" cx="400" cy="100" r="5" fill="#5a1a5a" opacity="0"/>
          <circle class="corrupt-node" cx="600" cy="100" r="3.5" fill="#5a1a5a" opacity="0"/>
        </svg>
      </div>
      <div class="container">
        <h2>✦ 世界的癌症</h2>
        <div class="def-box">"腐败，是神的尸骸。是原初魔女被分食时，其痛苦、困惑与被背叛的意识碎片，与灰雾的'虚无'相互纠缠后形成的、持续蔓延的诅咒。"</div>
        <p style="text-align:center;margin:1.5rem 0;font-size:0.95rem;opacity:0.8;"><strong style="color:#c9a96e;">对龙族</strong>，腐败优先侵蚀血脉中的原初记忆，导致<strong>龙语魔法变异、精神先于肉体崩溃</strong>。<br><strong style="color:#4a7b9d;">对人类</strong>，因第二位魔女的精心设计，血脉中的魔女因子构成了天然抗性。普通人几乎不受低浓度腐败影响。</p>
        <div class="erosion-grid">
          <div class="erosion-item"><h3>✦ 肉体</h3><p>无序增生，溃烂融解。器官功能紊乱，血肉从有序的形态退化为混沌的肉块。</p></div>
          <div class="erosion-item"><h3>✦ 精神</h3><p>放大执念，扭曲意志。爱畸变为占有，守护畸变为囚禁，信仰畸变为狂热。</p></div>
          <div class="erosion-item"><h3>✦ 文明</h3><p>消解意义本身。语言丢失词汇，法律变得荒诞，艺术失去美感，历史被遗忘。</p></div>
        </div>
        <p style="text-align:center; margin-top:2rem;"><strong style="color:#c9a96e;">夏伊 · 第三魔女</strong> —— 她是行走的熔炉，唯一能安抚这份远古痛苦的存在。她的抉择，将定义世界的终局。</p>
      </div>
    </section>

    <!-- 故事开篇 -->
    <section class="section story" id="story">
      <div class="container">
        <h2>✦ 史诗的起点</h2>
        <blockquote>"三万千米的高空，她如流星般坠落。陨石撕开风暴，熔岩在她周身环绕。她睁开眼，忘记了过去，却听见了自己的名字——夏伊·帕莉薇尔。"</blockquote>
        <p>从龙巢小镇的尘埃中站起，她将与手持血色长枪的猎人姐妹、身负腐败秘密的黑袍少女一同，踏上净化世界、对抗神明的旅程。</p>
        <div class="story-links">
          <a href="/characters/xia-yi" class="cta-button">认识夏伊</a>
          <a href="/characters/hunters-sisters" class="cta-button">猎人姐妹</a>
          <a href="/history/the-three-eras" class="cta-button">探索历史</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let animId = null
let resizeHandler = null
let sectionObserver = null

onMounted(() => {
  // 粒子动画
  const canvas = document.getElementById('particles-canvas')
  if (canvas) {
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const particles = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.5 - 0.1,
        opacity: Math.random() * 0.6 + 0.2
      })
    }
    
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 169, 110, ${p.opacity})`
        ctx.fill()
        p.x += p.speedX
        p.y += p.speedY
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }
      })
      animId = requestAnimationFrame(animateParticles)
    }
    animateParticles()
    
    resizeHandler = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resizeHandler)
  }

  // 滚动渐显
  const sections = document.querySelectorAll('.custom-home .section')
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  }
  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, observerOptions)
  
  sections.forEach(section => {
    section.style.opacity = '0'
    section.style.transform = 'translateY(40px)'
    section.style.transition = 'opacity 1s ease-out, transform 1s ease-out'
    sectionObserver.observe(section)
  })
  
  // 首屏立即显示
  const hero = document.querySelector('.custom-home .hero')
  if (hero) {
    hero.style.opacity = '1'
    hero.style.transform = 'translateY(0)'
  }
})

onUnmounted(() => {
  // 清理粒子动画
  if (animId) cancelAnimationFrame(animId)
  // 清理 resize 监听
  if (resizeHandler) window.removeEventListener('resize', resizeHandler)
  // 清理滚动观察器
  if (sectionObserver) sectionObserver.disconnect()
})
</script>

<style>
/* ========== CSS 变量 ========== */
.custom-home {
  --bg-deep: #0a0c14;
  --text-primary: #d1cdc0;
  --text-heading: #f0ead8;
  --accent-blue: #4a7b9d;
  --accent-gold: #c9a96e;
  --corrupt-purple: #3a1a3a;
  font-family: 'Georgia', 'Times New Roman', serif;
  background: var(--bg-deep);
  color: var(--text-primary);
  line-height: 1.8;
}

/* ========== 粒子画布 ========== */
.particles-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}

/* ========== 通用区块 ========== */
.custom-home .section {
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.custom-home .container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.custom-home h1, 
.custom-home h2, 
.custom-home h3 {
  font-family: 'Cinzel', 'Georgia', 'Times New Roman', serif;
  color: var(--text-heading);
  font-weight: normal;
}

/* ========== 首屏 ========== */
.custom-home .hero {
  background: radial-gradient(ellipse at center, #1a1f30 0%, #0a0c14 70%);
  text-align: center;
  padding-top: 7rem;
}

.custom-home .hero h1 {
  font-size: 3.5rem;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #8a7a5a 0%, #8a7a5a 30%, #f0ead8 50%, #8a7a5a 70%, #8a7a5a 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: sunlightSweep 7s ease-in-out infinite;
}

@keyframes sunlightSweep {
  0% { background-position: 200% 0; }
  50% { background-position: 0% 0; }
  100% { background-position: -200% 0; }
}

.custom-home .subtitle {
  font-size: 1.4rem;
  line-height: 1.6;
  color: var(--accent-blue);
  margin-bottom: 2rem;
  font-style: italic;
}

.custom-home .hero p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
}

.custom-home .hero-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

.custom-home .hero-links a {
  color: var(--accent-gold);
  text-decoration: none;
  border: 1px solid var(--accent-gold);
  padding: 0.6rem 1.8rem;
  font-size: 0.95rem;
  letter-spacing: 1px;
  transition: all 0.3s;
}

.custom-home .hero-links a:hover {
  background: rgba(201, 169, 110, 0.1);
  color: #fff;
}

/* ========== 滚动提示 ========== */
.custom-home .scroll-hint {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  text-align: center;
}

.custom-home .scroll-hint p {
  font-size: 0.8rem;
  opacity: 0.6;
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.bounce-arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

/* ========== 神话区块 ========== */
.custom-home .myth {
  background: linear-gradient(160deg, #0a0c14 0%, #1a1520 40%, #0d1117 100%);
  position: relative;
}

.custom-home .myth::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(201,169,110,0.03) 0%, transparent 50%),
              radial-gradient(circle at 30% 70%, rgba(74,123,157,0.02) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.custom-home .myth .container {
  display: flex;
  gap: 3rem;
  align-items: center;
  flex-wrap: wrap;
}

.custom-home .myth .text { 
  flex: 1; 
  min-width: 280px; 
}

.custom-home .myth .visual {
  flex: 0 0 300px;
  height: 400px;
  position: relative;
}

.custom-home .inline-link {
  color: var(--accent-gold);
  text-decoration: none;
  font-size: 0.9rem;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

.custom-home .inline-link:hover {
  border-bottom-color: var(--accent-gold);
}

/* ========== 光环呼吸动画 ========== */
.glow-ring {
  animation: ring-breathe 4s ease-in-out infinite;
}

.glow-ring:nth-child(2) { animation-delay: 1s; }
.glow-ring:nth-child(3) { animation-delay: 2s; }

@keyframes ring-breathe {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.2; }
}

/* ========== 地图区块 ========== */
.custom-home .map-section {
  background: linear-gradient(180deg, #0d1117 0%, #121a1f 50%, #0f1419 100%);
  position: relative;
}

.custom-home .map-section::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 200px;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200" preserveAspectRatio="none"><path d="M0 200 L0 80 L100 60 L200 90 L300 40 L400 70 L500 30 L600 55 L700 20 L800 50 L900 35 L1000 65 L1100 25 L1200 50 L1200 200 Z" fill="%231a2030" opacity="0.4"/></svg>') repeat-x bottom;
  background-size: cover;
  pointer-events: none;
  z-index: 1;
}

.custom-home .map-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.custom-home .map-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  text-decoration: none;
  color: inherit;
  display: block;
}

.custom-home .map-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(201,169,110,0.05), transparent);
  transition: left 0.6s ease;
}

.custom-home .map-card:hover::before {
  left: 100%;
}

.custom-home .map-card:hover {
  border-color: var(--accent-gold);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.custom-home .map-card h3 {
  color: var(--text-heading);
  margin-bottom: 0.3rem;
}

/* ========== 龙君卡片 ========== */
.custom-home .dragon-cards {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}

.custom-home .dragon-card {
  width: 340px;
  text-decoration: none;
  color: inherit;
  display: block;
}

.flip-card {
  perspective: 1000px;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 320px;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}

.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  padding: 2rem 1.8rem;
  border: 1px solid rgba(255,255,255,0.1);
  background: #1c1f2a;
}

.flip-back {
  transform: rotateY(180deg);
  background: #1a1520;
  border-color: rgba(201,169,110,0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flip-back p {
  line-height: 1.5;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}

.flip-back h3 {
  margin-bottom: 0.6rem;
}

.flip-front h3 {
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
}

.custom-home .dragon-card .title { 
  color: var(--accent-blue); 
  font-style: italic; 
  margin-bottom: 1rem; 
}

/* ========== 魔法天平 ========== */
.custom-home .magic-balance {
  display: flex;
  gap: 2rem;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.custom-home .magic-pan {
  flex: 1;
  min-width: 250px;
  padding: 2rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  text-decoration: none;
  color: inherit;
  display: block;
  transition: all 0.3s;
}

.custom-home .magic-pan:hover {
  background: rgba(255,255,255,0.04);
  transform: translateY(-3px);
}

.custom-home .magic-pan:first-child { border-left: 3px solid var(--accent-gold); }
.custom-home .magic-pan:last-child { border-left: 3px solid var(--accent-blue); }

/* ========== 腐败区块 ========== */
.custom-home .corruption {
  background: linear-gradient(160deg, #1a0f20 0%, #0f0c18 40%, #0a0c14 100%);
  position: relative;
}

.custom-home .corruption::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: radial-gradient(ellipse at 30% 20%, rgba(80,20,80,0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 80%, rgba(20,20,60,0.06) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
}

.custom-home .def-box {
  background: rgba(80, 20, 80, 0.15);
  border: 1px solid rgba(120, 40, 120, 0.3);
  padding: 2rem;
  margin: 2rem 0;
  font-style: italic;
  font-size: 1.2rem;
  text-align: center;
}

.custom-home .erosion-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.custom-home .erosion-item {
  padding: 1.5rem;
  background: rgba(0,0,0,0.3);
  border-top: 2px solid var(--corrupt-purple);
}

/* ========== 腐败脉络动画 ========== */
.corrupt-vein, .corrupt-node {
  animation: corrupt-spread 4s ease-in-out infinite alternate;
}

.corrupt-vein:nth-child(3) { animation-delay: 0.2s; }
.corrupt-vein:nth-child(4) { animation-delay: 0.7s; }
.corrupt-node:nth-child(5) { animation-delay: 1.2s; }
.corrupt-node:nth-child(6) { animation-delay: 1.8s; }
.corrupt-node:nth-child(7) { animation-delay: 2.4s; }

@keyframes corrupt-spread {
  0% { opacity: 0; stroke-dashoffset: 800; }
  100% { opacity: 1; stroke-dashoffset: 0; }
}

@keyframes corrupt-node-appear {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.corrupt-node {
  animation-name: corrupt-node-appear, corrupt-spread;
  animation-duration: 2s;
}

/* ========== 故事区块 ========== */
.custom-home .story {
  background: radial-gradient(ellipse at center top, #1a2535 0%, #0d1117 50%, #0a0c14 100%);
  position: relative;
  text-align: center;
}

.custom-home .story::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><circle cx="400" cy="80" r="1" fill="%23c9a96e" opacity="0.4"/><circle cx="200" cy="150" r="1" fill="%23c9a96e" opacity="0.3"/><circle cx="600" cy="120" r="0.8" fill="%23c9a96e" opacity="0.35"/></svg>') no-repeat center;
  background-size: cover;
  pointer-events: none;
  z-index: 0;
}

.custom-home .story blockquote {
  font-size: 1.3rem;
  max-width: 700px;
  margin: 2rem auto;
  border-left: 3px solid var(--accent-gold);
  padding-left: 1.5rem;
  font-style: italic;
}

.custom-home .story-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-block;
  padding: 0.8rem 2.5rem;
  border: 1px solid var(--accent-gold);
  color: var(--accent-gold);
  text-decoration: none;
  letter-spacing: 2px;
  transition: all 0.3s;
}

.cta-button:hover {
  background: rgba(201, 169, 110, 0.1);
  color: #fff;
}

/* ========== 响应式 ========== */
@media (max-width: 768px) {
  .custom-home .hero h1 { font-size: 2.2rem; }
  .custom-home .section { padding: 4rem 1rem 2rem; }
  .custom-home .myth .container { flex-direction: column; }
  .custom-home .myth .visual { flex: 0 0 200px; height: 250px; }
  .custom-home .dragon-card { width: 100%; max-width: 340px; }
}
</style>