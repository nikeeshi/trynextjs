import Link from "next/link";
export const SideNav = () => (
  <nav>
    <Link href="/">
      ホーム
    </Link>
    <Link href="/blog">
      ブログ
    </Link>
  </nav>
);
