import React from 'react';
import { BrowserRouter  ,Routes, Route} from 'react-router-dom';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './App.css';
import Object from './Pages/Object';
import Template from './Pages/Template';

function App() {

  const listData = [
     
  { id: "1", text: "Home" } ,
  { id: "2", text: "Object" } , 
  { id: "3", text: "Template"} 
  
];

  const listFields = { id: 'id', text: 'text' };

  let sidebarObj = SidebarComponent; 

  const buttonClick = () => {
    sidebarObj.toggle();
  };

  const onSelect = (args) => {
    switch (args.data.text) {
      case 'Home':
        window.location.href = '/Home';
        break;
      case 'Object':
        window.location.href = '/create-object';
        break;
      case 'Template':
        window.location.href = '/email-template';
        break;
      default:
        break;
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="header" style={{ width: '100%' }}>
          <span style={{ float: 'left' }}>
            <ButtonComponent className="customBtn" iconCss="e-icons e-menu" onClick={buttonClick}>
              Language
            </ButtonComponent>
          </span>
          <span>Header</span>
        </div>
        <SidebarComponent
          style={{ margin: '10px' }}
          width="250px"
          position="Left"
          ref={(Sidebar) => (sidebarObj = Sidebar)}
          type="Slide"
        >
          <div className="sidebar-content">
            <ListViewComponent dataSource={listData} fields={listFields} select={onSelect} />
          </div>
        </SidebarComponent>
        <Routes>

          <Route path="/Home" element={<></>} />
          <Route path="/create-object" element={<Object/>} />
          <Route path="/email-template" element={<Template/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
