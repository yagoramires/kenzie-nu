import React from 'react';
import styles from './Form.module.css';

const Form = () => {
  return (
    <form className={styles.form}>
      <label>
        <span>Descrição</span>
        <input type='text' placeholder='Digite aqui sua descrição' />
      </label>
      <span>Ex: Compra de roupas</span>
      <label>
        <span>Valor (R$)</span>
        <input type='text' placeholder='1' />
      </label>
      <label>
        <span>Tipo de valor</span>
        <select>
          <option value='entrada'>Entrada</option>
          <option value='saida'>Saída</option>
        </select>
      </label>
      <input type='submit' value='Inserir valor' />
    </form>
  );
};

export default Form;
