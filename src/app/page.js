import AddButton from '@/components/AddButton/AddButton';
import AddModal from '@/components/AddModal/AddModal';
import Balance from '@/components/Balance/Balance';
import Goals from '@/components/Goals/Goals';
import Header from '@/components/Header/Header';
import RecurringCard from '@/components/RecurringCard/RecurringCard';
import RegTransCard from '@/components/RegTransCard/RegTransCard';
import GoalProvider from '@/context/GoalContextProvider';
import { TransactionContext } from '@/context/TransactionContextProvider';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Home() {
  
  //state for toggling 
  
  return (
    <div>
      <GoalProvider>
        <TransactionContext>
          <Header></Header>
          <Balance></Balance>
          <Goals></Goals>
          <RecurringCard></RecurringCard>
          <RegTransCard></RegTransCard>
          <AddModal></AddModal>
          <AddButton></AddButton>
        </TransactionContext>
      </GoalProvider>
    </div>
  );
}
