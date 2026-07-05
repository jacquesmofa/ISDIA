import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import CoHosts from "../pages/co-hosts/page";
import Mission from "../pages/mission/page";
import FAQ from "../pages/faq/page";
import Agenda from "../pages/agenda/page";
import AgendaBuilder from "../pages/agenda-builder/page";
import Speakers from "../pages/speakers/page";
import Venue from "../pages/venue/page";
import Register from "../pages/register/page";
import CallForPapers from "../pages/call-for-papers/page";
import Sponsors from "../pages/sponsors/page";
import Volunteer from "../pages/volunteer/page";
import LiveStream from "../pages/live/page";
import MediaArchive from "../pages/media-archive/page";
import Press from "../pages/press/page";
import Gallery from "../pages/gallery/page";
import Login from "../pages/login/page";
import Dashboard from "../pages/dashboard/page";
import Networking from "../pages/networking/page";
import Chat from "../pages/chat/page";
import Partners from "../pages/partners/page";
import Archives from "../pages/archives/page";

const routes: RouteObject[] = [
  /* Directory 1: The Gateway */
  { path: "/", element: <Home /> },
  { path: "/co-hosts", element: <CoHosts /> },
  { path: "/mission", element: <Mission /> },
  { path: "/faq", element: <FAQ /> },

  /* Directory 2: The Core Agenda */
  { path: "/agenda", element: <Agenda /> },
  { path: "/agenda/builder", element: <AgendaBuilder /> },
  { path: "/speakers", element: <Speakers /> },
  { path: "/venue", element: <Venue /> },

  /* Directory 3: Registration & Global Portals */
  { path: "/register", element: <Register /> },
  { path: "/call-for-papers", element: <CallForPapers /> },
  { path: "/sponsors", element: <Sponsors /> },
  { path: "/volunteer", element: <Volunteer /> },

  /* Directory 4: Interactive Media Hub */
  { path: "/live", element: <LiveStream /> },
  { path: "/media/archive", element: <MediaArchive /> },
  { path: "/press", element: <Press /> },
  { path: "/gallery", element: <Gallery /> },

  /* Directory 5: Dynamic Networking Platform */
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/networking", element: <Networking /> },
  { path: "/networking/chat", element: <Chat /> },
  { path: "/partners", element: <Partners /> },

  /* Directory 6: Year-Over-Year Archives */
  { path: "/archives", element: <Archives /> },

  /* Catch-all */
  { path: "*", element: <NotFound /> },
];

export default routes;