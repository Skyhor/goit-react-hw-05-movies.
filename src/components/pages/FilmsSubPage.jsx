// import { FilmsPage } from './FilmsPage';
import { fetchEventById } from 'services/FilmsApi';
export const FilmsSubPage = () => {
  fetchEventById();
  return (
    <ul>
      <div>Event</div>
    </ul>
  );
};
