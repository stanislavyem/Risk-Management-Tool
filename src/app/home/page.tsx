import './home.scss'
import SectionHero from '@/components/Sections/Hero/Hero'
import SectionDiscover from '@/components/Sections/Discover/Discover'
import SectionChat from '@/components/Sections/Chat/Chat'
import SectionConnected from '@/components/Sections/Connected/Connected'
import SectionMarkets from '@/components/Sections/Markets/Markets'
import SectionCreate from '@/components/Sections/Create/Create'
import OnBoarding from '@/components/Sections/OnBoarding/OnBoarding'
import InfoCreateEvent from '@/components/Blocks/InfoCreateEvent/InfoCreateEvent'

const Home = () => {
	return (
		<>
			<h1 className='sr-only'>RiskCtrlPro</h1>
			<SectionHero />
			<InfoCreateEvent />
			{/* <SectionCreate />	 */}
			{/* <OnBoarding /> */}
			{/* <SectionDiscover />
			<SectionMarkets />
			<SectionChat /> */}
			{/* <SectionConnected /> */}
		</>
	)
}

export default Home