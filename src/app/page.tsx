import TripSearch from './Components/TripSearch';
import QuickSearch from './Components/QuickSearch';
import RecommendedTrips from './Components/RecommendedTrips';
import CaracteristicasSection from '@/components/CaracteristicasSection';

export default function Home() {
  return (
    <>
      <div>
        <TripSearch />
        <QuickSearch />
        <RecommendedTrips />
        <CaracteristicasSection />
      </div>
    </>
  );
}
