import React, { useState } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Form.scss';

const Form = () => {
  const [value, setValue] = useState('');

  const handleFormSending = (event) => {
    event.preventDefault();

    fetch(`http://numbersapi.com/${value}`)
      .then(() => alert(`Запрос с номером ${value} выполнен успешно`))
      .catch(() => {
        alert(`При отправке запроса с номером ${value} что-то пошло не так...`);
      })
      .finally(() => setValue(''));
  };

  return (
    <form className="form" action="post" onSubmit={(event) => handleFormSending(event)}>
      <input
        className="form__input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type="tel"
        placeholder="Ваш номер..."
        required
      />
      <button className="form__button" type="submit">
        Заказать
        <FontAwesomeIcon className="form__cart" icon={faCartShopping} />
      </button>
    </form>
  );
};

export default Form;
