export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-center text-slate-800">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
    </div>
  );
}
