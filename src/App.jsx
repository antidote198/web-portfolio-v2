import { Navbar, Hero, About, Projects, Skills, Contact } from './components';

const App = () => (
    <div className="bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </div>
);

export default App;
