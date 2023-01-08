// import { fetchEventById } from 'services/FilmsApi';
import { fetchEventById } from 'services/FilmsApi';
export const FilmsSubPage = () => {
  fetchEventById();
  return (
    <ul>
      <div>Event</div>
    </ul>
  );
};
