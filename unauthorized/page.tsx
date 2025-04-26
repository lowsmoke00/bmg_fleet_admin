// app/unauthorized/page.tsx
export default function UnauthorizedPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Unauthorized Access</h1>
        <p>You don't have permission to view this page.</p>
        <a href="/" className="mt-4 text-blue-600 hover:underline">
          Return to Home
        </a>
      </div>
    );
  }