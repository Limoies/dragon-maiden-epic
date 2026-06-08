<template>
  <div class="oc-gallery">
    <div class="filter-bar">
      <button 
        v-for="tag in filters" 
        :key="tag" 
        :class="{ active: activeFilter === tag }"
        @click="activeFilter = tag"
      >{{ tag }}</button>
    </div>
    <div class="card-grid">
      <a 
        v-for="chr in filteredCharacters" 
        :key="chr.name" 
        :href="chr.link" 
        class="oc-card"
      >
        <div class="card-inner">
          <h3>{{ chr.name }}</h3>
          <p class="card-race">{{ chr.race }}</p>
          <p class="card-desc">{{ chr.summary }}</p>
          <span class="card-link">查看详情 →</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('全部')
const filters = ['全部', '魔女', '人类', '龙族']

const characters = [
  {
    name: '夏伊·帕莉薇尔',
    race: '魔女',
    summary: '失忆的银发少女，从陨石中坠落的第三魔女。唯一能净化腐败的存在。',
    link: '/characters/xia-yi',
    tags: ['魔女', '主角']
  },
  {
    name: '莉娅·蔷薇鸟',
    race: '人类',
    summary: '蔷薇鸟小队队长，手持血色长枪。沉默寡言但永远挡在队友前面。',
    link: '/characters/hunters-sisters',
    tags: ['人类', '猎人']
  },
  {
    name: '莉姆·蔷薇鸟',
    race: '人类',
    summary: '小队最年轻的成员，拄着比人还高的法杖。怕疼但从不退缩。',
    link: '/characters/hunters-sisters',
    tags: ['人类', '猎人']
  },
  {
    name: '莉莉丝',
    race: '人类',
    summary: '黑袍黑发的魔女教会圣女。身负腐败秘密，是夏伊最神秘的同伴。',
    link: '/characters/lilith',
    tags: ['人类', '魔女教会']
  },
  {
    name: '露曦莉娅',
    race: '龙族',
    summary: '曦日君王，被腐败扭曲的灭世者。夏伊宿命的对手。',
    link: '/bestiary/true-dragons/king-level/luxelia',
    tags: ['龙族', '君王']
  },
  {
    name: '格雷曦斯',
    race: '龙族',
    summary: '黄昏君王，永暮国度的统治者。被众神隔绝于现世之外。',
    link: '/bestiary/true-dragons/king-level/gregithos',
    tags: ['龙族', '君王']
  },
  {
    name: '司康顿尔',
    race: '龙族',
    summary: '熔炉君主，锻造与火焰谱系的源头。沉眠于熔龙火山。',
    link: '/bestiary/true-dragons/lord-level/sconton',
    tags: ['龙族', '君主']
  }
]

const filteredCharacters = computed(() => {
  if (activeFilter.value === '全部') return characters
  return characters.filter(c => c.tags.includes(activeFilter.value))
})
</script>

<style scoped>
.oc-gallery { padding: 2rem 0; }
.filter-bar { display: flex; gap: 0.8rem; justify-content: center; margin-bottom: 2rem; flex-wrap: wrap; }
.filter-bar button { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color: #d1cdc0; padding: 0.5rem 1.5rem; cursor: pointer; font-family: inherit; font-size: 0.9rem; letter-spacing: 1px; transition: all 0.3s; }
.filter-bar button:hover { border-color: #c9a96e; color: #c9a96e; }
.filter-bar button.active { background: rgba(201,169,110,0.15); border-color: #c9a96e; color: #c9a96e; }
.card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; }
.oc-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 1.8rem; text-decoration: none; color: inherit; transition: all 0.4s cubic-bezier(0.4,0,0.2,1); position: relative; overflow: hidden; }
.oc-card::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 60%); opacity: 0; transition: opacity 0.4s; }
.oc-card:hover { transform: translateY(-8px) scale(1.02); border-color: rgba(201,169,110,0.4); box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(201,169,110,0.1); }
.oc-card:hover::after { opacity: 1; }
.card-inner { position: relative; z-index: 1; }
.card-inner h3 { color: #f0ead8; font-size: 1.3rem; margin-bottom: 0.3rem; font-family: 'Cinzel','Georgia',serif; font-weight: normal; }
.card-race { color: #c9a96e; font-size: 0.85rem; margin-bottom: 0.8rem; }
.card-desc { color: #a0a090; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1rem; }
.card-link { color: #4a7b9d; font-size: 0.85rem; opacity: 0; transform: translateX(-10px); transition: all 0.3s; display: inline-block; }
.oc-card:hover .card-link { opacity: 1; transform: translateX(0); }
</style>
