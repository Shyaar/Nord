import AuthWrapper from "@/components/ui/AuthWrapper";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <AuthWrapper
      title="Verify your email"
      description="A verification link has been sent to your email address. Please check your inbox and click on the link to verify your account."
    >
      <div className="space-y-4">
        <Button type="button" className="w-full" variant="secondary">
          Resend Verification Email
        </Button>
        <p className="text-center text-sm text-gray-400">
          Already verified?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-primary hover:text-primary/80"
          >
            Login
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
}
