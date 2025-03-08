import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2, Shield, Blocks, Wallet, Lock, Users, ChevronDown, Monitor, Download, Smartphone } from "lucide-react";
import { isWeb4Domain } from "./lib/web4";
import { Web4Site } from "./components/Web4Site";

function PageTitle({ title }: { title: string }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
}

function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-purple-700 text-white">
      <PageTitle title="openweb - browser download" />
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Download OpenWeb Browser</h1>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Experience the future of the internet with our secure, wallet-free browser. 
            Access Web4 features directly from your desktop or mobile device.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 flex flex-col items-center text-center"
          >
            <Monitor className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Windows</h2>
            <p className="text-blue-100 mb-6">Version 1.0.0</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-full font-semibold"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Windows
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 flex flex-col items-center text-center"
          >
            <Monitor className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-4">macOS</h2>
            <p className="text-blue-100 mb-6">Version 1.0.0</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-full font-semibold"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for macOS
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 flex flex-col items-center text-center"
          >
            <Monitor className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Linux</h2>
            <p className="text-blue-100 mb-6">Version 1.0.0</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-full font-semibold"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Linux
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 flex flex-col items-center text-center"
          >
            <Smartphone className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Android</h2>
            <p className="text-blue-100 mb-6">Version 1.0.0</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-full font-semibold"
            >
              <Download className="w-5 h-5 mr-2" />
              Get on Play Store
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Browser Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-xl">
              <Shield className="w-8 h-8 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Built-in Security</h4>
              <p className="text-blue-100">Advanced blockchain security without the complexity</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <Globe2 className="w-8 h-8 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Web4 Ready</h4>
              <p className="text-blue-100">Native support for all Web4 features and domains</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <Lock className="w-8 h-8 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Privacy First</h4>
              <p className="text-blue-100">Enhanced privacy protection by default</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">System Requirements</h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">Windows</h4>
              <p className="text-blue-100">Windows 10 or later</p>
              <p className="text-blue-100">4GB RAM minimum</p>
              <p className="text-blue-100">1GB free space</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">macOS</h4>
              <p className="text-blue-100">macOS 11 or later</p>
              <p className="text-blue-100">4GB RAM minimum</p>
              <p className="text-blue-100">1GB free space</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">Linux</h4>
              <p className="text-blue-100">Ubuntu 20.04 or later</p>
              <p className="text-blue-100">4GB RAM minimum</p>
              <p className="text-blue-100">1GB free space</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">Android</h4>
              <p className="text-blue-100">Android 8.0 or later</p>
              <p className="text-blue-100">2GB RAM minimum</p>
              <p className="text-blue-100">500MB free space</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();
  const domains = [".com", ".net", ".org", ".everything", ".web4", ".future"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % domains.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: <Blocks className="w-8 h-8" />,
      title: "Beyond Web3",
      description: "All the benefits of blockchain technology without the complexity - no wallet required"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Register Anything",
      description: "Complete freedom to register any domain or content - truly open and decentralized"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure by Design",
      description: "Blockchain-level security with traditional web simplicity"
    }
  ];

  const benefits = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "No Wallet Needed",
      description: "Access blockchain benefits without cryptocurrency or complex wallets"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Free Forever",
      description: "Register domains and content without any fees or hidden costs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User First",
      description: "Built for everyone, not just crypto enthusiasts"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-purple-700">
      <PageTitle title="openweb" />
      <div className="min-h-screen relative flex flex-col items-center justify-center text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            OpenWeb
          </h1>
          
          <div className="text-4xl font-bold h-14 flex items-center justify-center mb-8">
            <span className="mr-1">yourwebsite</span>
            <div className="overflow-hidden h-12 w-[12rem] relative flex items-center justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={domains[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute left-0 text-left text-white w-full"
                >
                  {domains[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Welcome to Web4 - The next evolution of the internet. Combining blockchain security with traditional web simplicity. No wallet required, completely free, and open for everyone.
          </p>

          <motion.button
            onClick={() => navigate('/download')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join the Future
          </motion.button>
        </motion.div>

        <motion.button
          onClick={scrollToFeatures}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-white/80" />
        </motion.button>
      </div>

      <div className="bg-white py-20 px-4" id="features">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What is Web4?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Web4 represents the next step in internet evolution. While Web3 introduced blockchain but remained complex,
              Web4 brings the same benefits without the technical barriers. It's the perfect blend of security,
              freedom, and simplicity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose OpenWeb?</h2>
            <p className="text-xl text-blue-100">The future of the web, accessible to everyone</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8"
            >
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">100%</div>
              <div className="text-gray-600">Free Forever</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8"
            >
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">0</div>
              <div className="text-gray-600">Wallets Required</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8"
            >
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">∞</div>
              <div className="text-gray-600">Possibilities</div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Be Part of the Future</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the next evolution of the internet. No technical knowledge required, no hidden costs, just pure innovation.
          </p>
          <motion.button
            onClick={() => navigate('/download')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Web4 Journey
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();
  const hostname = window.location.hostname;

  // Check if this is a Web4 domain
  if (isWeb4Domain(hostname)) {
    return <Web4Site domain={hostname} />;
  }

  // Regular OpenWeb site routing
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/download" element={<DownloadPage />} />
    </Routes>
  );
}

export default App;