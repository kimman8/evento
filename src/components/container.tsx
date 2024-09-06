export default function Container({ children }) {
  return (
    <div className="max-w-7xl min-h-screen mx-auto flex flex-col bg-white/[2%]">
      {children}
    </div>
  );
}
