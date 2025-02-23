import { Layout } from './components/layout'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Services } from './components/services'
import { Stats } from './components/stats'
import { Pricing } from './components/pricing'
import { Contact } from './components/contact'

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Pricing />
      <Contact />
    </Layout>
  );
}