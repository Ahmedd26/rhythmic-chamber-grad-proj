import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/styles.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Explore from "./pages/search/Explore";
import Dashboard from "./pages/dashboard/Dashboard";
import Challenges from "./pages/challenges/Challenges";
import ChallengeDetails from "./pages/challenges/challengeDetails/ChallengeDetails";
import FAQsPage from "./pages/FAQs/FAQs";
import Feed from "./pages/Feed/Feed";
import UserProfile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/editProfile/EditProfile";
import Products from "./pages/profile/products/Products";
import Advertisement from "./pages/advertisement/Advertisement";
import SubscriptionPlans from "./pages/subscriptionPlans/SubscriptionPlans";
import Licences from "./pages/licenses/Licenses";
import Requests from "./pages/requests/Requests";
import Upload from "./pages/upload/Upload";
import UploadTrack from "./pages/upload/screens/track/UploadTrack";
import UploadPack from "./pages/upload/screens/pack/UploadPack";
import Login from "./Auth/login/Login";
import Register from "./Auth/register/Register";
import ViewTrack from "./pages/viewTrack/ViewTrack";
import Cart from "./pages/cart/Cart";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="overlay"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/FAQs" element={<FAQsPage />} />
          <Route path="/view-track" element={<ViewTrack />} />
          <Route path="/challenges">
            <Route index element={<Challenges />} />
            <Route path=":challengeId" element={<ChallengeDetails />} />
          </Route>
          <Route path="/feed">
            <Route index element={<Feed />} />
            {/* <Route path=":challengeId" element={<ChallengeDetails />} /> */}
          </Route>
          <Route path="/profile">
            <Route index element={<UserProfile />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="upload">
              <Route index element={<Upload />} />
              <Route path="track-upload" element={<UploadTrack />} />
              <Route path="pack-upload" element={<UploadPack />} />
            </Route>
            <Route path="products" element={<Products />} />
            {/* <Route path=":productId" element={<ChallengeDetails />} /> */}
          </Route>

          <Route path="/advertisement">
            <Route index element={<Advertisement />} />
          </Route>
          <Route path="/subscription-plans">
            <Route index element={<SubscriptionPlans />} />
          </Route>
          <Route path="/licenses">
            <Route index element={<Licences />} />
          </Route>
          <Route path="/requests">
            <Route index element={<Requests />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
