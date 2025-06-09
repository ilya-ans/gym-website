import Hero from '../components/Hero';
import News from '../sections/NewsSection';
import Contacts from '../sections/contacts';

export default function HomePage() {
    return (
      <div>
        <Hero />
        <News />
        <Contacts />
      </div>
    );
  }