import React, { useState } from 'react';
import './Object.css';
import { TextBoxComponent, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Filter,
  Group
} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';



const Object = () => {
  const [isFileUploaded, setFileUploaded] = useState(false);

  const path = {
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
    chunkSize: '102400',
  };

  const handleUploadSuccess = () => {
    setFileUploaded(true);
  };

  const ChangeBtnText = (args) => {
    if(args.target.classList.contains('e-active'))
      args.target.textContent = "SAVED"
    else
      args.target.textContent = "SAVE"
  }
  
  return (

    <div className='App'>
      <div className='tbox'>
        <TextBoxComponent width='300px' placeholder="Enter  name" floatLabelType='Always' />
      </div>
      <div className='fupload'>
        <UploaderComponent
          asyncSettings={path}
          multiple={false}
          autoUpload={false}
          allowedExtensions=".pdf, .ods, .csv, .tsv, .xlsx"
          success={handleUploadSuccess}
        />
      </div>

      {isFileUploaded && (
        <div className='grid'>
        <GridComponent dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 8}}
        // allowFiltering={true}
        // allowGrouping={true}
      >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Invoice ID' textAlign='Right' width='100' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' />
          <ColumnDirective field='ShipName' headerText='Ship Name' />
          <ColumnDirective field='Freight' textAlign='Right' format='C2' width='100' />
        </ColumnsDirective>
        <Inject services={[Page, Filter, Group]} />
      </GridComponent>
        </div>
      )}

      <div className='save'>
        <ButtonComponent cssClass="e-outline custom-button" isToggle={true}onClick={ChangeBtnText}>SAVE</ButtonComponent>
      </div>

    </div>
  )
}

export default Object
