import OverallSummary from './components/OverallSummary';
import DetailSummary from './components/DetailSummary';

function App() {
  return (
    <main className=' h-screen grid sm:place-items-center font-Hanken'>
      <div className='grid sm:grid-cols-2 sm:rounded-2xl max-w-[44rem] sm:shadow-2xl'>
        <OverallSummary />
        <DetailSummary />
      </div>
    </main>
  );
}

export default App;
