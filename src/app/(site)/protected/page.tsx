import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  // Nếu không có phiên đăng nhập, chuyển hướng về trang login
  if (!session) {
    redirect("/signin");
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <h1>Protected Page</h1>
      <p>
        Chào mừng, {session.user?.name || "User"}!
      </p>
      <p>Email: {session.user?.email}</p>
      {/* Nếu muốn, bạn có thể thêm chức năng sign out ở đây */}
    </div>
  );
}
