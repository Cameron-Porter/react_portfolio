import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AnalyticsProvider } from 'use-analytics'
import { Analytics } from 'analytics'
import App from './App'
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
  app: 'portfolio',
  plugins: [
    googleAnalytics({
      trackingId: 'UA-230947151-1',
    }),
  ],
})

ReactDOM.render(
  <AnalyticsProvider instance={analytics}>
    <Router>
      <App />
    </Router>
  </AnalyticsProvider>,
  document.getElementById('root')
)
