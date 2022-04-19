import { genderKind, cardKind, groupsList} from '../../../../typescript/main';

function ModalAddClient({handleInput, modalInfo, selectedGroup}: {handleInput: any, modalInfo: groupsList[] | null, selectedGroup: groupsList | null}) {
  return (
    <div className="modalFormColumnUnite">
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
    </div>
  );
}

export default ModalAddClient;