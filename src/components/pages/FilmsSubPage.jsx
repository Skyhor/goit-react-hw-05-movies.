// import { FilmsPage } from './FilmsPage';
import { fetchEventById } from 'services/FilmsApi';
export const FilmsSubPage = () => {
  fetchEventById();
  return (
    <ul>
      <div>Event</div>
      <div>Ef</div>
      <div>Event</div>
      <div>Ef</div>
      <div>Event</div>
      <div>Ef</div>
      <div>Event</div>
      <div>Ef</div>
      <div>Event</div>
      <div>Ef</div>
    </ul>
  );
};
