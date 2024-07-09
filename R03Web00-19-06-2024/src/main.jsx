import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Main from './components/Main.jsx';
import Club from './pages/club/Club.jsx';

// Events
import MargallaBackyardUltra2024 from './pages/events/Backyard.jsx';
import GaliyatMountainTrail2024 from './pages/events/Galiyatmtr.jsx';
import InterClubHillHalfMarathon2025 from './pages/events/Hillmtr.jsx';
import IslamabadMarathon2025 from './pages/events/Islamabadiru.jsx';
import CapitalHalfMarathon2025 from './pages/events/Islamabadirc.jsx';
import KarachiMarathon2025 from './pages/events/Karachiscrv.jsx';
import LahoreMarathon2025 from './pages/events/Lahoreftc.jsx';
import AbbottWorldMarathonMajors from './pages/events/Wmm.jsx';
import EventsHomepage from './pages/events/Events.jsx';

// Training
import FiveTrainingPlans from './pages/training/Five.jsx';
import TenTrainingPlans from './pages/training/Ten.jsx';
import HalfMarathonTrainingPlan from './pages/training/Hm.jsx';
import MarathonTrainingPlan from './pages/training/Fm.jsx';
import UltraMarathonTrainingPlan from './pages/training/Ultra.jsx';
import VO2MaxImportance from './pages/training/Vo2.jsx';
import EightyTwentyRule from './pages/training/Rule.jsx';
import TrainingHomepage from './pages/training/Training.jsx';

// News
import NewsHomePage from './pages/news/News.jsx';
import BeijingMarathonArticle from './pages/news/articles/Beijing.jsx';
import BostonMarathon2024 from './pages/news/articles/Boston24.jsx';
import LondonMarathon2024 from './pages/news/articles/London.jsx';
import HardestGeezerRunningAfrica from './pages/news/articles/Gezeer.jsx';
import JasminBlogPost from './pages/news/articles/Jasmin.jsx';
import KiptumArticle from './pages/news/articles/Kiptum.jsx';
import PheidippidesBlogPost from './pages/news/articles/Pheid.jsx';

// Injury
import  InjuryHomepage from './pages/injury/InjuryHomepage.jsx'
import HamstringInjuries from './pages/injury/Hamstring.jsx';
import InjuryPrevention from './pages/injury/InjuryPrevention.jsx';
import ITBandSyndrome from './pages/injury/ItBand.jsx';
import NutritionForRunners from './pages/injury/Nutrition.jsx';
import PiriformisSyndrome from './pages/injury/Piriforimis.jsx';
import PlantarFasciitis from './pages/injury/Plantar.jsx';
import RecoveryTechniques from './pages/injury/Recovery.jsx';
import ShinInjury from './pages/injury/Shin.jsx';
import ComebackAfterInjury from './pages/injury/knee/Comeback.jsx';
import CommonKneeInjuries from './pages/injury/knee/CommonKnee.jsx';
import KneeRehab from './pages/injury/knee/KneeRehab.jsx';
import OveruseKneeInjuries from './pages/injury/knee/OverUse.jsx';
import RunningMythDebunked from './pages/injury/knee/RunningBad.jsx';
import ImpactOfRunningSurface from './pages/injury/knee/RunningSurface.jsx';
import ProperRunningTechniques from './pages/injury/knee/RunningTech.jsx';
import StrengthAndConditioning from './pages/injury/knee/Strength.jsx';

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt event fired');
  e.preventDefault();
  deferredPrompt = e;
  showInstallPromotion();
});

function showInstallPromotion() {
  const installButton = document.createElement('button');
  installButton.textContent = 'Install App';
  installButton.style.position = 'fixed';
  installButton.style.bottom = '10px';
  installButton.style.right = '10px';
  installButton.style.zIndex = '1000';
  document.body.appendChild(installButton);

  installButton.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
      installButton.remove();
    });
  });
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="/club-in-pakistan" element={<Club />} />
      
      {/* Events */}
      <Route path="/margalla-backyard-ultra-2024" element={<MargallaBackyardUltra2024 />} />
      <Route path="/galiyat-mountain-trail-2024" element={<GaliyatMountainTrail2024 />} />
      <Route path="/inter-club-hill-half-marathon-2025" element={<InterClubHillHalfMarathon2025 />} />
      <Route path="/islamabad-marathon-2025" element={<IslamabadMarathon2025 />} />
      <Route path="/capital-half-marathon-2025" element={<CapitalHalfMarathon2025 />} />
      <Route path="/karachi-marathon-2025" element={<KarachiMarathon2025 />} />
      <Route path="/lahore-marathon-2025" element={<LahoreMarathon2025 />} />
      <Route path="/abbot-world-major-marathons" element={<AbbottWorldMarathonMajors />} />
      <Route path="/events-main-page" element={<EventsHomepage />} />
      
      {/* Training */}
      <Route path="/five-training-plan" element={<FiveTrainingPlans />} />
      <Route path="/ten-training-plan" element={<TenTrainingPlans />} />
      <Route path="/half-marathon-training-plan" element={<HalfMarathonTrainingPlan />} />
      <Route path="/marathon-training-plan" element={<MarathonTrainingPlan />} />
      <Route path="/ultra-marathon-training-plan" element={<UltraMarathonTrainingPlan />} />
      <Route path="/vo2-max-for-runners" element={<VO2MaxImportance />} />
      <Route path="/twenty-rule-for-life" element={<EightyTwentyRule />} />
      <Route path="/training-homepage" element={<TrainingHomepage />} />
      
      {/* News */}
      <Route path="/news-main-page" element={<NewsHomePage />} />
      <Route path="/boston-marathon-2024" element={<BostonMarathon2024 />} />
      <Route path="/london-marathon-2024" element={<LondonMarathon2024 />} />
      <Route path="/barkley-jasmin-2024" element={<JasminBlogPost />} />
      <Route path="/messenger-marathon-pheid" element={<PheidippidesBlogPost />} />
      <Route path="/hardest-geezer-africa" element={<HardestGeezerRunningAfrica />} />
      <Route path="/kiptum-death" element={<KiptumArticle />} />
      <Route path="/beijing-contro-2024" element={<BeijingMarathonArticle />} />
      
      {/* Injury */}
      <Route path="/injury-homepage" element={<InjuryHomepage />} />
      <Route path="/injury-hamstring" element={<HamstringInjuries />} />
      <Route path="/injury-prevention" element={<InjuryPrevention />} />
      <Route path="/injury-itband" element={<ITBandSyndrome />} />
      <Route path="/injury-nutrition" element={<NutritionForRunners />} />
      <Route path="/injury-piriformis" element={<PiriformisSyndrome />} />
      <Route path="/injury-plantar" element={<PlantarFasciitis />} />
      <Route path="/injury-recovery" element={<RecoveryTechniques />} />
      <Route path="/injury-shin" element={<ShinInjury />} />
      <Route path="/injury-knee-comeback" element={<ComebackAfterInjury />} />
      <Route path="/injury-knee-common-injury" element={<CommonKneeInjuries />} />
      <Route path="/injury-knee-common-rehab" element={<KneeRehab />} />
      <Route path="/injury-knee-over-use" element={<OveruseKneeInjuries />} />
      <Route path="/injury-knee-running-bad" element={<RunningMythDebunked />} />
      <Route path="/injury-knee-running-surface" element={<ImpactOfRunningSurface />} />
      <Route path="/injury-knee-running-technique" element={<ProperRunningTechniques />} />
      <Route path="/injury-knee-strength" element={<StrengthAndConditioning />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
