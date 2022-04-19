import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { genderKind, cardKind, groupsList, sportKind, ageKind, hallKind } from '../../../typescript/main';
import { closeModalAction } from '../../../store/modalReducer';
import { RootState } from '../../../store/store';
import './ModalAdd.css'

function ModalAdd() {
  const modalContent = useSelector((state:RootState) => state.modal);
  const [modalInfo, setModalInfo] = useState<groupsList[] | null>(null);
  const [selectedGroup, setGroup] = useState<groupsList | null>(null);

  const [addData, setData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3001/data/groups`)
      .then(response => response.json())
      .then(data => setModalInfo([...data]));
  }, []);

  let modalHeader, modalBody, personForHandleForm = '';
  const modalFooter = <div className='modalFooter'>
      <button className='modalActionBtn'>Добавить</button>
      <input type="reset" value="Сбросить" className='modalResetBtn' onClick={() => setGroup(null)}/>
    </div>

  const clientTrainerCommonInfo = <>
    <div className="modalFormColumn">
      <input required className="modalFormTextfield" name="addSurname" type="text" placeholder="Фамилия" onChange={handleInput}/>
      <input required className="modalFormTextfield" name="addName" type="text" placeholder="Имя" onChange={handleInput}/>
      <input className="modalFormTextfield" name="addPatronymic" type="text" placeholder="Отчество" onChange={handleInput}/>
      <input className="modalFormTextfield" name="addPhone" type="tel" placeholder="Телефон" onChange={handleInput}/>
      <div className="modalFormUniteField">
        {(function(){
          const helpGenderObj = Object.keys(genderKind).filter(key => +key);
          return helpGenderObj.map(gender => {
            return <label>
              <input required className="modalFormRadiochoice" name="addGender" value={gender} type="radio" onChange={handleInput}/>
              {genderKind[+gender]}
            </label>
          })
        })()}
      </div>
    </div>
  </>
  const clientUniqColumn = <>
    <div className="modalFormColumn">
      <select required name="addCard" className="modalFormTextfield modalFormSelect" onChange={handleInput}>
        <option value="" disabled selected>Выбрать абонемент</option>
        {(function(){
          const helpGenderObj = Object.keys(cardKind).filter(key => +key);
          return helpGenderObj.map(card => {
            return (cardKind[+card] === 'Дополнительный') ? undefined : <option value={card}>{cardKind[+card]}</option>
          })
        })()}
      </select>
      <select required name="addGroup" className="modalFormTextfield modalFormSelect" onChange={handleInput}>
        <option value="" disabled selected>Выбрать группу</option>
        {modalInfo && (function(){
          return modalInfo.map(group => {
            return <option value={group.idGroup}>{group.groupName}</option>;
          })
        })()}
      </select>
      {(selectedGroup) && (<>
        <p className='modalFormSelectInfo'><span>Вид спорта:</span>{selectedGroup.sportKind}</p>
        <p className='modalFormSelectInfo'><span>Возрастная группа:</span>{selectedGroup.ageKind}</p>
        <p className='modalFormSelectInfo'><span>Зал:</span>{selectedGroup.hallKind}</p>
        <p className='modalFormSelectInfo'><span>Тренер:</span>{selectedGroup.trainer}</p>
        <p className='modalFormSelectInfo'><span>Состав группы:</span><span style={{color: (selectedGroup.students <= 15) ? 'green' : (selectedGroup.students <= 20) ? 'orange' : 'red'}}>{selectedGroup.students}</span></p>
      </>
      )}
    </div>
  </>
  const trainerUniqColumn = <>
    <div className="modalFormColumn">
      <select required name="addSport" className="modalFormTextfield modalFormSelect" onChange={handleInput}>
        <option value="" disabled selected>Выбрать спорт</option>
        {(function(){
          const helpGenderObj = Object.keys(sportKind).filter(key => +key);
          return helpGenderObj.map(card => {
            return <option value={card}>{sportKind[+card]}</option>
          })
        })()}
      </select>
      <select required name="addAge" className="modalFormTextfield modalFormSelect" onChange={handleInput}>
        <option value="" disabled selected>Выбрать возраст</option>
        {(function(){
          const helpGenderObj = Object.keys(ageKind).filter(key => +key);
          return helpGenderObj.map(card => {
            return <option value={card}>{ageKind[+card]}</option>
          })
        })()}
      </select>
      <select required name="addHall" className="modalFormTextfield modalFormSelect" onChange={handleInput}>
        <option value="" disabled selected>Выбрать зал</option>
        {(function(){
          const helpGenderObj = Object.keys(hallKind).filter(key => +key);
          return helpGenderObj.map(card => {
            return <option value={card}>{hallKind[+card]}</option>
          })
        })()}
      </select>
      <input required className="modalFormTextfield" name="addGroup" type="text" placeholder="Группа" list="addGroupForNewTrainer" autoComplete='off' onChange={handleInput}/>
      <datalist id="addGroupForNewTrainer">
        {(modalInfo) && (function(){
          return modalInfo.map(group => {
            return <option value={group.groupName}></option>
          })
        })()}
      </datalist>
    </div>
  </>

  switch (modalContent.modalActionDetail) {
    case 'addClient':
      modalHeader = <h3 className='modalTitle'>Добавить клиента</h3>;
      personForHandleForm = 'clients';
      modalBody = <>
        {clientTrainerCommonInfo}
        {clientUniqColumn}
      </>
      break;
    case 'addTrainer':
      modalHeader = <h3 className='modalTitle'>Добавить тренера</h3>;
      personForHandleForm = 'trainers';
      modalBody = <>
        {clientTrainerCommonInfo}
        {trainerUniqColumn}
      </>
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
          <div className="modalFormColumnUnite">
            {modalBody}
          </div>
          {modalFooter}
        </form>
        </div>
      </div>
    </div>
  );
}

export default ModalAdd;