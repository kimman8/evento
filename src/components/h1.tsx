type H1Props = {
  children: React.ReactNode;
};
export default function H1({ children }: H1Props) {
  return (
    <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
      {children}
    </h1>
  );
}
