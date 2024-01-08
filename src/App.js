// import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import './App.css';
// import { ListViewComponent } from '@syncfusion/ej2-react-lists';
// function App() {
//   const listData=[
//     { id: "1", text: "JavaScript", 
//         description: "JavaScript (JS) is an interpreted computer programming language. " +
//         "It was originally implemented as part of web browsers so that client-side scripts" + 
//         "could interact with the user, control the browser, communicate asynchronously, and" +
//         "alter the document content that was displayed. However, it has recently" +
//         "become common in both game development and the creation of desktop applications." },
//     { id: "2", text: "TypeScript", 
//         description: "It is a typed superset of JavaScript that compiles to plain JavaScript." + 
//         "TypeScript is an open-source, object-oriented programing language. It contains all elements of JavaScript" + 
//         "It is a language designed for large-scale JavaScript application development, which can be executed on any" + 
//         "browser, any Host, and any Operating System. TypeScript is a language as well as a set of tools." +
//         " TypeScript is the ES6 version of JavaScript with some additional features." },
//     { id: "3", text: "Angular", 
//         description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript." +
//         " Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript" +
//         " libraries that you import into your applications." },
//     { id: "4", text: "React",
//         description: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces." +
//         " It lets you compose complex UIs from small and isolated pieces of code called “components”." +
//         " It can also render on the server using Node." },
//     { id: "5", text: "Vue", 
//         description: "A progressive framework for building user interfaces. It is incrementally adoptable." +
//         " The core library is focused on the view layer only and is easy to pick up and integrate with other" +
//         " libraries or existing projects. On the other hand, Vue is also perfectly capable of powering" +
//         " sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries." }
//   ];
//   let listFields={id:'id',text:'text'}
//   let sidebarObj =  SidebarComponent;
//   const buttonClick = ()=>{
//     sidebarObj.toggle();
//   }
//   const onSelect=(args)=>{
//     let mainContent = document.getElementsByClassName("main-content")[0];
//     if(mainContent){
//       mainContent.innerHTML = args.data.description;
//     }
//   }
//   return (
//     <div className="App">
//      <div className='header' style={{width:'100%'}} >
//        <span style={{float:'left'}}>
//        <ButtonComponent className='customBtn' iconCss='e-icons e-menu' onClick={buttonClick}
//        >Language</ButtonComponent>
//        </span>
//       <span>Header</span>
//      </div>
//      <SidebarComponent 
//   style={{margin:'10px'}}     
//   width='250px'
//   position='Left'
//   ref={Sidebar => (sidebarObj = Sidebar)}
//   type='Slide' // showBackdrop={true}
// >
//        <div className='sidebar-content' >
//          <ListViewComponent     
//          dataSource={listData} fields={listFields}
//          select={onSelect}
//          ></ListViewComponent>
//        </div>
//      </SidebarComponent>
//      <div className='main-content'>
//      Home Page
//      </div>
//     </div>
//   );
// }
// export default App;




// // <BrowserRouter>
// // <Routes>
// //   <Route path='/' />
// //   <Route path='/object' />
// //   <Route path='/' />
  
// // </Routes>
// // </BrowserRouter>






import React from 'react';
import { BrowserRouter  ,Routes, Route } from 'react-router-dom';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './App.css';


function App() {
  const listData = [
     
  { id: "1", text: "Home" } ,
  { id: "2", text: "Object" } , 
  { id: "3", text: "Template"} 
  
];

  const listFields = { id: 'id', text: 'text' };

  let sidebarObj = null; 

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
          <Route path="/create-object" element={<></>} />
          <Route path="/email-template" element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
