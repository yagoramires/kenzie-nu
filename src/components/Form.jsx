import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = ({ transactions, setTransactions }) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('Entrada');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !value || !type) {
      alert('Preencha todos os campos!');
    }

    let id;

    if (transactions.length > 0) {
      const length = transactions.length;
      const lastItem = transactions[length - 1];
      id = lastItem.id + 1;
    } else {
      id = 1;
    }

    const newValue = type === 'Entrada' ? value : `-${value}`;

    const newTransaction = {
      id,
      description,
      value: newValue,
      type,
    };

    setTransactions([...transactions, newTransaction]);
  };

  console.log(transactions);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <span>Descrição</span>
        <input
          type='text'
          placeholder='Digite aqui sua descrição'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </label>
      <span>Ex: Compra de roupas</span>
      <label>
        <span>Valor (R$)</span>
        <input
          type='number'
          placeholder='1'
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </label>
      <label>
        <span>Tipo de valor</span>
        <select
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value='Entrada'>Entrada</option>
          <option value='Saída'>Saída</option>
        </select>
      </label>
      <input type='submit' value='Inserir valor' />
    </form>
  );
};

export default Form;
