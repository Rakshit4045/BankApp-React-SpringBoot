export default function InternetChecker() {
  return (
    <div
      className="d-flex justify-content-center py-2 m-0"
      style={{ background: "#fff4e5" }}
    >
      <i
        class="bi bi-wifi-off fs-4x px-3"
        style={{ height: "fit-content", color: "#ffac34" }}
      ></i>
      <p style={{ color: "#6f5528", margin: "0" }}>
        Not connected to the internet. Please check your connection. Some
        functionalities may not be available.
      </p>
    </div>
  );
}
