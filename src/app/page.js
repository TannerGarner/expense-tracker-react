import AddButton from '@/components/AddButton/AddButton';
import Balance from '@/components/Balance/Balance';
import Goals from '@/components/Goals/Goals';
import Header from '@/components/Header/Header';
import RecurringCard from '@/components/RecurringCard/RecurringCard';
import RegTransCard from '@/components/RegTransCard/RegTransCard';
import RegTransInput from '@/components/RegTransCard/RegTransInput';
import GoalProvider from '@/context/GoalContextProvider';
import TransactionProvider from '@/context/TransactionContextProvider';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Home() {
  
  return (
    <div>
        <Header></Header>
        <Balance></Balance>
        <Goals></Goals>
        <RegTransCard></RegTransCard>
        <RecurringCard></RecurringCard>
        <AddButton></AddButton>
    </div>
  );
}
