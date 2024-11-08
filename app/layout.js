

export const metadata = {
  title: "Maa Nursing",
  description: "Injection services. Medical services. All type of nursing services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0,padding:0}}>{children}</body>
    </html>
  );
}
