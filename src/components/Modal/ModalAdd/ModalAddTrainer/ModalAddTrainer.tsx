import { genderKind, groupsList, ageKind, hallKind, sportKind} from '../../../../typescript/main';

function ModalAddTrainer({handleInput, modalInfo}: {handleInput: any, modalInfo: groupsList[] | null}) {
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
    </div>
  );
}

export default ModalAddTrainer;