interface AuthWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function AuthWrapper({ title, description, children }: AuthWrapperProps) {
  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
      </div>
      {children}
    </div>
  );
}
