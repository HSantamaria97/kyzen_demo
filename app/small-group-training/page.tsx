import type { Metadata } from 'next';
import { TrainingPage } from '../../components/TrainingPage/TrainingPage';
export const metadata: Metadata = { title: 'Small-group training', description: 'Small-group personal training in Austin for two or more people with similar goals.' };
export default function Page(){ return <TrainingPage index={1} />; }
