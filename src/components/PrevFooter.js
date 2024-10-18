import React from 'react';
import footer from "../pages/images/footer.png"; // Ensure the path is correct

function PrevFooter() {
  return (
    <div className="relative bg-gray-800">
      {/* Display the footer image */}
      <img src={footer} alt="Footer Background" className="w-full h-auto" />

      {/* Overlay for better text visibility (optional) */}
      

      
    </div>
  );
}

export default PrevFooter;
