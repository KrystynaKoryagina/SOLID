import React from 'react';

interface RequisitesProps {
  onSave?: (obj) => void;
  onReset?: () => void;
  title?: string;
}

const Requisites = ({ onSave, onReset, title }: RequisitesProps) => {
  return (
    <form>
      <h1>{title}</h1>
      <input type="text" placeholder="Personal Number" />
      <input type="text" placeholder="Bank" />
      <input type="text" placeholder="IBAN" />
      <button onClick={onReset}>Reset</button>
      <button onClick={onSave}>Save</button>
    </form>
  );
};

const ForeignRequisites = ({ onSave, onReset, title }: RequisitesProps) => {
  const validateForeignFORM = () => {};

  const saveHandler = () => {
    validateForeignFORM();
    onSave({});
  };

  return (
    <div>
      <input type="text" placeholder="SWIFT" />
      <input type="text" placeholder="KPP" />
      <Requisites onSave={saveHandler} onReset={onReset} title={title} />
    </div>
  );
};

const PassportData = () => {
  return (
    <div>
      <input type="number" placeholder="Серия паспорта" />
      <input type="number" placeholder="Номер паспорта" />
    </div>
  );
};

const FullRequisitesForm = () => {
  return (
    <div>
      <PassportData />
      <Requisites />
    </div>
  );
};

const FullForeignRequisitesForm = () => {
  return (
    <div>
      <PassportData />
      <ForeignRequisites />
    </div>
  );
};
