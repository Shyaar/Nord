import AuthWrapper from "@/components/ui/AuthWrapper";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <AuthWrapper
      title="Login to your account"
      description="Enter your credentials to access your account."
    >
      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 bg-[#1a1a1a] border border-white/10 rounded-md text-white shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 block w-full px-3 py-2 bg-[#1a1a1a] border border-white/10 rounded-md text-white shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <Link
            href="/auth/forgot-password"
            className="font-medium text-primary hover:text-primary/80"
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full" variant="primary">
          Login
        </Button>
        <p className="text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-primary hover:text-primary/80"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </AuthWrapper>
  );
}
