import React from 'react';

interface RequisitesProps {
  onSave: (obj) => void;
  onReset: () => void;
  title: string;
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

  return <Requisites onSave={saveHandler} onReset={onReset} title={title} />;
};

const NationalRequisites = ({ onSave, onReset, title }: RequisitesProps) => {
  const validateNationalFORM = () => {};

  const saveHandler = () => {
    validateNationalFORM();
    onSave({});
  };

  return <Requisites onSave={saveHandler} onReset={onReset} title={title} />;
};

const CreateRequisitesForm = ({ isForeign }) => {
  const createRequisites = () => {};
  const resetRequisites = () => {};

  if (isForeign) {
    return (
      <ForeignRequisites
        onSave={createRequisites}
        onReset={resetRequisites}
        title={'Save Requisites'}
      />
    );
  }

  return (
    <NationalRequisites
      onSave={createRequisites}
      onReset={resetRequisites}
      title={'Save Requisites'}
    />
  );
};

const updateRequisitesForm = ({ isForeign }) => {
  const updateRequisites = () => {};
  const resetRequisites = () => {};

  if (isForeign) {
    return (
      <ForeignRequisites
        onSave={updateRequisites}
        onReset={resetRequisites}
        title={'Обновление реквизитов'}
      />
    );
  }
  return (
    <NationalRequisites
      onSave={updateRequisites}
      onReset={resetRequisites}
      title={'Обновление реквизитов'}
    />
  );
};
