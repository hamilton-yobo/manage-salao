import Colors from '../../components/Colors';
import Link from 'next/link';

export default function () {
  return (
    <div>
      <Colors/>
      <h1>Dashboard</h1>
      <Link href="/" className="p-2 rounded bg-bluePastel">Dashboard</Link>
    </div>
  )
}
