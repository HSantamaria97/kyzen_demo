import Link from 'next/link';

export function CoachIntro() {
  return (
    <section className="coach-intro" id="about" aria-labelledby="coach-title">
      <div className="home-wrap grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <figure className="coach-portrait">
          <img src="/assets/kyzen-coach-portrait.png" alt="Francis Paesano, the trainer behind Kyzen, standing outdoors on a sports field" width={382} height={510} loading="lazy" />
          <figcaption>Francis Paesano · The person behind Kyzen</figcaption>
        </figure>
        <div className="coach-intro-copy">
          <p className="eyebrow">About me</p>
          <h2 id="coach-title">Hi, I’m<br /><span>Francis Paesano.</span></h2>
          <p className="coach-lead">I started my career as a software engineer, and fitness was something I did outside of work. I enjoyed learning about training and eventually began working part-time as a personal trainer at larger gyms.</p>
          <p>What I enjoy most is teaching. I take time to explain what we’re doing and why, and I want you to feel comfortable asking questions. I have experience with weight training and specialize in calisthenics—using bodyweight movements to build strength and control.</p>
          <p>I’ve trained people of different ages and experience levels, and I particularly enjoy helping beginners. We’ll start with what you can do now, work on proper form, and build from there. Fitness has added a lot to my life, and I want to help other people experience that for themselves.</p>
          <div className="coach-values"><span>Weight training</span><span>Calisthenics</span><span>Personal attention</span></div>
          <Link href="/contact/" className="button">Book a free consultation <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
