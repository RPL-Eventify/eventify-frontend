import Navbar from '@/components/Navbar';

export default function Layout({ children }) {
  return (
    <div className="grid h-full grid-rows-[80px_1fr]">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
