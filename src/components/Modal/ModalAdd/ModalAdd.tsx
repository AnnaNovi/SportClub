import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { groupsList, sportKind, ageKind, hallKind } from '../../../typescript/main';
import { closeModalAction } from '../../../store/modalReducer';
import { RootState } from '../../../store/store';
import './ModalAdd.css'
import ModalAddClient from './ModalAddClient/ModalAddClient';
import ModalAddTrainer from './ModalAddTrainer/ModalAddTrainer';

function ModalAdd() {
  const dispatch = useDispatch();
  const modalContent = useSelector((state:RootState) => state.modal);
  const [modalInfo, setModalInfo] = useState<groupsList[] | null>(null);
  const [selectedGroup, setGroup] = useState<groupsList | null>(null);
  const [addData, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/data/groups`)
      .then(response => response.json())
      .then(data => setModalInfo([...data]));
  }, []);

  let modalHeader, modalBody, personForHandleForm = '';

  switch (modalContent.modalActionDetail) {
    case 'addClient':
      modalHeader = <h3 className='modalTitle'>Добавить клиента</h3>;
      personForHandleForm = 'clients';
      modalBody = <ModalAddClient handleInput={handleInput} modalInfo={modalInfo} selectedGroup={selectedGroup}/>
      break;
    case 'addTrainer':
      modalHeader = <h3 className='modalTitle'>Добавить тренера</h3>;
      personForHandleForm = 'trainers';
      modalBody = <ModalAddTrainer handleInput={handleInput} modalInfo={modalInfo} />
      break;
  }

  function handleInput(event: any) {
    if(event.target.name === 'addGroup') {
      //@ts-expect-error
      setGroup(modalInfo.find(group => group.idGroup === +event.target.value) ?? null);
    }
    setData({...addData, [event.target.name]: event.target.value})
  }

  function handleModalForm(event: any, personType: string) {
    event.preventDefault();
    fetch(`http://localhost:3001/data/${personType}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(addData),
    });
  }

  return ( 
    <div className="modalOverlay">
      <div className="Modal">
        <div className="modalHeader">
          {modalHeader}
          <svg className='modalClose' onClick={() => dispatch(closeModalAction())} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
        </div>
        <div className="modalBody">
          <form className='modalForm' onSubmit={(event) => handleModalForm(event, personForHandleForm)}>
          {modalBody}
          <div className='modalFooter'>
            <button className='modalActionBtn'>Добавить</button>
            <input type="reset" value="Сбросить" className='modalResetBtn' onClick={() => setGroup(null)}/>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default ModalAdd;