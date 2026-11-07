export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  imageCredit: { name: string; url?: string };
  cover?: { image: string; imageAlt: string; imageCredit: { name: string; url?: string } };
  sections: { heading: string; paragraphs: string[]; points?: string[] }[];
  sources: { label: string; url: string }[];
};

const activitySource = { label: 'CDC: Adult Activity Overview', url: 'https://www.cdc.gov/physical-activity-basics/guidelines/adults.html' };
const habitsSource = { label: 'NIH/NIDDK: Tips for Starting Physical Activity', url: 'https://www.niddk.nih.gov/health-information/weight-management/tips-get-active/tips-starting-physical-activity' };

export const posts: BlogPost[] = [
  {
    slug: 'starting-strength-training',
    title: 'Starting strength training: make the first step manageable',
    category: 'Strength basics',
    excerpt: 'A clear starting point matters more than a complicated routine. Here is what to think through before your first session.',
    image: '/assets/stock-dumbbells.jpg',
    imageAlt: 'Dumbbells and kettlebells arranged on gym racks',
    imageCredit: { name: 'RDNE Stock project / Pexels', url: 'https://www.pexels.com/photo/close-up-shot-of-dumbbells-equipment-7187871/' },
    sections: [
      { heading: 'Start with a useful goal', paragraphs: ['What would you like training to make possible? Feeling more confident around weights, returning to a routine, and learning unfamiliar exercises are all useful starting points. Write down one priority and the practical constraints around it.', 'Bring that context to your first conversation with a trainer. Your available time, experience, and equipment help shape an appropriate plan. A program should make your next step clearer.'] },
      { heading: 'Give yourself room to learn', paragraphs: ['Treat the first sessions as a chance to learn the setup, ask questions, and understand how the movements feel. The exercise name is only one part of the picture; you should also understand the position, equipment, and purpose.', 'Use a simple training note to record the exercises you practiced and the questions you want to revisit. Avoid turning every session into a test of your limits.'], points: ['Tell your trainer about previous training and relevant limitations.', 'Ask for a demonstration when an exercise is unfamiliar.', 'Choose a setting and schedule you can return to consistently.'] },
      { heading: 'Understand the bigger picture', paragraphs: ['CDC guidance for adults includes muscle-strengthening activity on at least two days each week, alongside aerobic activity. That is a general public-health guideline, rather than a personal training prescription.', 'If you are beginning from a less active routine, build gradually. The goal is to find a starting point you can repeat and review as you develop.'] },
    ],
    sources: [activitySource, habitsSource],
  },
  {
    slug: 'calisthenics-starting-point',
    title: 'Calisthenics begins with a starting point, not a handstand',
    category: 'Calisthenics',
    excerpt: 'The advanced movements catch your eye. Your own training can begin with simpler bodyweight exercises and a clear purpose.',
    image: '/assets/training-outdoors.jpg',
    imageAlt: 'Francis demonstrating an outdoor L-sit in daylight',
    imageCredit: { name: 'Kyzen — Francis demonstrating an advanced L-sit' },
    cover: { image: '/assets/training-outdoors.jpg', imageAlt: 'Francis demonstrating an outdoor L-sit in daylight', imageCredit: { name: 'Kyzen — Francis demonstrating an advanced L-sit' } },
    sections: [
      { heading: 'Look beyond the highlight', paragraphs: ['Handstands and L-sits are memorable examples of bodyweight movement. They are also advanced demonstrations, not entry requirements for calisthenics.', 'Calisthenics uses bodyweight as resistance. A useful introductory conversation is about the movements you can currently practice with control, the space you have, and the support you need. Your starting point can look very different from a photo in the gallery.'] },
      { heading: 'Make the movement fit the person', paragraphs: ['Discuss exercise variations with your coach instead of choosing a movement only because it looks impressive. The aim is to understand the task and choose an appropriate level of difficulty.', 'Ask how an exercise fits your plan and what you should practice before moving to a more demanding variation. Clear feedback is more useful than chasing a new skill every week.'], points: ['What can I practice with the equipment and space available?', 'What does a controlled repetition look like for this movement?', 'How will we decide when a different variation makes sense?'] },
      { heading: 'Keep the routine enjoyable', paragraphs: ['NIH guidance encourages choosing activities you enjoy and starting gradually. Those ideas are useful when deciding whether bodyweight training fits your routine.', 'You can discuss both weight training and calisthenics with Francis. A consultation is a chance to explore the approach, explain your interests, and agree on realistic next steps.'] },
    ],
    sources: [habitsSource],
  },
  {
    slug: 'training-around-a-busy-week',
    title: 'How to make room for training in a busy week',
    category: 'Building a routine',
    excerpt: 'Start with your actual calendar, reduce avoidable friction, and build a routine that leaves room for real life.',
    image: '/assets/stock-park-running.jpg',
    imageAlt: 'A man jogging along a path in a green park',
    imageCredit: { name: 'Ketut Subiyanto / Pexels', url: 'https://www.pexels.com/photo/man-running-in-park-4719916/' },
    sections: [
      { heading: 'Plan around the week you have', paragraphs: ['Look at your calendar before choosing a training schedule. Include work, family responsibilities, travel, and the time it takes to get ready. Identify the windows you can realistically protect.', 'NIH guidance recommends specific goals and putting activity into your schedule. A concrete appointment is easier to plan around than a general intention to exercise more.'] },
      { heading: 'Reduce the steps between you and the session', paragraphs: ['Think through the practical details: where you will train, how you will access the space, and what equipment is available. Mobile personal training can remove a separate gym journey when a suitable home or apartment training space is available.', 'Prepare a fallback for the weeks that change. That might mean discussing another appointment or adjusting the location with your trainer. It helps to decide how you will handle disruption before it happens.'], points: ['Choose the training location before the session.', 'Keep the appointment details somewhere easy to find.', 'Talk openly about the schedule you can sustain.'] },
      { heading: 'Let smaller amounts count', paragraphs: ['CDC guidance explains that activity can be spread through the week and that some activity is better than none. A difficult week does not have to become an all-or-nothing decision.', 'Keep a brief note of what worked and what made the schedule difficult. Use that information to refine your plan with your coach. A useful routine is one you can return to after an interruption.'] },
    ],
    sources: [habitsSource, activitySource],
  },
];

export function getPost(slug: string) { return posts.find(post => post.slug === slug); }
