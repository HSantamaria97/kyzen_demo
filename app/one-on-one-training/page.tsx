import type { Metadata } from 'next';
import { TrainingPage } from '../../components/TrainingPage/TrainingPage';
export const metadata: Metadata = { title: 'One-on-one personal training', description: 'Mobile one-on-one personal training in Austin with a planned program, supervised workouts, and progress tracking.' };
export default function Page(){ return <TrainingPage index={0} />; }
