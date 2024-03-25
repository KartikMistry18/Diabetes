import React from 'react';

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      
      <main className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">DiabPro: Your Diabetes Management Companion</h1>
        <p className="text-lg mb-8">Diabetes checkup at your fingertips, because your health is in your hands. Check your diabetes status from the comfort of your home, with just a click!</p>
        <p className="text-lg mb-8">Predict Diabetes Risk and Detect Retinopathy Early</p>
        <a href="/diabetes" className="inline-block px-6 py-3 bg-blue-500 text-white text-lg rounded-md no-underline transition-colors duration-300 hover:bg-blue-700">Get Started</a>
      </main>

      <footer className="mt-auto w-full text-center py-4">
        <p>&copy; 2024 DiabPro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
