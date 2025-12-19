export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
        <p>oi mundo</p>
        {children}
    </div>
  );
}