import "./globals.css";

export const metadata = {
  title: "Delowar Hossain Samrat | Full Stack Web Developer",
  description: "Portfolio of Delowar Hossain Samrat, aspiring Full Stack Web Developer and CSE student at IIUC."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
