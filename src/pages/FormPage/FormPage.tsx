import Form from '@/components/Form';
import Popup from '@/components/Popup';
import FormCard from '@/components/FormCard';
import { useAppSelector } from '@/store/hooks';
import './FormPage.scss';

const FormPage = () => {
  const { characters } = useAppSelector((state) => state.formSlice);

  return (
    <div className="form-page">
      <h1 className="form-page__title">Form page</h1>
      <Form />
      <div className="form-page__cards">
        {characters.length > 0 ? (
          characters.map((character) => <FormCard key={character.id} character={character} />)
        ) : (
          <div className="form-page__cards_empty">No data</div>
        )}
      </div>
      <Popup text={'Character is created succesfully'} />
    </div>
  );
};

export default FormPage;
