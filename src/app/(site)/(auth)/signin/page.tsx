"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Gọi signIn với provider "credentials" và truyền dữ liệu đăng nhập
    const result = await signIn("credentials", {
      redirect: false, // Không tự động chuyển hướng
      username,
      password,
    });

    console.log(result);
    if (result?.error) {
      setError(result.error);
    } else {
      // Nếu đăng nhập thành công, bạn có thể chuyển hướng hoặc xử lý theo nhu cầu
      console.log("Đăng nhập thành công!", result);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}
    >
      <h1>Login</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>
      <button type="submit" style={{ width: "100%" }}>
        Sign In
      </button>
    </form>
  );
}
