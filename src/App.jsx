import './App.css'
import './карточки.css'
import { useState } from 'react';

function БлокПриложений (){
  return(
    <div className='подложкаБлокаПриложений'>
      <div className='приложение п1'/>
      <div className='приложение п2'/>
      <div className='приложение п3'/>
      <div className='приложение п4'/>
      <div className='приложение п5'/>
      <div className='приложение п6'/>
    </div>
  )
}

function БлокКарточек (){
  return(
    <div className='подложкаБлокаКарточек'>
      <div className='блокКарточек'>

        <div className='контейнер к1'>
          <div className='фото ф1'/>
          <div className='название'>Эспрессо</div>
          <div className='кнопка кн1'>60мл 140руб</div>
        </div>
        <div className='контейнер к1'>
          <div className='фото ф2'/>
          <div className='название'>Флет-Уайт</div>
          <div className='кнопка кн1'>250мл 250руб</div>

        </div>
        <div className='контейнер к1'>
          <div className='фото ф3'/>
          <div className='название'>Капучино</div>
          <div className='кнопка'>250мл 230руб</div>
          <div className='кнопка'>300мл 290руб</div>
          <div className='кнопка'>400мл 350руб</div>
        </div>
        <div className='контейнер к1'>
          <div className='фото ф4'/>
          <div className='название'>Раф</div>
          <div className='кнопка кн2'>300мл 350руб</div>
          <div className='кнопка'>400мл 390руб</div>
        </div>
        <div className='контейнер к1'>
          <div className='фото ф5'/>
          <div className='название'>Раф "Дубайский шоколад"</div>
          <div className='кнопка кн2'>300мл 380руб</div>
          <div className='кнопка'>400мл 420руб</div>
        </div>
        <div className='контейнер к1'>
          <div className='фото ф6'/>
          <div className='название'>Раф "Тоффи"</div>
          <div className='кнопка кн2'>300мл 380руб</div>
          <div className='кнопка'>400мл 420руб</div>
        </div>
        <div className='контейнер к1'>
          <div className='фото ф7'/>
          <div className='название'>Латте</div>
          <div className='кнопка кн2'>300мл 320руб</div>
          <div className='кнопка'>400мл 380руб</div>
        </div>
        <div className='контейнер к1'>
          <div className='фото ф8'/>
          <div className='название'>Латте Груша-роза</div>
          <div className='кнопка кн2'>300мл 340руб</div>
          <div className='кнопка'>400мл 390руб</div>
        </div>


      </div>
      <div className='кнопкиПодложкиБлокаКарточек'>
        <div className='кнопкаКК кк1'/>
        <div className='кнопкаКК кк2'/>
        <div className='кнопкаКК кк3'/>
      </div>
    </div>
  )
}


function БлокКорзина (){
  return(
    <div className='подложкаБлокаКорзины'>
    </div>
  )
}

function БлокЛичныйКабинет (){
  return(
    <div className='подложкаБлокаЛичныйКабинет'>
    </div>
  )
}



function App (){ 
  return (
    <div className='фон'>
      <БлокПриложений/>
      <БлокКарточек/>
      <БлокКорзина/>
      <БлокЛичныйКабинет/>
      

    </div>
)
}
export default App;