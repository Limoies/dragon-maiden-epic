import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from './Layout.vue'
import OCGallery from './components/OCGallery.vue'
import Timeline from './components/Timeline.vue'
import MagicParticles from './components/MagicParticles.vue'
import MapViewer from './components/MapViewer.vue'
import RelationGraph from './components/RelationGraph.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('OCGallery', OCGallery)
    app.component('Timeline', Timeline)
    app.component('MagicParticles', MagicParticles)
    app.component('MapViewer', MapViewer)
    app.component('RelationGraph', RelationGraph)
  }
}
