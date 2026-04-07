export async function generateStaticParams() {
  return [
    { day: '1' },
    { day: '2' },
    { day: '3' }
  ];
}

export default function DayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
