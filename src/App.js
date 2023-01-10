import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import { Feed, Navbar, VideoDetail, ChannelDetail, SearchFeed } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/youtube_clone/" exact element={<Feed />} />
          <Route path="/youtube_clone/video/:id" element={<VideoDetail />} />
          <Route
            path="/youtube_clone/channel/:id"
            element={<ChannelDetail />}
          />
          <Route
            path="/youtube_clone/search/:searchTerm"
            element={<SearchFeed />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
