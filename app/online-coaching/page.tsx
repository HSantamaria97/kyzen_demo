import type { Metadata } from 'next';
import { TrainingPage } from '../../components/TrainingPage/TrainingPage';
export const metadata: Metadata = { title: 'Online coaching', description: 'Online coaching with workouts, meal plans, weekly calls, and support between check-ins.' };
export default function Page(){ return <TrainingPage index={2} />; }
