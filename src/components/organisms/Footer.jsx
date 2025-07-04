import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 mt-10 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">All rights reserved, © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  )
}
