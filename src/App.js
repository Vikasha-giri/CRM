import React, { useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Launchpad from './pages/Launchpad';
import Contact from './pages/Contact';
import Campaign from './pages/contact files/Campaign';
import ContactRequest from './pages/contact files/Contact-requests';
import BulkAction from './pages/contact files/BulkAction';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//jQuery libraries
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import Opportunities from './pages/Opportunities';
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/campaign" element={<Campaign />} />
              <Route path="/contact-requests" element={<ContactRequest />} />
              <Route path="/bulk-actions" element={<BulkAction />} />
              <Route path="/opportunites" element={<Opportunities />} />
              <Route path="/add-user" element={<AddNew />} />
              <Route path="/uploadList" element={<UploadList />} />
              <Route path="/support" element={<Support />} />
              <Route path="/setting" element={<Setting />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <OpportunityModal />
      <WorkflowModal />
      <SendSmsModal />
      <AddTagsModal />
    </>
  );
};

export default App;