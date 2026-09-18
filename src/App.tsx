import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import EventDetailPage from './pages/EventDetailPage'
import EventsPage from './pages/EventsPage'
import HomePage from './pages/HomePage'
import LegalPage from './pages/LegalPage'
import LocationDetailPage from './pages/LocationDetailPage'
import LocationsPage from './pages/LocationsPage'
import NotFoundPage from './pages/NotFoundPage'
import ServicesPage from './pages/ServicesPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="eventi" element={<EventsPage />} />
        <Route path="eventi/:slug" element={<EventDetailPage />} />
        <Route path="servizi" element={<ServicesPage />} />
        <Route path="location" element={<LocationsPage />} />
        <Route path="location/:slug" element={<LocationDetailPage />} />
        <Route path="chi-siamo" element={<AboutPage />} />
        <Route path="contatti" element={<ContactPage />} />
        <Route path="privacy" element={<LegalPage type="privacy" />} />
        <Route path="cookie" element={<LegalPage type="cookie" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
