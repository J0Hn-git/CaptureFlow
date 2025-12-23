import Header from '@/components/header';
import VideoCard from '@/components/VideoCard';

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library"/>
      <section className='video-grid'>
      <VideoCard 
      id="1"
      title="CaptureFlow Message - 30 June 2025"
      thumbnail="/assets/samples/thumbnail (1).png"
      createdAt={new Date("2025-05-22 06:25:54")}
      userImg="/assets/images/jason.png"
      username="Jason"
      views={10}
      visibility="public"
      duration={156}
      />
    </section>
    </main>
  )
}

export default Page