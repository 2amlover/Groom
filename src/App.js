import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRCode from "./components/qrcode/QRCode";
import Content from "./components/homepage/Content";
import Bride from "./components/bride/Bride";
import Groom from "./components/groom/Groom";
import Carou1 from "./components/bride/carousel/Carou1";
import Poster from "./components/bride/poster/Poster";
import Carou2 from "./components/bride/carousel/Carou2";
import SaveDate from "./components/bride/savedate/SaveDate";


import Function from "./components/bride/functions/Function";
import Pooja from "./components/bride/functions/funtabs/Pooja";
import Haldi from "./components/bride/functions/funtabs/Haldi";
import Mehendi from "./components/bride/functions/funtabs/Mehendi";
import Music from "./components/bride/functions/funtabs/Music";
import Wedding from "./components/bride/functions/funtabs/Wedding";
import Reception from "./components/bride/functions/funtabs/Reception";
import InviteFooter from "./components/bride/functions/funtabs/InviteFooter";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<QRCode />} />
          <Route path="/content" element={<Content />} />
          <Route path="/bride" element={<Bride />} />
          <Route path="/groom" element={< Groom/>} />
          <Route path="/carou1" element={< Carou1/>} />
          <Route path="/carou2" element={< Carou2/>} />
          <Route path="/poster" element={< Poster/>} />
          <Route path="/savedate" element={< SaveDate/>} />

          {/*Functions*/}
          <Route path="/functions" element={< Function/>} />
          <Route path="/pooja" element={< Pooja/>} />
          <Route path="/haldi" element={< Haldi/>} />
          <Route path="/mehendi" element={< Mehendi/>} />
          <Route path="/music" element={< Music/>} />
          <Route path="/wedding" element={< Wedding/>} />
          <Route path="/reception" element={< Reception/>} />
          <Route path="/invitefooter" element={< InviteFooter/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
