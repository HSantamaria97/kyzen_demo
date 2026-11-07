import Link from 'next/link';

export const services = [
  {
    href: '/one-on-one-training/', number: '1', title: 'One-on-one personal training',
    description: 'We plan, supervise, and track your workouts, with a longer-term program based on what you want to work toward.',
    detail: 'We train together, and we plan and track each workout as part of your longer-term program. We explain the exercises, help you with your form, and adjust the work as you progress.',
    image: '/assets/instruction2.png', alt: 'Francis coaching a client through a dumbbell shoulder press',
  },
  {
    href: '/small-group-training/', number: '2', title: 'Small-group training',
    description: 'Train with two or more people who have similar goals. We plan the sessions so everyone gets attention and guidance.',
    detail: 'Small-group sessions follow the same planned approach as one-on-one training. The group needs roughly similar goals so we can give everyone enough attention and keep the workout useful for each person.',
    image: '/assets/stock-small-group-kettlebells.png', alt: 'Two kettlebells arranged on green training turf',
  },
  {
    href: '/online-coaching/', number: '3', title: 'Online coaching',
    description: 'Follow workouts and meal plans on your own, with weekly calls to talk through your progress and questions between check-ins.',
    detail: 'We plan your workouts, meal plans, and longer-term program. You complete the workouts independently, and we have a weekly call to discuss how things are going. You can also send us questions between calls.',
    image: '/assets/stock-online-coaching-devices.jpg', alt: 'Angled view of a laptop and smartphone on a wooden desk',
  },
];

export function Services({ detailed = false }: { detailed?: boolean }) {
  return <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
    {services.map(service => <article key={service.title} className="service-card">
      <div className="service-photo"><img src={service.image} alt={service.alt} width="1600" height="1000" /></div>
      <div className="p-7"><h3>{service.title}</h3><p className="muted mt-4">{detailed ? service.detail : service.description}</p><Link className="text-link mt-6" href={service.href}>{detailed ? 'Explore this service' : 'Learn more'} <span aria-hidden="true">↗</span></Link></div>
    </article>)}
  </div>;
}
