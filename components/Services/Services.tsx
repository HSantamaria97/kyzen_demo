import Link from 'next/link';

export const services = [
  {
    href: '/one-on-one-training/', number: '1', title: 'One-on-one personal training',
    description: 'We plan, supervise, and track your workouts, with a longer-term program based on what you want to work toward.',
    detail: 'We train together, and we plan and track each workout as part of your longer-term program. We explain the exercises, help you with your form, and adjust the work as you progress.',
    image: '/assets/training-gym.jpg', alt: 'Francis demonstrating a dumbbell exercise',
  },
  {
    href: '/small-group-training/', number: '2', title: 'Small-group training',
    description: 'Train with two or more people who have similar goals. We plan the sessions so everyone gets attention and guidance.',
    detail: 'Small-group sessions follow the same planned approach as one-on-one training. The group needs roughly similar goals so we can give everyone enough attention and keep the workout useful for each person.',
    image: '/assets/stock-dumbbells.jpg', alt: 'Dumbbells arranged on a gym rack',
  },
  {
    href: '/online-coaching/', number: '3', title: 'Online coaching',
    description: 'Follow workouts and meal plans on your own, with weekly calls to talk through your progress and questions between check-ins.',
    detail: 'We plan your workouts, meal plans, and longer-term program. You complete the workouts independently, and we have a weekly call to discuss how things are going. You can also send us questions between calls.',
    image: '/assets/stock-home-equipment.jpg', alt: 'Weights and an exercise mat for independent workouts',
  },
];

export function Services({ detailed = false }: { detailed?: boolean }) {
  return <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
    {services.map(service => <article key={service.title} className="service-card">
      <div className="service-photo"><img src={service.image} alt={service.alt} loading="lazy" /></div>
      <div className="p-7"><p className="eyebrow">{service.number} / Ways to work together</p><h3>{service.title}</h3><p className="muted mt-4">{detailed ? service.detail : service.description}</p><Link className="text-link mt-6" href={service.href}>{detailed ? 'Ask us about this option' : 'Find out what is included'} <span aria-hidden="true">↗</span></Link></div>
    </article>)}
  </div>;
}
