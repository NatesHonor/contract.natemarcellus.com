export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100">
      <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <div className="text-xl font-semibold">Client Portal</div>
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="/dashboard" className="hover:text-blue-600 transition">Dashboard</a>
            <a href="/dashboard/contracts" className="hover:text-blue-600 transition">Contracts</a>
            <a href="/dashboard/messages" className="hover:text-blue-600 transition">Messages</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  )
}
