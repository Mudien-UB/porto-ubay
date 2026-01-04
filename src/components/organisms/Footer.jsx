import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 mt-10 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Mudien_UB.
            <br /> Third-party assets are used under their respective licenses.
          </p>
        </div>
      </footer>
    </>
  );
}
