const path = require('path');
const moment = require('moment');

module.exports = {
  title: "阿浩的coding日记",
  description: '一个编程小白学习之旅',
  dest: 'public',
  permalink: "/:regular",
  head: [
    ['link', { rel: 'icon', href: '/favico.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          return moment(timestamp,).format("YYYY年MM月DD日 HH:mm:ss")
        },
        dateOptions:{
          hour12: false
        }
      }
    ]
  ],
  themeConfig: {
	    /**
     * valine 设置 (if you need valine comment )
     */
    valineConfig: {
      appId: process.env.YOUR_APPID,// your appId
      appKey: process.env.YOUR_KEY, // your appKey
      serverURLs: 'https://blogapi.shenghao.xyz'
    },
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '文档', 
        icon: 'reco-message',
        items: [
          { text: '我的文档', link: '/docs/theme-reco/' }
        ]
      },
      { text: '联系作者', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/dgutboy/HarderBlog', icon: 'reco-github' }
        ]
      }
    ],
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: 'QQ',
        desc: 'Do you have any question? Contact with me.',
        email: '1511673630@qq.com',
        link: 'http://wpa.qq.com/msgrd?v=3&uin=1511673630&site=qq&menu=yes'
      },
    ],
	//socialLinks: [     // 信息栏展示社交信息
	//{ icon: 'reco-github', link: 'https://github.com/recoluan' },
	//{ icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
	//],
	//默认暗色模式
	mode: 'dark', 
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 文档侧边栏
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ],
    },  
    // 最后更新时间
    lastUpdated: '上次更新',
    // 作者
    author: 'Harder',
    // 作者头像
    authorAvatar: '/conan.png',
    // 备案号
    record: '湘ICP备2022000762号-1',
    recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',
    cyberSecurityRecord: '粤公网安备 44130202001064号',
    cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44130202001064',
    // 项目开始时间
    startYear: '2021'
    /**
     * 密钥 (if your blog is private)
     */

    //keyPage: {
    //  keys: ['e10adc3949ba59abbe56e057f20f883e'], // 1.3.0 版本后需要设置为密文
    //  color: '#42b983', // 登录页动画球的颜色
    //  lineColor: '#42b983' // 登录页动画线的颜色
    //},

  },
  markdown: {
    lineNumbers: true
  },
  // configureWebpack: () => {
  //   const NODE_ENV = process.env.NODE_ENV
  //   return {
  //     output: {
  //       publicPath: 'https://code.bdstatic.com/npm/leancloud-storage@4.12.0/dist/av-min.js'
  //     },
  //     resolve: {
  //       alias: {
  //         'public': path.resolve(__dirname, './public') 
  //       }
  //     }
  //   }
  // }
}  
