import Header from '@/components/header';
import VideoCard from '@/components/VideoCard';
import { dummyCards } from '@/constants/index';

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library"/>
      <section className='video-grid'>

        {dummyCards.map((card) => (
          <VideoCard {...card} key={card.id}/>
        ))}
    </section>
    </main>
  )
}

export default Page