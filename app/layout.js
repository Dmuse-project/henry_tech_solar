// import "./globals.scss"
// export const metadata = {
//   title: 'Henry Tech Solar | Premium Solar Solutions for South-East Nigeria',
//   description: 'Stop NEPA frustration forever. Premium solar installations for homes & businesses across South-East Nigeria. 24/7 power guaranteed.',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link 
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap" 
//           rel="stylesheet" 
//         />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }



// app/layout.js
import './globals.scss';

export const metadata = {
  title: 'Henry Tech Solar | Premium Solar Solutions for South-East Nigeria',
  description: 'Stop NEPA frustration forever. Premium solar installations for homes & businesses across South-East Nigeria. 24/7 power guaranteed.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}