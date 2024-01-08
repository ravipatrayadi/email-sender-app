import React from 'react'
import { TextBoxComponent} from '@syncfusion/ej2-react-inputs';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { MentionComponent , DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';

import './Template.css'


const Template = () => {
  const sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
   
  var data = [
    { Name: "Selma Rose", Status: "active", Eimg: "2", EmailId: "selma@gmail.com" },
    { Name: "Maria", Status: "active", Eimg: "1", EmailId: "maria@gmail.com" },
    { Name: "Russo Kay", Status: "busy", Eimg: "8", EmailId: "russo@gmail.com" },
    { Name: "Camden Kate", Status: "active", Eimg: "9", EmailId: "camden@gmail.com" },
    { Name: "Robert", Status: "busy", Eimg: "dp", EmailId: "robert@gmail.com" },
    { Name: "Garth", Status: "active", Eimg: "7", EmailId: "garth@gmail.com" },
    { Name: "Andrew James", Status: "away", Eimg: "pic04", EmailId: "noah@gmail.com" },
    { Name: "Olivia", Status: "busy", Eimg: "5", EmailId: "olivia@gmail.com" },
    { Name: "Sophia", Status: "away", Eimg: "6", EmailId: "sophia@gmail.com" },
    { Name: "Margaret", Status: "active", Eimg: "3", EmailId: "margaret@gmail.com" },
    { Name: "Ursula Ann", Status: "active", Eimg: "dp", EmailId: "ursula@gmail.com" },
    { Name: "Laura Grace", Status: "away", Eimg: "4", EmailId: "laura@gmail.com" },
    { Name: "Albert", Status: "active", Eimg: "pic03", EmailId: "albert@gmail.com" },
    { Name: "William", Status: "away", Eimg: "10", EmailId: "william@gmail.com" }
   ];
   var fieldsData = { text: 'Name' };
   
   var itemTemplate = function(data) {
    return (
     <table>
      <tbody>
       <tr>
        <td>
         <div id="mention-TemplateList">
          <img className="mentionEmpImage" src={"./images/" + data.Eimg +".png"} alt={data.Name}/>
          <span className={"e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom"+ data.Status}></span>
         </div>
        </td>
        <td className="mentionNameList">
         <span className="person">{data.Name}</span>
         <span className="email">{data.EmailId}</span>
        </td>
       </tr>
      </tbody>
     </table>
    );
   }
   var displayTemplate= function(data) {
    return (
     <React.Fragment><a href = "#" title={data.EmailId}>@{data.Name}</a></React.Fragment>
    );
   }
   var actionBegineHandler = function(args){
    if (args.requestType === 'EnterAction') {
     args.cancel = true;
    }
  }
  const toolbarSettings = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
};
const quickToolbarSettings = {
    image: ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-', 'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension']
};
  return (
    <div className="Temp">
      <div className='name'>
        <TextBoxComponent width='300px' placeholder="Enter  name" floatLabelType='Auto' />
      </div>

      <div className='to'>
        <TextBoxComponent width='300px' placeholder="To" floatLabelType='Auto' />
      </div>

      <div className='cc'>
        <TextBoxComponent width='200px' placeholder="CC" floatLabelType='Auto'  readOnly ={true}  />
      </div>

      <div className='cc'>
        <TextBoxComponent width='200px' placeholder="BCC" floatLabelType='Auto' />
      </div>
      <div className='heading'>
        <h2 style={{ fontWeight: 'normal' }}>Select Object</h2>
      </div>
      <DropDownListComponent id="ddlelement" width={250} dataSource={sportsData} popupHeight="200px" popupWidth="250px" placeholder="select a game"/>

      <div className='heading'>
        <h2 style={{ fontWeight: 'normal' }}>Body</h2>
      </div>
      <div>
      
      <div className='rte-control-section'>
    <RichTextEditorComponent id="mention_integration" height={450} toolbarSettings={toolbarSettings} quickToolbarSettings={quickToolbarSettings} placeholder="Type @ and tag the name"  actionBegin={actionBegineHandler.bind(this)}  >
     <p>Hello <span contentEditable={false} className='e-mention-chip'><a title="maria@gmail.com">@Maria</a></span></p>
     <p>Welcome to the mention integration with rich text editor demo. Type the <code>@</code> character and tag a user from the suggestion list. </p>
     <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
    </RichTextEditorComponent>
   </div>
      </div>

      <div>
      <MentionComponent id="mentionEditor" target="#mention_integration_rte-edit-view" suggestionCount={8} showMentionChar={false}  allowSpaces={true} dataSource={data} fields={fieldsData}
                    popupWidth="250px" popupHeight="200px" itemTemplate={itemTemplate} displayTemplate={displayTemplate.bind(this)}></MentionComponent>
 
      </div>

    </div>
  

  )
}

export default Template
