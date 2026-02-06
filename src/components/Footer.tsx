export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="max-w-[1200px] mx-auto w-[90%] text-center text-sm text-[var(--text-muted)]">
        <p>&copy; {new Date().getFullYear()} Dr. Phuc Le. All rights reserved.</p>
      </div>
    </footer>
  );
}
