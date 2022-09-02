import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styles from "./App.module.less";
import Main from "../Main/Main";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import SelectedRowsPage from "../SelectedRowsPage/SelectedRowsPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.Container}>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/selected-rows' element={<SelectedRowsPage />} />
          <Route path='*' exact={true} element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
