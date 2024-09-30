import React, { StrictMode } from 'react';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Landing from './Landing';
import Skill from './Skill';
import './index.css';

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Landing></Landing>
    <Skill></Skill>
  </StrictMode>
);
