import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';

const CourageStage1 = lazy(() => import('./CourageStage1'));

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/courage"
        element={
          <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>}>
            <CourageStage1 />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default AppRouter;
