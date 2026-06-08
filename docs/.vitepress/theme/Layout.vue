<template>
  <CustomHome v-if="isHome" />
  <template v-else>
    <MagicParticles faint />
    <DefaultLayout />
  </template>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CustomHome from './components/CustomHome.vue'
import MagicParticles from './components/MagicParticles.vue'

const DefaultLayout = DefaultTheme.Layout
const { page } = useData()
const isHome = computed(() => page.value.relativePath === 'index.md')
</script>