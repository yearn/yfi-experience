const YEARN_APPS = [
	{
		'id': 'Docs',
		'title': 'docs',
		'url': 'https://docs.yearn.finance/',
		'description': 'Documentation for using, building, and learning about Yearn protocol.',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'Faq',
		'title': 'faq',
		'url': 'https://docs.yearn.finance/resources/faq',
		'description': 'Written guides and explanations for the most common questions about Yearn.',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'vaults',
		'title': 'vaults',
		'url': 'https://yearn.finance/#/portfolio',
		'description': 'Yearn main page, listing all vaults available for the selected chain.',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'Vaults at Yearn',
		'title': 'Vaults at Yearn',
		'url': 'https://vaults.yearn.finance/',
		'description': 'List of all vaults and their strategies, with a short explanation of what each strategy does.',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'Yearn watch',
		'title': 'Yearn watch',
		'url': 'https://yearn.watch/',
		'description': 'Online tool to monitor vaults and strategies, with the option to check several parameters',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'Partnership Program',
		'title': 'Partnership Program',
		'url': 'https://docs.yearn.finance/partners/introduction',
		'description': 'Documentation explaining how becoming a Yearn Partner (B2B)',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'talk to us about becoming a partner',
		'title': 'talk to us about becoming a partner',
		'url': 'https://yearnfinance.typeform.com/to/uP7xOJUN',
		'description': 'Typeform to get in touch with us about to become a Partner',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'welcome to yearn',
		'title': 'welcome to yearn',
		'url': 'https://yearnfinance.notion.site/yearnfinance/Welcome-to-Yearn-Finance-26d6c4210e3e405c9f02f84ba567a249#e27a50c1e1b5447dad154bd302ed2b13',
		'description': 'Our home page at Notion: info about our open roles, workgroup updates, and ecosystem ideas',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'github open issues',
		'title': 'github open issues',
		'url': 'https://contribute.yearn.rocks',
		'description': 'Compilation of all GH Issues currently open in our public repositories',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'contributors landing',
		'title': 'contributors landing',
		'url': 'https://www.notion.so/yearnfinance/Contributors-bceb03566612483ca139f800fb5452ad',
		'description': 'All information for those interested to contribute gathered in one place',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'new contributor registration',
		'title': 'new contributor registration',
		'url': 'https://www.notion.so/yearnfinance/Woofy-Quest-New-Contributors-031b438a593b4b1683959e56e76102a0',
		'description': 'Page to help the new contributor to find their place among us',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'pool of ideas',
		'title': 'pool of ideas',
		'url': 'https://yearnfinance.notion.site/yearnfinance/Pool-of-Ideas-d75383ade9154d8bb6163388c6c2b39b',
		'description': 'The page where you can share your idea to make Yearn better',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'coordinape (existing contributors)',
		'title': 'coordinape (existing contributors)',
		'url': 'https://coordinape.com/ ',
		'description': 'A Site to GIVE recognition to other contributors that worked with you in the current epoch',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'bounties',
		'title': 'bounties',
		'url': 'https://github.com/search?q=org%3Ayearn+label%3Abounty&type=issues',
		'description': 'A GitHub page where all current bounties are listed',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'yearn time + calendar',
		'title': 'yearn time + calendar',
		'url': 'https://yearn.fun/time',
		'description': 'A UTC synced clock with links to yearn calendar',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'about teal organisations',
		'title': 'about teal organisations',
		'url': 'https://reinventingorganizationswiki.com/',
		'description': 'A wiki page about Teal Organizations.',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'the blue pill',
		'title': 'the blue pill',
		'url': 'https://yfistory.org',
		'description': 'Website hosting an online version of "The Blue Pill" book.',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'how to coordinape',
		'title': 'how to coordinape',
		'url': 'https://yearnfinance.notion.site/coordinape-9a24f2e0be8246d9a51e135554b4842d',
		'description': 'An explainer on how coordinape works and how to use it',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'possible contributors',
		'title': 'possible contributors',
		'url': 'https://github.com/orgs/yearn/projects/14/views/1',
		'description': '',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'brownie strategy mix',
		'title': 'brownie strategy mix',
		'url': 'https://github.com/yearn/brownie-strategy-mix',
		'description': 'GitHub repository page where you can download the components needed to write a yVault strategy',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'yearn base strategy',
		'title': 'yearn base strategy',
		'url': 'https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseStrategy.sol',
		'description': 'Github file for the Base Strategy used by Yearn in the current yVault version',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'flashfish strategy tweet',
		'title': 'flashfish strategy tweet',
		'url': 'https://twitter.com/flashfish0x/status/1460246273488044036',
		'description': 'A Twitter thread about strategies at Yearn',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'newsletters',
		'title': 'newsletters',
		'url': 'https://yearn.substack.com/',
		'description': 'Yearn Newsletters substack page: Previous versions are stored there',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'blog',
		'title': 'blog',
		'url': 'https://blog.yearn.finance/',
		'description': 'Comms aggregator of all things Yearn. Currently translated to 13 languages',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'stats',
		'title': 'stats',
		'url': 'https://www.yfistats.com/',
		'description': 'A Power BI page with Yearn financial stats gathered on-chain',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'forum',
		'title': 'forum',
		'url': 'https://gov.yearn.finance/',
		'description': 'Governance forum where proposals for improvement are discussed.',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'snapshot',
		'title': 'snapshot',
		'url': 'https://snapshot.org/#/ybaby.eth',
		'description': 'Snapshot page where the proposals are voted, after being discussed in the forum',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'mini press kit',
		'title': 'mini press kit',
		'url': 'https://github.com/yearn/yearn-assets/tree/master/press-kit',
		'description': 'Resources for media (logos, color pallete, fonts, etc)',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'buybacks',
		'title': 'buybacks',
		'url': 'https://buyback.yearn.finance/',
		'description': 'Page tracking the buybacks made by Yearn Treasure',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'bowswap',
		'title': 'bowswap',
		'url': 'https://bowswap.finance/',
		'description': 'Platform to move funds between yVaults or from other Protocols to Yearn',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'ape tax',
		'title': 'ape tax',
		'url': 'https://ape.tax/',
		'description': 'Page where strategies are made available for testing before going to prod',
		'icon': '/yearnApps/docs.favicon.svg'
	},
	{
		'id': 'yearn vision',
		'title': 'yearn vision',
		'url': 'https://yearn.vision/?orgId=1&refresh=1m',
		'description': 'Platform where you can access dashboards with info from yVaults',
		'icon': '/yearnApps/docs.favicon.svg'
	}
];

export default YEARN_APPS;
