import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "龙与少女的史诗",
  description: "一个关于魔女、巨龙与腐败的奇幻世界",
  
  // 顶部导航栏
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '世界观', link: '/worldview/overview' },
      { text: '神话', link: '/mythology/the-first-witch' },
      { text: '地理', link: '/geography/shayis-island' },
      { text: '地图', link: '/geography/map' },
      { text: '角色', link: '/characters/' },
      { text: '关系', link: '/characters/relation' },
      { text: '组织', link: '/factions/kingdoms/' },
      { text: '物品', link: '/items/weapons/theory' },
      { text: '魔法', link: '/magic/system/' },
      { text: '历史', link: '/history/' },
      { text: '图鉴', link: '/bestiary/index' },
      { text: '小说', link: '/novel/' },
    ],

    // 侧边栏配置
    sidebar: {
      '/worldview/': [
        {
          text: '世界观',
          items: [
            { text: '总览', link: '/worldview/overview' },
          ]
        }
      ],
      '/mythology/': [
        {
          text: '神话与起源',
          items: [
            { text: '原初魔女与创世之伤', link: '/mythology/the-first-witch' },
          ]
        }
      ],
      '/geography/': [
        {
          text: '地理与国家',
          items: [
            { text: '夏伊斯岛', link: '/geography/shayis-island' },
          ]
        },
        {
          text: '染血草原',
          collapsed: false,
          items: [
            { text: '草原总览', link: '/geography/bloodgrass-plains/' },
            { text: '自然奇观', link: '/geography/bloodgrass-plains/natural-wonders' },
            { text: '龙种', link: '/geography/bloodgrass-plains/dragons' },
          ]
        },
        {
          text: '地理体系',
          collapsed: false,
          items: [
            { text: '地理体系总览', link: '/geography/system' },
          ]
        }
      ],
      '/characters/': [
        {
          text: '角色总览',
          items: [
            { text: '角色总览', link: '/characters/' },
          ]
        },
        {
          text: '魔女',
          collapsed: true,
          items: [
            { text: '夏伊·帕莉薇尔', link: '/characters/xia-yi' },
          ]
        },
        {
          text: '人类',
          collapsed: false,
          items: [
            { text: '人类总览', link: '/characters/humans/' },
            { text: '莉莉丝', link: '/characters/lilith' },
            { text: '猎人姐妹', link: '/characters/hunters-sisters' },
          ]
        }
      ],
      '/magic/': [
        {
          text: '魔法体系总览',
          items: [
            { text: '魔法体系', link: '/magic/system/' },
          ]
        },
        {
          text: '龙语魔法',
          collapsed: false,
          items: [
            { text: '龙语魔法总览', link: '/magic/dragon-tongue' },
            { text: '民俗魔法', link: '/magic/folk-magic/' },
            { text: '血脉魔法', link: '/magic/blood-magic/' },
          ]
        },
        {
          text: '符文魔法',
          collapsed: false,
          items: [
            { text: '符文魔法总览', link: '/magic/rune-magic' },
          ]
        },
        {
          text: '仪式魔法',
          collapsed: false,
          items: [
            { text: '仪式魔法总览', link: '/magic/ritual-magic/' },
            { text: '卷一·垂眸之刻篇', link: '/magic/ritual-magic/volume-1/' },
            { text: '卷二·简易常仪篇', link: '/magic/ritual-magic/volume-2/' },
          ]
        }
      ],
      '/history/': [
        {
          text: '纪元总览',
          items: [
            { text: '时间轴线', link: '/history/' },
          ]
        },
        {
          text: '纪元编年',
          collapsed: false,
          items: [
            { text: '神话与起源', link: '/mythology/the-first-witch' },
            { text: '第一纪元：人创时代', link: '/history/era-1' },
            { text: '第二纪元：神战时代', link: '/history/era-2' },
            { text: '第三纪元：腐蚀纪元', link: '/history/era-3' },
          ]
        }
      ],
      '/factions/': [
        {
          text: '公会与势力',
          items: [
            { text: '猎人公会', link: '/factions/hunters-guild' },
            { text: '神圣教会', link: '/factions/kingdoms/sol-empire/holy-church' },
            { text: '魔女教会', link: '/factions/witch-church/' },
            { text: '神选伊斯希尔学院', link: '/factions/isel-academy/' },
          ]
        },
        {
          text: '诸国度',
          collapsed: false,
          items: [
            { text: '诸国度总览', link: '/factions/kingdoms/' },
            { text: '黄昏之国', link: '/factions/kingdoms/twilight-realm/' },
          ]
        },
        {
          text: '曦日帝国',
          collapsed: false,
          items: [
            { text: '曦日帝国总览', link: '/factions/kingdoms/sol-empire/' },
            { text: '曦日王庭', link: '/factions/kingdoms/sol-empire/sol-court' },
            { text: '神圣教会', link: '/factions/kingdoms/sol-empire/holy-church' },
            { text: '瓦伦迪亚', link: '/factions/kingdoms/sol-empire/valendia' },
            { text: '奥蕾莉亚', link: '/factions/kingdoms/sol-empire/aurelia' },
            { text: '贝尔纳斯', link: '/factions/kingdoms/sol-empire/bernas' },
          ]
        }
      ],
      '/bestiary/': [
  {
    text: '龙类图鉴',
    items: [
      { text: '图鉴总览', link: '/bestiary/index' },
    ]
  },
  {
    text: '真龙种',
    collapsed: false,
    items: [
      { text: '真龙种概述', link: '/bestiary/true-dragons/index' },
      {
        text: '神阶',
        collapsed: false,
        items: [
          { text: '神阶概述', link: '/bestiary/true-dragons/god-level/index' },
          { text: '北方的神', link: '/bestiary/true-dragons/god-level/northern-god' },
          { text: '南方的死神', link: '/bestiary/true-dragons/god-level/southern-death-god' },
        ]
      },
      {
        text: '君王阶',
        collapsed: false,
        items: [
          { text: '君王阶概述', link: '/bestiary/true-dragons/king-level/index' },
          { text: '露曦莉娅（曦日君王）', link: '/bestiary/true-dragons/king-level/luxelia' },
          { text: '格雷曦斯（黄昏君王）', link: '/bestiary/true-dragons/king-level/gregithos' },
        ]
      },
      {
        text: '君主阶',
        collapsed: false,
        items: [
          { text: '君主阶概述', link: '/bestiary/true-dragons/lord-level/index' },
          { text: '司康顿尔（熔炉君主）', link: '/bestiary/true-dragons/lord-level/sconton' },
        ]
      },
    ]
  },
  {
    text: '亚龙种',
    collapsed: false,
    items: [
      { text: '亚龙种概述', link: '/bestiary/sub-dragons/index' },
      {
        text: '鸟龙目',
        items: [
          { text: '鸟龙目概述', link: '/bestiary/sub-dragons/bird-dragons/index' },
          { text: '风翎枭龙', link: '/bestiary/sub-dragons/bird-dragons/wind-owl-dragon' },
        ]
      },
      {
        text: '飞龙目',
        items: [
          { text: '飞龙目概述', link: '/bestiary/sub-dragons/flying-dragons/index' },
          { text: '烬焰脊龙', link: '/bestiary/sub-dragons/flying-dragons/ember-spine-dragon' },
        ]
      },
      {
        text: '兽龙目',
        items: [
          { text: '兽龙目概述', link: '/bestiary/sub-dragons/beast-dragons/index' },
        ]
      },
      {
        text: '海龙目',
        items: [
          { text: '海龙目概述', link: '/bestiary/sub-dragons/sea-dragons/index' },
        ]
      },
      {
        text: '空龙目',
        items: [
          { text: '空龙目概述', link: '/bestiary/sub-dragons/sky-dragons/index' },
          { text: '云鲸', link: '/bestiary/sub-dragons/sky-dragons/cloud-whale' },
        ]
      },
    ]
  },
  {
    text: '龙兽',
    collapsed: false,
    items: [
      { text: '龙兽概述', link: '/bestiary/dragon-beasts/index' },
      { text: '林麋龙', link: '/bestiary/dragon-beasts/forest-deer-dragon' },
      { text: '风铃雀龙', link: '/bestiary/dragon-beasts/wind-bell-dragon' },
    ]
  },
],
      '/others/': [
        {
          text: '蔷薇谷日报',
          items: [
            { text: '📰 蔷薇谷日报', link: '/factions/kingdoms/sol-empire/bernas' },
          ]
        },
        {
          text: '其他',
          collapsed: true,
          items: [
            { text: '经济·货币体系', link: '/others/economy/' },
            { text: '小说草稿', link: '/others/novel-draft/' },
          ]
        }
      ],
      '/items/': [
        {
          text: '神器与物品',
          items: [
            { text: '净化吊坠', link: '/items/pendant-of-purification' },
          ]
        },
        {
          text: '武器',
          collapsed: false,
          items: [
            { text: '武器总览', link: '/items/weapons/theory' },
          ]
        }
      ],
    },

    // 页脚
    footer: {
      message: '龙与少女的史诗 · 世界观设定集',
      copyright: '© 所有设定归属于创作者'
    }
  }
})