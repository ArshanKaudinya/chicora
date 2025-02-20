import React, { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged 
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate(from, { replace: true }); 
      }
    });
    return () => unsubscribe();
  }, [navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let userCredential;
      if (isRegistering) {
        // Step 1: Create User in Firebase Authentication
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user; 

        // Step 2: Store User Data in Firestore
        await setDoc(doc(db, "users", user.uid), {
          name,
          username,
          email,
          coins: 10, 
        });

      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError(error.message);
      console.error("🔥 Firebase Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="font-inter mt-32 flex flex-col items-center justify-center bg-white">
        <div className="w-full max-w-md bg-gray-100 shadow-md rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-ddpurple mb-4">
            {isRegistering ? "Sign Up" : "Sign In"}
          </h1>

          {error && <p className="text-red-500 mb-3">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {isRegistering && (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mlpurple"
                />

                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mlpurple"
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mlpurple"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mlpurple"
            />

            <button
              type="submit"
              className="bg-mlpurple text-black px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform"
            >
              {isRegistering ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="mt-4 text-dlpurple hover:underline"
          >
            {isRegistering ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;





