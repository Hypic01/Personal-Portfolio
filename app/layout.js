import '../styles/globals.css';

export default function RootLayout({children}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        
      </head>
      <body>{children}</body>
    </html>
  );
}