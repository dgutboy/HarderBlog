module.exports = {
  title: "About | Harder Blog",
  description: '一个编程小白学习之旅',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
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
	//文档侧边栏
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },  
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
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'Harder',
    // 作者头像
    authorAvatar: '/conan.png',
    // 备案号
    record: '3401972225860',
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

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  