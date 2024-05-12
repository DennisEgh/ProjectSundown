import "../style/globals.css";

export const metadata = {
  title: "Sundown | We are humanity's future.",
  description: "For a united future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
