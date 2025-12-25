import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PetList from './pages/PetList';
import PetDetails from './pages/PetDetails';
import MyRequests from './pages/MyRequests';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import AdminPets from './pages/AdminPets';
import AdminRequests from './pages/AdminRequests';
import AdminPetForm from './pages/AdminPetForm';
import AdminLayout from './components/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Footer from './components/Footer';

// Footer Pages
import About from './pages/About';
import SuccessStories from './pages/SuccessStories';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import AdoptionPolicy from './pages/AdoptionPolicy';

function App() {
    return (
        <AuthProvider>
            <Routes>
                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="users" element={<AdminUsers />} />
                    <Route path="pets" element={<AdminPets />} />
                    <Route path="pets/new" element={<AdminPetForm />} />
                    <Route path="pets/edit/:id" element={<AdminPetForm />} />
                    <Route path="requests" element={<AdminRequests />} />
                </Route>

                {/* Public/User Routes */}
                <Route path="*" element={<MainLayout />} />
            </Routes>
        </AuthProvider>
    );
}

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] flex flex-col">
            <Navbar />
            <main className="flex-grow relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/pets" element={<PetList />} />
                    <Route path="/pets/:id" element={<PetDetails />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/success-stories" element={<SuccessStories />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/adoption-policy" element={<AdoptionPolicy />} />
                    <Route path="/my-requests" element={
                        <ProtectedRoute>
                            <MyRequests />
                        </ProtectedRoute>
                    } />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
