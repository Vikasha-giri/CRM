import React, { useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Launchpad from './pages/Launchpad';
import ContactData from './pages/contact/ContactData';
import Campaign from './pages/contact files/Campaign/Campaign';
import ContactRequest from './pages/contact files/Contact-requests/ContactRequests';
import BulkAction from './pages/contact files/BulkAction/BulkAction';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//jQuery libraries
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import Opportunities from './pages/opportunities/Opportunities';
import AddNew from './pages/AddNew';
import UploadList from './pages/Upload';
import Support from './pages/Support';
import Setting from './pages/Setting';
import Conversations from './pages/Conversations';
import Sidebar from './components/Sidebar';
import AddTagsModal from './pages/contact files/contactModals/AddTagsModal';
import OpportunityModal from './pages/contact files/contactModals/OpportunityModal';
import WorkflowModal from './pages/contact files/contactModals/WorkflowModal';
import SendSmsModal from './pages/contact files/contactModals/SendSmsModal';
import AddOppo from './pages/opportunities/AddOppo';
import Restore from './pages/contact files/Restore';

const App = () => {
  return (
    <>
      <div className="wrapper">
        <BrowserRouter> 
          <Routes>
              <Route index element={<Login />} />
              <Route path="/" element={<Sidebar />} >
              <Route path="/launchpad" element={<Launchpad />} />
              <Route path="/conversations" element={<Conversations />} />
              <Route path="/contact" element={<ContactData />} />            
              <Route path="/campaign" element={<Campaign />} />
              <Route path="/contact-requests" element={<ContactRequest />} />
              <Route path="/bulk-actions" element={<BulkAction />} />
              <Route path="/opportunites" element={<Opportunities />} />
              <Route path="/add-user" element={<AddNew />} />
              <Route path="/uploadList" element={<UploadList />} />
              <Route path="/support" element={<Support />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/restore" element={<Restore/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <OpportunityModal />
      <WorkflowModal />
      <SendSmsModal />
      <AddTagsModal />
      <AddOppo/>
    </>
  );
};

export default App;